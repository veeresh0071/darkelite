# Animation System Documentation

## Overview
This project features a comprehensive, theme-aware animation system that creates unique and attractive visual experiences across all pages.

## Components

### 1. PageTransition (`src/components/PageTransition.tsx`)
Wraps all pages with smooth fade transitions and animated background elements.

**Features:**
- Smooth page fade in/out transitions
- Floating animated orbs that respond to theme
- Animated grid lines
- Theme-aware colors and opacity

**Usage:**
Already integrated in `__root.tsx` - wraps all pages automatically.

### 2. AnimatedCard (`src/components/AnimatedCard.tsx`)
3D card component with hover effects and parallax motion.

**Features:**
- 3D tilt effect on mouse move
- Glow effect on hover (theme-aware)
- Smooth entrance animation
- Configurable delay for stagger effects

**Usage:**
```tsx
import { AnimatedCard } from "@/components/AnimatedCard";

<AnimatedCard delay={0.2} className="your-classes">
  <div>Your content</div>
</AnimatedCard>
```

**Props:**
- `children`: ReactNode - Content to display
- `className`: string (optional) - Additional CSS classes
- `delay`: number (optional) - Animation delay in seconds

### 3. MagneticButton (`src/components/AnimatedCard.tsx`)
Button with magnetic hover effect that follows cursor.

**Usage:**
```tsx
import { MagneticButton } from "@/components/AnimatedCard";

<MagneticButton className="btn-primary">
  Click Me
</MagneticButton>
```

### 4. ParallaxSection (`src/components/AnimatedCard.tsx`)
Section with parallax scroll effect.

**Usage:**
```tsx
import { ParallaxSection } from "@/components/AnimatedCard";

<ParallaxSection speed={0.5}>
  <div>Content moves on scroll</div>
</ParallaxSection>
```

### 5. FloatingElements (`src/components/FloatingElements.tsx`)
Background floating shapes and animated lines.

**Features:**
- 6 floating orbs with different sizes and speeds
- 3 animated horizontal lines
- Theme-aware colors and opacity
- Automatic infinite animation

**Usage:**
Already integrated in `PageTransition` - active on all pages.

## CSS Animations

### Available Animation Classes

#### Entrance Animations
- `.animate-fade-in` - Simple fade in
- `.animate-fade-up` - Fade in with upward motion
- `.animate-slide-in-left` - Slide from left
- `.animate-slide-in-right` - Slide from right
- `.animate-scale-in` - Scale up from small
- `.animate-rotate-in` - Rotate and scale in
- `.animate-bounce-in` - Bounce entrance
- `.animate-blur-in` - Fade in with blur effect

#### Continuous Animations
- `.animate-float` - Gentle floating motion
- `.animate-glow-pulse` - Pulsing glow effect
- `.animate-glow-expand` - Expanding glow
- `.animate-wave` - Wave motion

#### Delay Utilities
- `.animation-delay-100` - 100ms delay
- `.animation-delay-200` - 200ms delay
- `.animation-delay-300` - 300ms delay
- `.animation-delay-500` - 500ms delay
- `.animation-delay-700` - 700ms delay

### Usage Example
```tsx
<div className="animate-fade-up animation-delay-200">
  Content appears with delay
</div>
```

## Animation Variants (Framer Motion)

### Exported from PageTransition.tsx

```tsx
import { 
  staggerContainer, 
  staggerItem, 
  slideInLeft, 
  slideInRight,
  scaleIn,
  rotateIn 
} from "@/components/PageTransition";

// Stagger children
<motion.div variants={staggerContainer} initial="hidden" animate="show">
  <motion.div variants={staggerItem}>Item 1</motion.div>
  <motion.div variants={staggerItem}>Item 2</motion.div>
</motion.div>

// Slide in
<motion.div variants={slideInLeft} initial="hidden" whileInView="show">
  Content
</motion.div>
```

## Theme Integration

All animations automatically adapt to the current theme (dark/light):

### Dark Theme
- Subtle, elegant animations
- Lower opacity for background elements
- Cooler color tones
- Softer glows

### Light Theme
- More vibrant animations
- Higher opacity for visibility
- Warmer color tones
- Stronger contrast

## Performance Considerations

1. **GPU Acceleration**: All animations use transform and opacity for optimal performance
2. **Reduced Motion**: Respects user's `prefers-reduced-motion` setting
3. **Viewport Detection**: Animations trigger only when elements enter viewport
4. **Once Mode**: Most animations run once to avoid performance issues

## Best Practices

### 1. Stagger Delays
Use incremental delays for related elements:
```tsx
<AnimatedCard delay={0}>First</AnimatedCard>
<AnimatedCard delay={0.1}>Second</AnimatedCard>
<AnimatedCard delay={0.2}>Third</AnimatedCard>
```

### 2. Combine Effects
Layer multiple animation types for rich effects:
```tsx
<AnimatedCard className="animate-glow-pulse">
  <div className="animate-float">
    Content with multiple animations
  </div>
</AnimatedCard>
```

### 3. Theme Awareness
Always consider both themes when adding animations:
```tsx
const { theme } = useTheme();
<div className={theme === "dark" ? "opacity-50" : "opacity-70"}>
  Content
</div>
```

### 4. Performance
- Limit the number of simultaneous animations
- Use `will-change` sparingly
- Prefer CSS animations for simple effects
- Use Framer Motion for complex interactions

## Examples by Page Type

### Landing Pages
- Use `PageTransition` for smooth entry
- Add `FloatingElements` for depth
- Implement `AnimatedCard` for feature sections
- Use stagger animations for lists

### Portfolio Pages
- Use `ParallaxSection` for image galleries
- Implement hover effects with `AnimatedCard`
- Add entrance animations with delays
- Use scale animations for thumbnails

### Form Pages
- Subtle entrance animations
- Focus animations on inputs
- Success/error state animations
- Loading state animations

### Content Pages
- Fade-up animations for text blocks
- Slide-in for images
- Stagger for lists
- Smooth scroll animations

## Customization

### Adding New Animations

1. **CSS Keyframes** (in `src/styles.css`):
```css
@keyframes your-animation {
  from { /* start state */ }
  to { /* end state */ }
}
```

2. **CSS Variable** (in `@theme` block):
```css
--animate-your-animation: your-animation 1s ease-in-out;
```

3. **Utility Class** (in `@layer utilities`):
```css
.animate-your-animation { animation: var(--animate-your-animation); }
```

### Adding Framer Motion Variants

In `PageTransition.tsx`:
```tsx
export const yourVariant = {
  hidden: { /* initial state */ },
  show: { /* animated state */ },
};
```

## Troubleshooting

### Animations Not Playing
1. Check if element is in viewport
2. Verify `initial` and `animate` props are set
3. Check for conflicting CSS
4. Ensure Framer Motion is imported

### Performance Issues
1. Reduce number of animated elements
2. Use `will-change` carefully
3. Simplify animation complexity
4. Check for memory leaks in useEffect

### Theme Issues
1. Verify ThemeContext is accessible
2. Check CSS variable definitions
3. Ensure theme classes are applied
4. Test in both themes

## Future Enhancements

- [ ] Scroll-triggered animations
- [ ] Mouse-follow effects
- [ ] Page transition variants
- [ ] Gesture-based animations
- [ ] Sound effects integration
- [ ] Animation presets library
