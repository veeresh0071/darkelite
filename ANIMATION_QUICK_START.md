# Animation Quick Start Guide

## 🎨 Theme-Aware Animations

All animations automatically adapt to dark/light themes!

## 🚀 Quick Usage Examples

### 1. Animated Cards (3D Hover Effect)

```tsx
import { AnimatedCard } from "@/components/AnimatedCard";

<AnimatedCard delay={0.2}>
  <div className="glass rounded-2xl p-8">
    Your content with 3D tilt and glow on hover
  </div>
</AnimatedCard>
```

### 2. Magnetic Button (Follows Cursor)

```tsx
import { MagneticButton } from "@/components/AnimatedCard";

<MagneticButton className="btn-primary">
  Hover me!
</MagneticButton>
```

### 3. CSS Animation Classes

```tsx
// Fade up entrance
<div className="animate-fade-up animation-delay-200">
  Content fades up with delay
</div>

// Slide from left
<div className="animate-slide-in-left">
  Content slides in
</div>

// Floating effect
<div className="animate-float">
  Gentle floating motion
</div>

// Glow pulse
<div className="animate-glow-pulse">
  Pulsing glow effect
</div>
```

### 4. Stagger Animation (List Items)

```tsx
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/PageTransition";

<motion.div 
  variants={staggerContainer} 
  initial="hidden" 
  whileInView="show"
  viewport={{ once: true }}
>
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
  <motion.div variants={staggerItem}>Item 3</motion.div>
</motion.div>
```

### 5. Parallax Scroll

```tsx
import { ParallaxSection } from "@/components/AnimatedCard";

<ParallaxSection speed={0.5}>
  <img src="..." alt="Moves on scroll" />
</ParallaxSection>
```

## 🎯 Common Patterns

### Hero Section
```tsx
<div className="animate-fade-in">
  <h1 className="animate-scale-in animation-delay-200">Title</h1>
  <p className="animate-fade-up animation-delay-300">Subtitle</p>
  <button className="animate-bounce-in animation-delay-500">CTA</button>
</div>
```

### Feature Grid
```tsx
<div className="grid grid-cols-3 gap-6">
  <AnimatedCard delay={0}>Feature 1</AnimatedCard>
  <AnimatedCard delay={0.1}>Feature 2</AnimatedCard>
  <AnimatedCard delay={0.2}>Feature 3</AnimatedCard>
</div>
```

### Image Gallery
```tsx
<div className="grid grid-cols-2 gap-4">
  {images.map((img, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ delay: i * 0.1 }}
    >
      <img src={img} alt="" />
    </motion.div>
  ))}
</div>
```

## 🎬 Available Animations

### Entrance
- `animate-fade-in` - Simple fade
- `animate-fade-up` - Fade + move up
- `animate-slide-in-left` - Slide from left
- `animate-slide-in-right` - Slide from right
- `animate-scale-in` - Scale up
- `animate-rotate-in` - Rotate + scale
- `animate-bounce-in` - Bouncy entrance
- `animate-blur-in` - Blur to clear

### Continuous
- `animate-float` - Gentle float
- `animate-glow-pulse` - Pulsing glow
- `animate-glow-expand` - Expanding glow
- `animate-wave` - Wave motion

### Delays
- `animation-delay-100` - 0.1s
- `animation-delay-200` - 0.2s
- `animation-delay-300` - 0.3s
- `animation-delay-500` - 0.5s
- `animation-delay-700` - 0.7s

## 💡 Pro Tips

1. **Stagger delays** for related elements (0.1s increments)
2. **Combine animations** for rich effects
3. **Use viewport detection** to trigger on scroll
4. **Keep it subtle** - less is more
5. **Test both themes** - dark and light

## 🎨 Theme Colors

Animations automatically use theme colors:
- **Dark**: Subtle, elegant, cooler tones
- **Light**: Vibrant, visible, warmer tones

## 📱 Responsive

All animations work on mobile and respect `prefers-reduced-motion`.

## 🔧 Need More?

See `ANIMATION_SYSTEM.md` for complete documentation.
