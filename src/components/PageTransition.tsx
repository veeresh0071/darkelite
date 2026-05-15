import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import type { ReactNode } from "react";
import { FloatingElements } from "./FloatingElements";

export function PageTransition({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <FloatingElements />
      {children}
      {/* Theme-based animated background elements */}
      <AnimatedBackground theme={theme} />
    </motion.div>
  );
}

function AnimatedBackground({ theme }: { theme: string }) {
  return (
    <>
      {/* Floating orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          className={`absolute w-96 h-96 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-primary/10"
              : "bg-primary/15"
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className={`absolute w-80 h-80 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-primary/8"
              : "bg-primary/12"
          }`}
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ bottom: "15%", right: "15%" }}
        />
        <motion.div
          className={`absolute w-72 h-72 rounded-full blur-3xl ${
            theme === "dark"
              ? "bg-accent/6"
              : "bg-accent/10"
          }`}
          animate={{
            x: [0, 60, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "50%", right: "20%" }}
        />
      </div>

      {/* Animated grid lines */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <motion.path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke={theme === "dark" ? "rgba(239, 68, 68, 0.3)" : "rgba(239, 68, 68, 0.4)"}
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </>
  );
}

// Stagger animation for lists
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Slide in from side
export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Scale and fade
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Rotate and fade
export const rotateIn = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  show: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
