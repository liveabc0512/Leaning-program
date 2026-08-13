---
name: Lumina Lexicon
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#784b00'
  on-tertiary: '#ffffff'
  tertiary-container: '#996100'
  on-tertiary-container: '#ffeedd'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-word:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  reading-zh:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.6'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 20px
  stack-gap: 16px
  card-inner-padding: 24px
  section-margin: 32px
---

## Brand & Style
The design system is engineered for high-frequency cognitive retention. It prioritizes a "Zen-SaaS" aesthetic—combining the efficiency of modern productivity tools with the calm of a wellness application. The target audience includes students and professionals seeking a low-friction, high-focus environment for mastering Traditional Chinese vocabulary.

The style is **Minimalist with Tactile accents**. It leverages heavy whitespace to eliminate cognitive overwhelm and subtle depth to make interactive elements feel physical and satisfying. The interface should evoke a sense of steady progress, clarity, and academic reliability.

## Colors
The palette uses **Soft Blues** and **Vital Greens** to balance focus with a sense of growth. 

- **Primary (Focus Blue):** Used for primary navigation, active states, and focus-intensive tasks.
- **Secondary (Growth Green):** Reserved exclusively for success states, "Completed" markers, and progress increments.
- **Tertiary (Action Gold):** A motivational accent for "Start" buttons and high-priority streaks to create visual urgency without anxiety.
- **Neutral:** A range of slate grays that provide high legibility for Traditional Chinese characters without the harshness of pure black.

## Typography
This design system utilizes **Inter** for its exceptional legibility in UI contexts and its neutral tone that doesn't distract from the character strokes of Traditional Chinese.

- **Vocabulary Cards:** Use `display-word` for the main Chinese character/phrase to ensure maximum impact.
- **Hierarchical Clarity:** Use `label-caps` for metadata (e.g., "PART OF SPEECH" or "LEVEL 1") to create a clear visual distinction from the content.
- **Traditional Chinese Optimization:** For body text in Chinese, the line height is increased to `1.6` to ensure that dense characters remain legible and airy.

## Layout & Spacing
The layout follows a **Fluid Grid** with a strict 8px rhythmic scale. To reduce cognitive load, the system mandates generous margins and avoids "clumping" information.

- **Mobile First:** A standard 20px side margin for the primary container.
- **Vertical Rhythm:** A 16px gap between stacked list items; 32px between logical content sections.
- **White Space Policy:** Every vocabulary card must have at least 24px of internal padding to isolate the word from its definition, allowing the eye to rest.

## Elevation & Depth
The design system uses **Tonal Layers** combined with **Soft Ambient Shadows**. This creates a "sheet" metaphor where cards appear to sit lightly above a neutral background.

- **Level 0 (Background):** `#F8FAFC` (Slate 50).
- **Level 1 (Cards/Surface):** White with a 4px blur, 2% opacity black shadow.
- **Level 2 (Interactive/Active):** White with an 8px blur, 6% opacity primary-tinted shadow.
- **Outlines:** Use a 1px solid border in `#E2E8F0` for elements at Level 1 to maintain crispness on high-resolution displays.

## Shapes
The design system uses **Rounded** geometry (8px base radius). This softens the academic nature of the app, making it feel approachable and modern.

- **Standard Elements:** Buttons, cards, and input fields use a `0.5rem` (8px) corner radius.
- **Progress Indicators:** Use fully rounded (pill-shaped) ends for progress bars to communicate fluidity and movement.
- **Social Avatars:** Circular (50% radius) to differentiate human elements from content elements.

## Components

- **Vocabulary Cards:** The centerpiece component. It uses Level 1 elevation, center-aligned typography for the main word, and a subtle divider for definitions. Use `reading-zh` for Traditional Chinese content.
- **Primary Action Button:** Large, minimum 56px height. Background color is `tertiary_color` for "Start" and `primary_color` for "Continue". Text is bold and centered.
- **Progress Trackers:** Horizontal bars with a neutral track and a `secondary_color` fill. Include a percentage label using `label-caps`.
- **Social Feed Items:** Simplified card layouts with a circular avatar, `body-md` for text, and a low-contrast "Like" button using the `neutral_color`.
- **Input Fields:** Flat background (`#F1F5F9`) with no shadow. Transition to a 2px `primary_color` border on focus.
- **Success Chips:** Small, rounded-xl badges with `secondary_color` background (at 10% opacity) and `secondary_color` text for marking mastered words.