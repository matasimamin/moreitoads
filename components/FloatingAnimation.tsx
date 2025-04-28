// components/FloatingAnimation.tsx
"use client"

import { motion } from "framer-motion"

export const FloatingAnimation = ({ 
  children, 
  delay = 0 
}: {
  children: React.ReactNode
  delay?: number
}) => (
  <motion.div
    initial={{ y: 20 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay
    }}
  >
    {children}
  </motion.div>
)