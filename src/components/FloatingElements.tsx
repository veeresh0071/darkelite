import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

export function FloatingElements() {
  const { theme } = useTheme();

  const shapes = [
    { size: 60, delay: 0, duration: 20, x: "10%", y: "20%" },
    { size: 40, delay: 2, duration: 25, x: "80%", y: "30%" },
    { size: 50, delay: 4, duration: 22, x: "15%", y: "70%" },
    { size: 35, delay: 1, duration: 28, x: "85%", y: "60%" },
    { size: 45, delay: 3, duration: 24, x: "50%", y: "15%" },
    { size: 55, delay: 5, duration: 26, x: "70%", y: "80%" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full ${
            theme === "dark"
              ? "bg-gradient-to-br from-primary/10 to-accent/5"
              : "bg-gradient-to-br from-primary/15 to-accent/8"
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            filter: "blur(40px)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className={`absolute h-px ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-primary/20 to-transparent"
              : "bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          }`}
          style={{
            width: "100%",
            top: `${20 + i * 30}%`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
}
