import { useScrollFadeIn } from "../../../hooks/useScrollFadeIn";


import { motion } from "framer-motion"; // Import Framer Motion
import { Facebook, Instagram, Twitter } from "lucide-react";
import ChefImg from "../../../assets/images/background/dump/chef-professional.png";
import FoodPlates from "../../../assets/images/background/dump/food-plates.png";


export default function Section1() {
    const { ref, isVisible } = useScrollFadeIn();
  
    return (
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 40 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="bg-brand-50 relative flex gap-x-3 flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16"
      >
        {/* Left Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 130 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
          transition={{ duration: 1.32, delay: 0.2 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <p className="text-gray-600 text-lg">
            At Catering 128, we bring passion and innovation to the art of
            catering. Our wonderful team of culinary experts is dedicated to
            curating unforgettable dining experiences tailored to your unique
            preferences.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              OUR MENU
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-400 text-white px-6 py-3 rounded-lg transition-all duration-300"
            >
              BOOK CATERING
            </motion.button>
          </div>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 pt-6">
            {["Facebook", "Instagram", "Twitter"].map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                {icon === "Facebook" && <Facebook size={20} />}
                {icon === "Instagram" && <Instagram size={20} />}
                {icon === "Twitter" && <Twitter size={20} />}
              </motion.div>
            ))}
          </div>
        </motion.div>
  
        {/* Right Side - Image Container */}
        <div className="md:w-1/2 relative flex justify-center md:justify-end items-center">
          <div className="relative w-full max-w-md md:max-w-lg">
            {/* Background Food Image */}
            <motion.img
              src={FoodPlates}
              alt="Food Plate"
              className="w-full rounded-lg shadow-lg"
            />
  
            {/* Overlapping Chef Image */}
            <motion.div
              className="absolute bottom-[-40px] left-[10%] md:left-[-30px] w-48 md:w-56 lg:w-64 shadow-lg rounded-lg overflow-hidden border-4 border-white"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -50 }}
              transition={{ duration: 0.6, delay: 0.32 }}
            >
              <img src={ChefImg} alt="Chef" className="w-full rounded-lg" />
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }