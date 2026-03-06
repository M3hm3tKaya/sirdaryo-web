# System Patterns

## Architecture
- Next.js 16 App Router with src/ directory
- Components organized: layout/, ui/, animations/, sections/
- Service data driven from lib/services.ts (iconName strings, not components)
- All service detail pages share ServiceDetailTemplate component
- Icon resolution: lib/icons.ts getIcon() maps string names to Lucide components (avoids server/client boundary issue)

## Conventions
- "use client" only where needed (animations, interactivity)
- GSAP for scroll-triggered animations, Framer Motion for UI transitions (header dropdown)
- Container component for consistent max-width and padding
- ScrollReveal wrapper for scroll-triggered entrance animations
- TextReveal for word-by-word stagger text animations

## v1.1 Cursor System
- CursorContext (lib/CursorContext.tsx) — React Context for color/size
- CursorProvider wraps entire app in root layout
- CustomCursor reads color from context, applies via CSS transition (0.4s)
- Sections set cursor color via useCursor() hook in useEffect
- PageCursorColor wrapper — allows server component pages to set cursor color
- Service cards individually override cursor on hover

## v1.1 Design Patterns
- White-dominant homepage (ServiceGrid, ProcessTimeline on white bg)
- Service cards: white bg, 3px colored left border, mouse-tracking radial gradient glow, hover translateY
- ServiceDetailTemplate: heavy accent color usage (gradient hero bg, colored borders, tint sections)
- Footer: client component for cursor support
