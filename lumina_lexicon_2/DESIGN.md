---
name: Lumina Lexicon
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#44e2cd'
  on-secondary: '#003731'
  secondary-container: '#03c6b2'
  on-secondary-container: '#004d44'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#b76dff'
  on-tertiary-container: '#400071'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#62fae3'
  secondary-fixed-dim: '#3cddc7'
  on-secondary-fixed: '#00201c'
  on-secondary-fixed-variant: '#005047'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
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
    lineHeight: 34px
  title-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 40px
  xl: 64px
  gutter: 16px
  margin-mobile: 20px
  margin-desktop: auto
---

## Brand & Style

The design system is engineered to transform language acquisition from a chore into a high-octane digital experience. It blends **Modern Minimalism** with **Glassmorphism** to create a "UI-as-a-Game" aesthetic. The interface prioritizes clarity through heavy whitespace and sharp typography, while injecting energy via luminous glows, translucent layering, and vibrant gradients.

The target audience is a mobile-first generation that expects frictionless interaction and visual reward. The emotional response should be one of "effortless progress"—feeling premium, technologically advanced, yet incredibly welcoming and addictive.

## Colors

This design system utilizes a high-contrast palette optimized for a dark-first environment. 

- **Primary (Electric Indigo):** Used for core actions, active states, and branding. 
- **Secondary (Cyber Mint):** Reserved for success states, secondary accents, and callouts that require high visibility against the dark background.
- **Tertiary (Violet):** Used primarily in gradients to add depth and a "gaming" feel to progress indicators.
- **Neutral (Midnight Slate):** The foundation of the app. Use varying opacities of this shade to create surface levels.

**Gradients:** Use the Progress gradient for active learning bars and the Achievement gradient for milestones and leveling up.

## Typography

Typography is systematic and functional, utilizing **Inter** across all roles to maintain a clean, tech-forward look. 

- **Display & Headlines:** Use tight letter-spacing and heavy weights (Bold/ExtraBold) to mimic the impact of game titles.
- **Body Text:** Maintains generous line-height for readability during long study sessions.
- **Labels:** Small caps or all-caps with increased letter-spacing should be used for secondary metadata or non-interactive UI markers.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a 12-column structure for desktop and a 4-column structure for mobile. 

- **Spacing Rhythm:** Based on an 8px scale.
- **Safe Zones:** Use a minimum 20px margin on mobile devices to ensure interactive elements are not clipped by hardware bezels.
- **Container Strategy:** Content is grouped in "Glass Cards" (see Elevation). Cards should have a vertical gap of `md` (24px) to ensure the background glows are visible between elements.

## Elevation & Depth

This design system moves away from traditional drop shadows in favor of **Glassmorphism and Tonal Layers**.

1.  **Level 0 (Background):** Solid Midnight Slate (#0f172a).
2.  **Level 1 (Glass Cards):** Semi-transparent neutral (white at 5-10% opacity) with a 20px backdrop blur and a subtle 1px inner border (white at 15% opacity).
3.  **Level 2 (Active/Floating):** Use a soft "Electric Indigo" outer glow (20px blur, 20% opacity) instead of a black shadow to suggest the element is emitting light.
4.  **Transitions:** Use spring-based micro-interactions when moving between elevation levels to enhance the tactile, game-like feel.

## Shapes

The shape language is consistently soft and approachable. 
- **Base Radius:** 12px (0.75rem) for standard cards and input fields.
- **Large Radius:** 24px (1.5rem) for main dashboard containers.
- **Interactive Elements:** Buttons should always use a high roundedness (either 12px or full pill-shape) to invite interaction.

## Components

- **Buttons:** Primary buttons use the Electric Indigo background with a subtle "inner glow" highlight on the top edge. On hover/active, the Cyber Mint accent should be used as a glow effect.
- **Progress Bars:** Use a thick (12px) track with the "Progress" gradient. The track background should be a semi-transparent Midnight Slate.
- **Flashcards:** These are the centerpiece. Use Level 1 Glassmorphism with centered Display-size typography. Flip animations must be 3D and fluid (300ms ease-out).
- **Input Fields:** Minimalist design with only a bottom border that illuminates in Electric Indigo when focused.
- **Achievement Badges:** Circular elements with the "Achievement" gradient and a high-contrast icon. Include a 10px backdrop blur for the badge container.
- **Gamified Lists:** List items should have horizontal "chevrons" that pulse subtly when a user has been inactive for more than 5 seconds.