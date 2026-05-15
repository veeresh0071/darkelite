import { motion } from "framer-motion";

export function FloatingOrbs() {
  const orbs = [
    { size: 400, x: "10%", y: "20%", delay: 0, duration: 20 },
    { size: 300, x: "80%", y: "60%", delay: 2, duration: 25 },
    { size: 350, x: "60%", y: "10%", delay: 4, duration: 22 },
    { size: 250, x: "20%", y: "70%", delay: 1, duration: 18 },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: "radial-gradient(circle, var(--glow-red) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.9, 1],
            opacity: [0.3, 0.5, 0.3, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
