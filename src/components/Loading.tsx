 import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-950 text-white">
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.5,
        }}
      >
        {/* Cricket Ball */}
        <div className="w-24 h-24 bg-red-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
          <div className="w-1 h-16 bg-white rotate-45"></div>
        </div>
      </motion.div>

      <motion.p
        className="mt-6 text-lg tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        Setting the field... ⚾
      </motion.p>
    </div>
  );
};

export default Loading;
