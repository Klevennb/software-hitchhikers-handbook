---
name: Cyberspace Engineer
colors:
  surface: '#121318'
  surface-dim: '#121318'
  surface-bright: '#38393f'
  surface-container-lowest: '#0d0e13'
  surface-container-low: '#1a1b21'
  surface-container: '#1e1f25'
  surface-container-high: '#292a2f'
  surface-container-highest: '#34343a'
  on-surface: '#e3e1e9'
  on-surface-variant: '#b9cacb'
  inverse-surface: '#e3e1e9'
  inverse-on-surface: '#2f3036'
  outline: '#849495'
  outline-variant: '#3a494b'
  surface-tint: '#00dbe7'
  primary: '#e1fdff'
  on-primary: '#00363a'
  primary-container: '#00f2ff'
  on-primary-container: '#006a71'
  inverse-primary: '#00696f'
  secondary: '#ddb7ff'
  on-secondary: '#490080'
  secondary-container: '#6f00be'
  on-secondary-container: '#d6a9ff'
  tertiary: '#e1ffec'
  on-tertiary: '#003824'
  tertiary-container: '#67f4b7'
  on-tertiary-container: '#006e4b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#74f5ff'
  primary-fixed-dim: '#00dbe7'
  on-primary-fixed: '#002022'
  on-primary-fixed-variant: '#004f54'
  secondary-fixed: '#f0dbff'
  secondary-fixed-dim: '#ddb7ff'
  on-secondary-fixed: '#2c0051'
  on-secondary-fixed-variant: '#6900b3'
  tertiary-fixed: '#6ffbbe'
  tertiary-fixed-dim: '#4edea3'
  on-tertiary-fixed: '#002113'
  on-tertiary-fixed-variant: '#005236'
  background: '#121318'
  on-background: '#e3e1e9'
  surface-variant: '#34343a'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  code-block:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  nav-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style
The visual identity is rooted in the concept of "Digital Architecture"—a high-fidelity, immersive environment designed for deep technical immersion. It targets software engineers who view code as a physical landscape. 

The design style is a hybrid of **Glassmorphism** and **Technical Minimalist**. It utilizes a "HUD" (Heads-Up Display) philosophy where information is layered over a deep-space void, using light and glow to indicate focus and data flow. The interface should feel like a sophisticated developer tool from the near future: precise, luminous, and structurally sound.

## Colors
The palette is built on a "Void and Neon" contrast. 

- **Primary (Cyan):** Represents active data, connectivity, and primary actions. It should be used for interactive elements and key brand accents.
- **Secondary (Electric Purple):** Represents logic, secondary navigation, and complex transitions. 
- **Tertiary (Matrix Green):** Reserved for system health, success states, and completed progress.
- **Background (Midnight):** A deep `#0a0b10` serves as the canvas, providing maximum contrast for the neon highlights.
- **Surface Tiers:** Use semi-transparent variants of the neutral color to create layered depth, mimicking frosted glass over a grid.

## Typography
The typography strategy balances high-density information with editorial clarity. 

**Inter** is the workhorse for long-form technical content, chosen for its exceptional legibility and modern, neutral tone. **JetBrains Mono** is used for all technical metadata, navigation labels, and code snippets to reinforce the engineering context. Navigation labels should always be set in uppercase with increased letter spacing to evoke a terminal-like aesthetic.

## Layout & Spacing
The layout follows a **Fixed Grid** system inspired by blueprint schematics. 

- **The Grid:** A subtle background grid (8px increments) should be visible or implied, aligning all components to a strict mathematical rhythm.
- **Desktop:** A 12-column system with wide 64px margins to allow the "void" to breathe.
- **Reflow:** On mobile, components stack vertically, and margins reduce to 16px. 
- **Connectivity:** Use thin, 1px lines (20% opacity Cyan) to visually connect related technical cards, simulating a flow-chart or circuit board architecture.

## Elevation & Depth
Depth is created through **Glassmorphism** and **Luminescence** rather than traditional shadows.

- **Planes:** Surfaces use a background-blur (12px to 20px) with a semi-transparent dark fill (60% opacity).
- **Edges:** Instead of shadows, use 1px inner borders (strokes) with a subtle gradient (Cyan to Transparent) to define the top-left edges of components.
- **Glow:** Active elements (like the current step in a progress tracker) emit a soft, diffused outer glow (15px blur, 30% opacity) in their respective functional color.

## Shapes
The shape language is "Softened Technical."

Components use a **0.25rem (4px)** base radius. This creates a precision-engineered look that isn't as aggressive as sharp 90-degree corners, but maintains a more professional and rigid feel than highly rounded consumer apps. Buttons and interactive chips should utilize a "clipped corner" effect or a very subtle chamfer where possible to lean into the sci-fi aesthetic.

## Components

- **Technical Cards:** Glassmorphic containers with 1px Cyan strokes. Headers should include a JetBrains Mono "serial number" or "status tag" in the top-right corner.
- **Code Blocks:** High-contrast backgrounds (solid #000000) with JetBrains Mono text. Include a "Copy" button that pulses Green on success.
- **Progress Trackers:** Linear "nodes" connected by 1px lines. Completed steps glow Green; current steps pulse Cyan; upcoming steps are 30% opacity White.
- **Flow-Navigation:** Sidebar links use a "bracket" indicator `[ ]` that appears around the text on hover, rendered in JetBrains Mono.
- **Input Fields:** Minimalist underlines that transition from Grey to a Cyan glow when focused.
- **Buttons:** Primary buttons are solid Cyan with Black text; secondary buttons are Ghost-style with Cyan outlines and a subtle backdrop blur.