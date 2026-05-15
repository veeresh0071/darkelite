import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Text3DProps {
  children: ReactNode;
  className?: string;
  depth?: number;
}

export function Text3D({ children, className = "", depth = 8 }: Text3DProps) {
  const layers = Array.from({ length: depth }, (_, i) => i);

  return (
    <div className={`relative inline-block ${className}`} style={{ perspective: "1000px" }}>
      {/* Shadow layers for 3D depth */}
      {layers.map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0 select-none pointer-events-none"
          style={{
            transform: `translateZ(-${i * 2}px)`,
            opacity: 0.15 - i * 0.015,
            color: "var(--primary)",
            filter: `blur(${i * 0.3}px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 - i * 0.015 }}
          transition={{ duration: 0.5, delay: i * 0.02 }}
        >
          {children}
        </motion.div>
      ))}
      
      {/* Main text */}
      <motion.div
        className="relative z-10"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
