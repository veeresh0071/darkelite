# 3D Effects Guide

This guide explains the 3D effects added to the website that work seamlessly in both dark and light themes.

## Components

### 1. Card3D
A card component with mouse-tracking 3D tilt effect.

**Usage:**
```tsx
import { Card3D } from "@/components/Card3D";

<Card3D intensity={10}>
  <div className="glass rounded-2xl p-6">
    Your content here
  </div>
</Card3D>
```

**Props:**
- `intensity` (optional): Controls the tilt angle (default: 15)
- `className` (optional): Additional CSS classes

**Features:**
- Mouse-tracking 3D tilt
- Smooth spring animations
- Glow effect on hover
- Works in both themes

### 2. FloatingOrbs
Animated background orbs that create depth and atmosphere.

**Usage:**
```tsx
import { FloatingOrbs } from "@/components/FloatingOrbs";

<section className="relative">
  <FloatingOrbs />
  <div className="relative z-10">
    Your content here
  </div>
</section>
```

**Features:**
- 4 animated orbs with different sizes and speeds
- Smooth floating motion
- Adapts to theme colors automatically
- Non-interactive (pointer-events-none)

### 3. Parallax3D
Scroll-based parallax effect with depth.

**Usage:**
```tsx
import { Parallax3D } from "@/components/Parallax3D";

<Parallax3D speed={0.5}>
  <div>Content that moves with scroll</div>
</Parallax3D>
```

**Props:**
- `speed` (optional): Parallax speed multiplier (default: 0.5)
- `className` (optional): Additional CSS classes

**Features:**
- Scroll-triggered animations
- Fade in/out based on viewport
- Scale transformation
- Smooth transitions

### 4. Text3D
Text with layered depth effect.

**Usage:**
```tsx
import { Text3D } from "@/components/Text3D";

<Text3D depth={8}>
  <h1 className="text-6xl font-bold">
    Your Title
  </h1>
</Text3D>
```

**Props:**
- `depth` (optional): Number of shadow layers (default: 8)
- `className` (optional): Additional CSS classes

**Features:**
- Multiple shadow layers for depth
- Staggered animation
- Theme-aware colors
- Perspective transform

## CSS Utilities

### Perspective Classes
```css
.perspective-1000  /* perspective: 1000px */
.perspective-2000  /* perspective: 2000px */
.preserve-3d       /* transform-style: preserve-3d */
.backface-hidden   /* backface-visibility: hidden */
```

### 3D Animations
```css
.animate-tilt-3d    /* Gentle 3D tilting motion */
.animate-float-3d   /* 3D floating with depth */
.animate-rotate-3d  /* Full 3D rotation */
```

## Implementation Examples

### Service Cards with 3D Tilt
```tsx
<div className="grid grid-cols-4 gap-5 perspective-1000">
  {services.map((service) => (
    <Card3D intensity={10} key={service.id}>
      <div className="glass rounded-2xl p-6">
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </Card3D>
  ))}
</div>
```

### Hero Section with Floating Orbs
```tsx
<section className="relative min-h-screen">
  <FloatingOrbs />
  <div className="relative z-10">
    <Text3D>
      <h1>Your Hero Title</h1>
    </Text3D>
  </div>
</section>
```

### Parallax Content Sections
```tsx
<Parallax3D speed={0.3}>
  <Card3D intensity={8}>
    <div className="glass rounded-2xl p-8">
      Content with parallax and tilt
    </div>
  </Card3D>
</Parallax3D>
```

## Theme Compatibility

All 3D effects automatically adapt to both dark and light themes:

### Dark Theme
- Glow colors: `oklch(0.58 0.24 25 / 0.35)`
- Shadow depth: More pronounced
- Blur effects: Stronger

### Light Theme
- Glow colors: `oklch(0.55 0.26 25 / 0.35)`
- Shadow depth: Subtle
- Blur effects: Lighter

## Performance Tips

1. **Limit Card3D instances**: Use on featured content, not every element
2. **Reduce FloatingOrbs count**: Default is 4, which is optimal
3. **Adjust Parallax3D speed**: Lower values (0.2-0.5) perform better
4. **Use perspective classes**: Apply to parent containers, not individual items

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (with -webkit- prefixes)
- Mobile: Optimized for touch (no hover effects)

## Accessibility

- All 3D effects are decorative
- Content remains readable without effects
- No motion for users with `prefers-reduced-motion`
- Keyboard navigation unaffected
