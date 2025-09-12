import { motion } from "framer-motion";
import { SunIcon } from "@heroicons/react/24/solid";

export default function SolarLoader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-sky-900 via-gray-900 to-black text-white z-50">
      {/* Solar Scene */}
      <div className="relative flex flex-col items-center">
        {/* Sun */}
        <motion.div
          className="relative flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <motion.div
            className="absolute w-28 h-28 rounded-full bg-yellow-400/30 blur-xl"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <SunIcon className="w-20 h-20 text-yellow-400 drop-shadow-xl" />
        </motion.div>

        {/* Solar Panel */}
        <motion.div
          className="mt-10 w-32 h-20 bg-gradient-to-b from-blue-500 to-blue-800 rounded-md shadow-lg border-2 border-blue-300"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />

        {/* Electric Rays */}
        <motion.div
          className="absolute top-16 mt-6 w-1 h-16 bg-yellow-300"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        className="mt-8 text-lg font-medium text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        Harnessing the power of the sun…
      </motion.p>
    </div>
  );
}
