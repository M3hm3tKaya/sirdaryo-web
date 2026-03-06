# System Patterns

## Architecture
- Next.js App Router with src/ directory
- Components organized: layout/, ui/, animations/, sections/, three/
- Service data driven from lib/services.ts
- All service detail pages share ServiceDetailTemplate component

## Conventions
- "use client" only where needed (animations, interactivity)
- GSAP for scroll-triggered animations, Framer Motion for UI transitions
- Container component for consistent max-width and padding
- GlowCard for mouse-tracking glow effect cards
- ScrollReveal wrapper for scroll-triggered entrance animations
- TextReveal for word-by-word stagger text animations
