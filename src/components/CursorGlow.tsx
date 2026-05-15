import { useEffect, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = 0, ty = 0, cx = 0, cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const loop = () => {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      el.style.transform = `translate3d(${cx - 200}px, ${cy - 200}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  const glowStyle = theme === "light"
    ? "radial-gradient(circle, oklch(0.55 0.26 25 / 0.18) 0%, transparent 60%)"
    : "radial-gradient(circle, oklch(0.68 0.27 25 / 0.22) 0%, transparent 60%)";

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-60 mix-blend-screen hidden md:block"
      style={{
        background: glowStyle,
      }}
    />
  );
}
