import React, {
  Suspense,
  useRef,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ----------------------
   Helpers
   ---------------------- */
function makeLabelCanvas(text = "LABEL", width = 512, height = 128) {
  const cvs = document.createElement("canvas");
  cvs.width = width;
  cvs.height = height;
  const ctx = cvs.getContext("2d");
  ctx.fillStyle = "rgba(0,0,0,0)";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#fff";
  ctx.font = "bold 36px sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(text, width / 2, height / 2 + 12);
  return cvs;
}

/* ----------------------
   UPS component (memoized)
   ---------------------- */
const UPS = React.memo(function UPS({ position = [-5, 0, 0], active = false }) {
  const ledRef = useRef();
  const labelTex = useMemo(
    () => new THREE.CanvasTexture(makeLabelCanvas("UPS / INVERTER")),
    []
  );

  useEffect(() => {
    if (!ledRef.current) return;
    const mat = ledRef.current.material;
    if (active) {
      mat.emissive.setHex(0x00ff88);
      mat.emissiveIntensity = 2.4;
    } else {
      mat.emissive.setHex(0x000000);
      mat.emissiveIntensity = 0;
    }
  }, [active]);

  return (
    <group position={position}>
      {/* UPS body */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[3, 2, 2]} />
        <meshStandardMaterial
          color={"#4b5563"}
          metalness={0.7}
          roughness={0.25}
        />
      </mesh>

      {/* display panel */}
      <mesh position={[0, 1.5, 1.05]}>
        <boxGeometry args={[2.5, 0.8, 0.1]} />
        <meshStandardMaterial
          color={"#0f172a"}
          emissive={0x001100}
          emissiveIntensity={0.12}
        />
      </mesh>

      {/* LED */}
      <mesh
        ref={ledRef}
        position={[0, 1.5, 1.25]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.12, 8]} />
        <meshStandardMaterial
          color={"#ffffff"}
          emissive={0x000000}
          emissiveIntensity={0}
        />
      </mesh>

      {/* label canvas */}
      <mesh position={[0, 0.5, 1.05]}>
        <planeGeometry args={[2.5, 0.6]} />
        <meshBasicMaterial map={labelTex} transparent />
      </mesh>
    </group>
  );
});

/* ----------------------
   House component (memoized)
   ---------------------- */
const House = React.memo(function House({
  position = [5, 0, 0],
  powered = true,
  withGarden = true,
  name = "House",
}) {
  const windowsRef = useRef([]);
  const gardenRef = useRef([]);
  const interiorLightRef = useRef();
  const labelTex = useMemo(
    () => new THREE.CanvasTexture(makeLabelCanvas(name, 384, 64)),
    [name]
  );

  useEffect(() => {
    // windows glow
    windowsRef.current.forEach((w) => {
      if (!w) return;
      const mat = w.material;
      if (powered) {
        mat.emissive.setHex(0xffd89b);
        mat.emissiveIntensity = 1.6;
        mat.opacity = 0.95;
      } else {
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
        mat.opacity = 0.7;
      }
    });

    // interior light
    if (interiorLightRef.current)
      interiorLightRef.current.intensity = powered ? 1.6 : 0;

    // garden lamps
    gardenRef.current.forEach((g) => {
      if (!g) return;
      const mat = g.material;
      if (powered) {
        mat.emissive.setHex(0xfff1b8);
        mat.emissiveIntensity = 1.2;
        g.visible = true;
      } else {
        mat.emissive.setHex(0x000000);
        mat.emissiveIntensity = 0;
        g.visible = false; // hide lamps when no power
      }
    });
  }, [powered]);

  return (
    <group position={position}>
      {/* body */}
      <mesh position={[0, 1.25, 0]} castShadow>
        <boxGeometry args={[4, 2.5, 4]} />
        <meshStandardMaterial
          color={"#d97706"}
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>

      {/* roof */}
      <mesh position={[0, 3.5, 0]} rotation={[0, Math.PI / 4, 0]} castShadow>
        <coneGeometry args={[3, 2, 4]} />
        <meshStandardMaterial
          color={"#b91c1c"}
          roughness={0.9}
          metalness={0.05}
        />
      </mesh>

      {/* door */}
      <mesh position={[0, 0.9, 2.05]} castShadow>
        <boxGeometry args={[1, 1.8, 0.1]} />
        <meshStandardMaterial color={"#7a4b2a"} />
      </mesh>

      {/* windows */}
      <mesh
        ref={(el) => (windowsRef.current[0] = el)}
        position={[-1.2, 1.5, 2.05]}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial
          color={"#88ccff"}
          emissive={0x000000}
          emissiveIntensity={0}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      <mesh
        ref={(el) => (windowsRef.current[1] = el)}
        position={[1.2, 1.5, 2.05]}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial
          color={"#88ccff"}
          emissive={0x000000}
          emissiveIntensity={0}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      <mesh
        ref={(el) => (windowsRef.current[2] = el)}
        position={[2.05, 1.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
      >
        <boxGeometry args={[0.8, 0.8, 0.1]} />
        <meshStandardMaterial
          color={"#88ccff"}
          emissive={0x000000}
          emissiveIntensity={0}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      {/* interior warm light */}
      <pointLight
        ref={interiorLightRef}
        position={[0, 1.5, 0]}
        color={0xffaa33}
        intensity={powered ? 1.6 : 0}
        distance={10}
      />

      {/* garden lamps */}
      {withGarden &&
        [
          [-2.2, 0.1, -2.2],
          [2.2, 0.1, -2.2],
          [-2.6, 0.1, 1.2],
          [2.6, 0.1, 1.2],
        ].map((pos, i) => (
          <mesh
            key={i}
            ref={(el) => (gardenRef.current[i] = el)}
            position={[pos[0], pos[1] + 0.4, pos[2]]}
            visible={powered}
            castShadow
          >
            <cylinderGeometry args={[0.08, 0.08, 0.6, 8]} />
            <meshStandardMaterial
              color={"#ffeab3"}
              emissive={0x000000}
              emissiveIntensity={0}
            />
          </mesh>
        ))}

      {/* small name label */}
      <mesh position={[0, -0.2, 2.7]}>
        <planeGeometry args={[2.2, 0.4]} />
        <meshBasicMaterial map={labelTex} transparent />
      </mesh>
    </group>
  );
});

/* ----------------------
   Electric Pole component
   ---------------------- */
const ElectricPole = React.memo(function ElectricPole({
  position = [0, 0, 0],
}) {
  return (
    <group position={position}>
      {/* Pole */}
      <mesh position={[0, 3, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 6, 8]} />
        <meshStandardMaterial color={"#9ca3af"} />
      </mesh>

      {/* Cross arm */}
      <mesh position={[0, 5.5, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 3, 6]} />
        <meshStandardMaterial color={"#6b7280"} />
      </mesh>

      {/* Insulators */}
      {[
        [-1.2, 5.5, 0],
        [0, 5.5, 0],
        [1.2, 5.5, 0],
      ].map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <sphereGeometry args={[0.15, 8, 8]} />
          <meshStandardMaterial color={"#e5e7eb"} />
        </mesh>
      ))}

      {/* Base */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.2, 8]} />
        <meshStandardMaterial color={"#4b5563"} />
      </mesh>
    </group>
  );
});

/* ----------------------
   FlowLine (optimized)
   ---------------------- */
const FlowLine = React.memo(function FlowLine({
  start,
  end,
  color = 0xffff00,
  active = true,
  count = 20, // Reduced particle count for performance
  speed = 0.4,
}) {
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push({
        t: Math.random(),
        speed: 0.002 * speed + Math.random() * 0.003 * speed,
        offset: (Math.random() - 0.5) * 0.08,
      });
    }
    return arr;
  }, [count, speed]);

  const refs = useRef([]);
  const dir = useMemo(
    () => new THREE.Vector3().subVectors(end, start),
    [start.x, start.y, start.z, end.x, end.y, end.z]
  );
  const length = dir.length();
  const mid = useMemo(
    () => start.clone().add(end).multiplyScalar(0.5),
    [start.x, start.y, start.z, end.x, end.y, end.z]
  );
  const quat = useMemo(() => {
    const axis = new THREE.Vector3(0, 1, 0);
    const q = new THREE.Quaternion().setFromUnitVectors(
      axis,
      dir.clone().normalize()
    );
    return q;
  }, [dir.x, dir.y, dir.z]);

  useFrame(() => {
    if (!active) {
      refs.current.forEach((m) => m && (m.material.opacity = 0));
      return;
    }
    particles.forEach((p, i) => {
      p.t += p.speed;
      if (p.t > 1) p.t = 0;
      const pos = new THREE.Vector3().lerpVectors(start, end, p.t);
      // add slight sideways offset
      const ndir = new THREE.Vector3().subVectors(end, start).normalize();
      const up = new THREE.Vector3(0, 1, 0);
      const side = new THREE.Vector3().crossVectors(ndir, up).normalize();
      pos.addScaledVector(side, p.offset);
      if (refs.current[i]) {
        refs.current[i].position.copy(pos);
        refs.current[i].material.opacity =
          0.9 * (0.6 + Math.sin((Date.now() + i * 100) * 0.005) * 0.4);
      }
    });
  });

  return (
    <group>
      {/* thin connecting wire (cylinder) */}
      <mesh position={[mid.x, mid.y, mid.z]} quaternion={quat}>
        <cylinderGeometry args={[0.02, 0.02, length, 6]} />
        <meshStandardMaterial color={"#222"} />
      </mesh>

      {/* moving particles */}
      {particles.map((_, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)}>
          <sphereGeometry args={[0.06, 6, 6]} /> {/* Reduced sphere segments */}
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
            transparent
            opacity={active ? 0.8 : 0}
          />
        </mesh>
      ))}
    </group>
  );
});

/* ----------------------
   SceneContent (optimized)
   ---------------------- */
const SceneContent = React.memo(function SceneContent({ gridOn, upsOn }) {
  // defined start & end points (Vectors must be stable objects per render to avoid re-memo churn)
  const upsSource = useMemo(() => new THREE.Vector3(-5, 1.5, -1), []);
  const gridSource = useMemo(() => new THREE.Vector3(0, 6, -8), []);

  // Original houses
  const houseAPos = useMemo(() => new THREE.Vector3(5, 0, 0), []);
  const houseBPos = useMemo(() => new THREE.Vector3(12, 0, 0), []);

  // New houses at the back
  const houseCPos = useMemo(() => new THREE.Vector3(5, 0, -8), []);
  const houseDPos = useMemo(() => new THREE.Vector3(12, 0, -8), []);

  const endA = useMemo(
    () => houseAPos.clone().add(new THREE.Vector3(0, 2, 0)),
    [houseAPos.x]
  );
  const endB = useMemo(
    () => houseBPos.clone().add(new THREE.Vector3(0, 2, 0)),
    [houseBPos.x]
  );
  const endC = useMemo(
    () => houseCPos.clone().add(new THREE.Vector3(0, 2, 0)),
    [houseCPos.x]
  );
  const endD = useMemo(
    () => houseDPos.clone().add(new THREE.Vector3(0, 2, 0)),
    [houseDPos.x]
  );

  // logic: when grid on all houses get grid; if grid off, UPS supplies A if upsOn true
  const gridFlowActiveA = gridOn;
  const gridFlowActiveB = gridOn;
  const gridFlowActiveC = gridOn;
  const gridFlowActiveD = gridOn;
  const upsFlowActiveA = !gridOn && upsOn;

  return (
    <>
      {/* background lights */}
      <ambientLight intensity={0.35} color={0xffffff} />
      <directionalLight position={[10, 20, 10]} intensity={0.8} castShadow />

      {/* ground */}
      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color={"#0b1220"} roughness={1} />
      </mesh>

      {/* Electric Pole */}
      <ElectricPole position={[0, 0, -8]} />

      {/* UPS */}
      <UPS position={[-5, 0, 0]} active={upsOn} />

      {/* Original Houses */}
      <House
        position={[5, 0, 0]}
        powered={gridOn || upsOn}
        withGarden
        name={"Home A"}
      />
      <House
        position={[12, 0, 0]}
        powered={gridOn}
        withGarden
        name={"Home B"}
      />

      {/* New Houses at the back - no UPS connection */}
      <House
        position={[5, 0, -8]}
        powered={gridOn}
        withGarden={false} // No garden lamps for back houses
        name={"Home C"}
      />
      <House
        position={[12, 0, -8]}
        powered={gridOn}
        withGarden={false} // No garden lamps for back houses
        name={"Home D"}
      />

      {/* flows from grid to houses */}
      <FlowLine
        start={gridSource}
        end={endA}
        color={0x00ff88}
        active={gridFlowActiveA}
        count={20}
        speed={0.7}
      />
      <FlowLine
        start={gridSource}
        end={endB}
        color={0x00aaff}
        active={gridFlowActiveB}
        count={18}
        speed={0.6}
      />
      <FlowLine
        start={gridSource}
        end={endC}
        color={0x00ff88}
        active={gridFlowActiveC}
        count={20}
        speed={0.7}
      />
      <FlowLine
        start={gridSource}
        end={endD}
        color={0x00aaff}
        active={gridFlowActiveD}
        count={18}
        speed={0.6}
      />

      {/* flow from UPS to Home A */}
      <FlowLine
        start={upsSource}
        end={endA}
        color={0xffff66}
        active={upsFlowActiveA}
        count={20}
        speed={1.0}
      />
    </>
  );
});

/* ----------------------
   Controls UI (overlay)
   ---------------------- */
function ControlsUI({ gridOn, setGridOn, upsOn, setUpsOn, resetCamera }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 12,
        top: 12,
        color: "white",
        background: "rgba(0,0,0,0.6)",
        padding: 12,
        borderRadius: 8,
        width: 300,
        fontFamily: "sans-serif",
        zIndex: 10,
      }}
    >
      {" "}
      <h3 style={{ margin: "0 0 8px 0" }}>Microgrid Simulation</h3>{" "}
      <p style={{ margin: 0, fontSize: 13 }}>
        {" "}
        Grid:{" "}
        <strong style={{ color: gridOn ? "#4CAF50" : "#f44336" }}>
          {" "}
          {gridOn ? "ON" : "OFF"}{" "}
        </strong>{" "}
      </p>{" "}
      <p style={{ margin: "6px 0 12px 0", fontSize: 13 }}>
        {" "}
        UPS/Inverter:{" "}
        <strong style={{ color: upsOn ? "#ffee88" : "#999" }}>
          {" "}
          {upsOn ? "ACTIVE" : "IDLE"}{" "}
        </strong>{" "}
      </p>{" "}
      <div style={{ display: "flex", gap: 8 }}>
        {" "}
        <button
          onClick={() => setGridOn((g) => !g)}
          style={{
            flex: 1,
            padding: "8px 10px",
            background: gridOn ? "#f44336" : "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: 6,
          }}
        >
          {" "}
          {gridOn ? "Simulate Powercut" : "Restore Grid"}{" "}
        </button>{" "}
        <button
          onClick={() => setUpsOn((u) => !u)}
          style={{
            padding: "8px 10px",
            background: "#ffbb33",
            color: "black",
            border: "none",
            borderRadius: 6,
          }}
        >
          {" "}
          {upsOn ? "Stop UPS" : "Start UPS"}{" "}
        </button>{" "}
      </div>{" "}
      <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
        {" "}
        <button
          onClick={resetCamera}
          style={{
            flex: 1,
            padding: "8px 10px",
            background: "#60a5fa",
            border: "none",
            borderRadius: 6,
            color: "white",
          }}
        >
          {" "}
          Reset View{" "}
        </button>{" "}
      </div>{" "}
      <div style={{ marginTop: 10, fontSize: 12, color: "#ddd" }}>
        {" "}
        <p style={{ margin: "6px 0 0 0" }}>Behavior:</p>{" "}
        <ul style={{ margin: "6px 0 0 12px 18px", padding: 0 }}>
          {" "}
          <li>Grid ON → all houses powered.</li>{" "}
          <li>
            {" "}
            Grid OFF → neighbors lose power; UPS auto-starts and powers Home A.{" "}
          </li>{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}

/* ----------------------
   App (root)
   ---------------------- */
export default function App() {
  const [gridOn, setGridOn] = useState(true);
  const [upsOn, setUpsOn] = useState(false);
  const controlsRef = useRef();

  // Auto UPS logic: start UPS when grid goes down, stop shortly after grid returns
  useEffect(() => {
    let t;
    if (!gridOn) {
      t = setTimeout(() => setUpsOn(true), 700); // UPS auto-start
    } else {
      t = setTimeout(() => setUpsOn(false), 900); // UPS stop when grid restored
    }
    return () => clearTimeout(t);
  }, [gridOn]);

  const resetCamera = useCallback(() => {
    const ctrl = controlsRef.current;
    if (!ctrl) return;
    // OrbitControls instance as forwarded by drei contains .object (camera) and .target
    const cam = ctrl.object;
    cam.position.set(15, 15, 20); // Adjusted camera position to see all houses
    ctrl.target.set(0, 0, -4); // Adjusted target to center the scene
    ctrl.update();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        // background: "#071021",
        background: "#2b364cff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas shadows camera={{ position: [15, 15, 20], fov: 60 }}>
        <Suspense fallback={null}>
          <SceneContent gridOn={gridOn} upsOn={upsOn} />
        </Suspense>

        <OrbitControls ref={controlsRef} makeDefault />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3} // Increased threshold for better performance
            luminanceSmoothing={0.9}
            intensity={1.2} // Reduced intensity for better performance
          />
        </EffectComposer>
      </Canvas>

      <ControlsUI
        gridOn={gridOn}
        setGridOn={setGridOn}
        upsOn={upsOn}
        setUpsOn={setUpsOn}
        resetCamera={resetCamera}
      />
    </div>
  );
}
