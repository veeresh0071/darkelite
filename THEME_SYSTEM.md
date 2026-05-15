# Theme System Documentation

## Overview
A complete dark/light theme toggle system has been implemented across all pages of the application.

## Features
- ✅ Persistent theme preference (stored in localStorage)
- ✅ Smooth theme transitions with animations
- ✅ Theme toggle button in navbar (desktop & mobile)
- ✅ Automatic theme application on page load
- ✅ Optimized color palettes for both themes
- ✅ All pages automatically inherit theme

## Implementation Details

### Files Created
1. **`src/contexts/ThemeContext.tsx`** - Theme provider and context
2. **`src/components/ThemeToggle.tsx`** - Toggle button component

### Files Modified
1. **`src/routes/__root.tsx`** - Added ThemeProvider wrapper
2. **`src/components/Navbar.tsx`** - Added ThemeToggle button
3. **`src/styles.css`** - Added light theme color variables

## How It Works

### Theme Provider
The `ThemeProvider` wraps the entire application and:
- Manages theme state (dark/light)
- Persists theme preference to localStorage
- Applies theme class to document root
- Provides `useTheme()` hook for components

### Theme Toggle
The toggle button:
- Shows Sun icon in dark mode, Moon icon in light mode
- Animated rotation on theme change
- Available in both desktop and mobile navbar
- Uses framer-motion for smooth animations

### Color System
Both themes use CSS custom properties (CSS variables) that automatically update:
- Background colors
- Foreground/text colors
- Surface colors
- Border colors
- Shadow effects
- Glow effects
- Glass morphism effects

## Usage

### Using the Theme in Components
```tsx
import { useTheme } from "@/contexts/ThemeContext";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      Current theme: {theme}
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
```

### Styling with Theme
All Tailwind classes automatically respect the theme:
```tsx
<div className="bg-background text-foreground">
  This adapts to the current theme
</div>
```

## Theme Colors

### Dark Theme (Default)
- Background: Deep black with subtle warmth
- Foreground: Bright white
- Accent: Red/orange gradient
- Glass effects: Dark with blur

### Light Theme
- Background: Off-white
- Foreground: Dark gray
- Accent: Same red/orange (maintains brand)
- Glass effects: Light with blur

## Browser Support
- Modern browsers with CSS custom properties support
- localStorage for persistence
- Graceful fallback to dark theme

## Performance
- Theme preference loaded before render (no flash)
- CSS variables for instant theme switching
- Minimal re-renders with context optimization
