"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { FloatingAnimation } from "./FloatingAnimation";

interface Bubble {
  width: number;
  height: number;
  left: number;
  top: number;
  color: string;
}

const HeroSection = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 8 }).map((_, i) => ({
      width: Math.random() * 200 + 50,
      height: Math.random() * 200 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: i % 2 === 0 ? "#ff8c00" : "#ff4d00",
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7ed] via-[#ffedd5] to-white py-28 sm:py-36">
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="absolute top-0 left-0 right-0 z-20 flex justify-center w-full"
        >
          <img
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/d3c7e004-c129-4f58-a53a-5762a61a044d/cb89d83ea394b25d9c6c70d8f6c44ee8.png"
            alt="Moreito Logo"
            className="w-72 h-auto drop-shadow-lg mx-auto"
            loading="lazy" // Added lazy loading
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 overflow-hidden">
        {bubbles.map((bubble, i) => (
          <FloatingAnimation key={i} delay={i * 0.2}>
            <div
              className="absolute rounded-full opacity-10"
              style={{
                backgroundColor: bubble.color,
                width: `${bubble.width}px`,
                height: `${bubble.height}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                filter: "blur(40px)",
              }}
            />
          </FloatingAnimation>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="container px-4 mx-auto text-center relative z-10 mt-40"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [1, 1.05, 1],
            backgroundColor: ["#ffedd5", "#fed7aa", "#ffedd5"],
          }}
          transition={{
            delay: 1,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="inline-flex items-center px-4 py-2 rounded-full mb-6 shadow-sm"
          style={{
            background: "linear-gradient(45deg, #ffedd5, #fed7aa, #ffedd5)",
            backgroundSize: "200% 200%",
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Star className="w-4 h-4 mr-2 text-orange-600 fill-current" />
          </motion.div>
          <motion.span
            animate={{
              color: ["#9a3412", "#ea580c", "#9a3412"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="text-sm font-medium"
          >
            Nyhet: 1-minuts reklamvideos
          </motion.span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Reklamvideos
          </span>{" "}
          <br />
          Som Får Folk Att Stanna Upp
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Professionella mobilfilmade videos som ökar din försäljning - snabbt,
          enkelt och prisvärt för småföretag
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="text-white bg-orange-600 hover:bg-orange-700 px-8 py-2 rounded-lg text-lg font-medium shadow-lg shadow-orange-200 flex items-center"
          >
            Boka Gratis Idémöte <ChevronRight className="ml-2" />
          </a>
          <button className="text-gray-900 border border-gray-300 px-8 py-2 rounded-lg text-lg font-medium bg-white hover:bg-gray-50">
            Se Portfolio
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
