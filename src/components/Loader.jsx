import { motion, AnimatePresence } from "framer-motion";
import { BoltIcon, Battery100Icon, SignalIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

export default function PowerLoader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Generate nodes for the power grid
  const generateNodes = () => {
    const nodes = [];
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 100;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      nodes.push({ id: i, x, y });
    }
    return nodes;
  };

  const nodes = generateNodes();

  // Calculate position for the moving point
  const calculatePointPosition = (progress) => {
    // Start at the top (12 o'clock position) and move clockwise
    const angle = (progress / 100) * Math.PI * 2 - Math.PI / 2;
    const radius = 100;
    const x = 100 + Math.cos(angle) * radius;
    const y = 100 + Math.sin(angle) * radius;
    return { x, y };
  };

  const pointPosition = calculatePointPosition(loadingProgress);

  // Animation variants
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const nodeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 10 
      }
    }
  };

  const pulseVariants = {
    initial: { scale: 0.8, opacity: 0.7 },
    animate: { 
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: { 
        repeat: Infinity, 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const energyFlowVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white z-50 overflow-hidden"
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10" />
          
          {/* Animated particles */}
          <div className="absolute inset-0">
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Central Power Core */}
          <motion.div 
            className="relative flex items-center justify-center mb-8"
            variants={pulseVariants}
            initial="initial"
            animate="animate"
          >
            {/* Outer glow ring */}
            <motion.div 
              className="absolute w-48 h-48 rounded-full bg-green-500/10 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
            />
            
            {/* Core container */}
            <div className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-green-500/30 flex items-center justify-center shadow-2xl shadow-green-500/20">
              {/* Battery icon */}
              <Battery100Icon className="w-16 h-16 text-green-400 z-20" />
              
              {/* Energy waves */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-green-400/30"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              />
              
              {/* Pulsing core */}
              <motion.div 
                className="absolute w-8 h-8 rounded-full bg-green-400"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0.3, 0.8]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>

          {/* Power Grid Visualization */}
          <div className="relative w-64 h-64 mb-8">
            <svg className="w-full h-full" viewBox="0 0 200 200">
              {/* Grid connections */}
              {nodes.map((node, i) => {
                const nextNode = nodes[(i + 1) % nodes.length];
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={100}
                    y1={100}
                    x2={100 + node.x}
                    y2={100 + node.y}
                    stroke="rgba(72, 187, 120, 0.3)"
                    strokeWidth="1"
                    variants={energyFlowVariants}
                    initial="initial"
                    animate="animate"
                  />
                );
              })}
              
              {/* Outer ring connection */}
              <motion.circle
                cx="100"
                cy="100"
                r="100"
                fill="none"
                stroke="rgba(72, 187, 120, 0.2)"
                strokeWidth="1"
                variants={energyFlowVariants}
                initial="initial"
                animate="animate"
              />
              
              {/* Progress path - will be filled as loading progresses */}
              <motion.circle
                cx="100"
                cy="100"
                r="100"
                fill="none"
                stroke="rgba(72, 187, 120, 0.6)"
                strokeWidth="2"
                strokeDasharray="628.32" // 2 * π * 100
                strokeDashoffset={628.32 - (628.32 * loadingProgress) / 100}
                transform="rotate(-90 100 100)" // Start from top
                initial={{ strokeDashoffset: 628.32 }}
                animate={{ strokeDashoffset: 628.32 - (628.32 * loadingProgress) / 100 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Grid nodes */}
              {nodes.map((node) => (
                <motion.circle
                  key={`node-${node.id}`}
                  cx={100 + node.x}
                  cy={100 + node.y}
                  r="4"
                  fill="rgba(72, 187, 120, 0.8)"
                  variants={nodeVariants}
                  initial="initial"
                  animate="animate"
                />
              ))}
              
              {/* Central node */}
              <motion.circle
                cx="100"
                cy="100"
                r="6"
                fill="rgba(72, 187, 120, 1)"
                variants={nodeVariants}
                initial="initial"
                animate="animate"
              />
              
              {/* Moving point that completes the circle */}
              <motion.circle
                cx={pointPosition.x}
                cy={pointPosition.y}
                r="8"
                fill="rgba(72, 187, 120, 1)"
                className="shadow-lg shadow-green-500/50"
                initial={{ scale: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  cx: pointPosition.x,
                  cy: pointPosition.y
                }}
                transition={{ 
                  scale: { duration: 0.5 },
                  cx: { type: "spring", stiffness: 300, damping: 20 },
                  cy: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
              
              {/* Glow effect for the moving point */}
              <motion.circle
                cx={pointPosition.x}
                cy={pointPosition.y}
                r="12"
                fill="rgba(72, 187, 120, 0.3)"
                animate={{ 
                  cx: pointPosition.x,
                  cy: pointPosition.y,
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  scale: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  },
                  opacity: { 
                    repeat: Infinity, 
                    duration: 1.5,
                    ease: "easeInOut"
                  },
                  cx: { type: "spring", stiffness: 300, damping: 20 },
                  cy: { type: "spring", stiffness: 300, damping: 20 }
                }}
              />
            </svg>
          </div>

          {/* Loading Progress */}
          <div className="w-64 mb-6">
            <div className="flex justify-between text-sm text-gray-400 mb-1">
              <span>INITIALIZING</span>
              <span>{loadingProgress}%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Status Text */}
          <motion.div 
            className="flex items-center space-x-2 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <SignalIcon className="w-5 h-5 animate-pulse" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut"
              }}
            >
              Powering up your experience…
            </motion.span>
          </motion.div>

          {/* Tech details */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <div className="text-xs text-gray-500 font-mono">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {loadingProgress < 30 ? "Connecting to power grid..." : 
                 loadingProgress < 60 ? "Establishing energy flow..." : 
                 loadingProgress < 90 ? "Optimizing power distribution..." : 
                 "Finalizing startup sequence..."}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}