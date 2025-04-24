 import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
 
const App = () => {
  const navigate = useNavigate();


  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-green-900 to-green-600 text-white flex flex-col items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-2xl sm:text-5xl font-bold mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        🏏 Cricket Manager
      </motion.h1>

      <motion.p
        className="text-sm sm:text-lg mb-8 text-center max-w-4xl"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Welcome to the ultimate cricket strategy experience. Choose your country, sign your contracts, build your dream team, and take on the world.
      </motion.p>

      <motion.button
        onClick={() => navigate("/select-country")}
        className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded hover:bg-yellow-300 transition shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
      >
        Start Game
      </motion.button>
    </motion.div>
  );
};

export default App;
