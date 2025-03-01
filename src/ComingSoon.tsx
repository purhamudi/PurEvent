import logo from "./assets/logos/logo.png";
// import Text from './components/Library/Text/Text.component';

import { motion } from "framer-motion"; // Import Framer Motion

function ComingSoon() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-brand-50 text-center px-6">
      {/* Logo with Animation */}
      <motion.div
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full flex justify-center my-3"
      >
        <img src={logo} alt="Logo" className="w-56 md:w-96" />
      </motion.div>

      {/* Animated Text */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="text-2xl md:text-3xl font-semibold text-gray-700 my-4"
      ></motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 1.2 }}
        className="text-3xl md:text-4xl font-bold text-gray-800 my-2"
      >
        Coming soon!
      </motion.h1>
    </div>
  );
}

export default ComingSoon;
