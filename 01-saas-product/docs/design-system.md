# Prisma PRD Builder - Design System Documentation

## Brand Identity

### Mission
Transform product documentation from a tedious task into an efficient, AI-powered workflow that drives better product outcomes.

### Brand Values
- **Efficiency**: Save 50-70% of documentation time
- **Intelligence**: AI-powered insights and suggestions
- **Professionalism**: Enterprise-grade quality
- **Innovation**: Cutting-edge technology meets practical needs

## Color System

### Primary Colors

#### Brand Black
- **Hex**: #000000
- **RGB**: 0, 0, 0
- **Usage**: Primary backgrounds, text, professional foundation

#### Prisma Cyan
- **Hex**: #47FFBF
- **RGB**: 71, 255, 191
- **Usage**: Primary CTAs, success states, highlights

#### Prisma Purple
- **Hex**: #8376FF
- **RGB**: 131, 118, 255
- **Usage**: Premium features, secondary CTAs, AI elements

#### Prisma Pink
- **Hex**: #FF48C7
- **RGB**: 255, 72, 199
- **Usage**: Accent elements, notifications, enterprise tier

### Semantic Colors

#### Success
- **Primary**: #47FFBF (Prisma Cyan)
- **Light**: #6FFFCF
- **Dark**: #2FE6A6

#### Warning
- **Primary**: #FFB547
- **Light**: #FFCA6F
- **Dark**: #E69D2F

#### Error
- **Primary**: #FF4747
- **Light**: #FF6F6F
- **Dark**: #E62F2F

#### Neutral Scale
- **Gray 900**: #111111
- **Gray 800**: #1A1A1A
- **Gray 700**: #2A2A2A
- **Gray 600**: #404040
- **Gray 500**: #666666
- **Gray 400**: #999999
- **Gray 300**: #CCCCCC
- **Gray 200**: #E5E5E5
- **Gray 100**: #F5F5F5
- **White**: #FFFFFF

### Gradients

#### Primary Gradient (Hero)
```css
background: linear-gradient(135deg, #8376FF 0%, #47FFBF 50%, #FF48C7 100%);
```

#### Dark Gradient (Sections)
```css
background: linear-gradient(180deg, #000000 0%, #111111 100%);
```

#### Glass Morphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

## Typography

### Font Stack
```css
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Type Scale
- **Hero**: 72px (4.5rem) / 1.1 / -0.02em
- **H1**: 48px (3rem) / 1.2 / -0.02em
- **H2**: 36px (2.25rem) / 1.3 / -0.01em
- **H3**: 28px (1.75rem) / 1.4 / -0.01em
- **H4**: 24px (1.5rem) / 1.4 / 0
- **Body Large**: 20px (1.25rem) / 1.6 / 0
- **Body**: 16px (1rem) / 1.6 / 0
- **Small**: 14px (0.875rem) / 1.5 / 0
- **Caption**: 12px (0.75rem) / 1.5 / 0

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

## Spacing System

### Base Unit: 8px

- **space-xs**: 4px (0.25rem)
- **space-sm**: 8px (0.5rem)
- **space-md**: 16px (1rem)
- **space-lg**: 24px (1.5rem)
- **space-xl**: 32px (2rem)
- **space-2xl**: 48px (3rem)
- **space-3xl**: 64px (4rem)
- **space-4xl**: 96px (6rem)
- **space-5xl**: 128px (8rem)

## Component Patterns

### Buttons

#### Primary Button
```css
background: linear-gradient(135deg, #47FFBF 0%, #47FFBF 100%);
color: #000000;
padding: 16px 32px;
border-radius: 8px;
font-weight: 600;
transition: all 0.3s ease;
```

#### Secondary Button
```css
background: transparent;
color: #47FFBF;
border: 2px solid #47FFBF;
padding: 14px 30px;
border-radius: 8px;
```

#### Enterprise Button
```css
background: linear-gradient(135deg, #8376FF 0%, #FF48C7 100%);
color: #FFFFFF;
padding: 16px 32px;
border-radius: 8px;
```

### Cards

#### Glass Card
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
padding: 32px;
```

#### Feature Card
```css
background: linear-gradient(180deg, rgba(131, 118, 255, 0.1) 0%, rgba(131, 118, 255, 0.05) 100%);
border: 1px solid rgba(131, 118, 255, 0.2);
border-radius: 12px;
padding: 24px;
```

### Form Elements

#### Input Field
```css
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 8px;
padding: 12px 16px;
color: #FFFFFF;
```

#### Focus State
```css
border-color: #47FFBF;
box-shadow: 0 0 0 3px rgba(71, 255, 191, 0.2);
```

## Animation & Transitions

### Timing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Standard Durations
- **Instant**: 100ms
- **Fast**: 200ms
- **Normal**: 300ms
- **Slow**: 500ms
- **Very Slow**: 1000ms

### Hover Effects
```css
transform: translateY(-2px);
box-shadow: 0 10px 30px rgba(71, 255, 191, 0.3);
```

## Grid System

### Container
```css
max-width: 1280px;
margin: 0 auto;
padding: 0 24px;
```

### Breakpoints
- **Mobile**: 0 - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px - 1279px
- **Wide**: 1280px+

## Iconography

### Icon Style
- **Weight**: 2px stroke
- **Style**: Rounded corners
- **Size Grid**: 16px, 20px, 24px, 32px
- **Colors**: Inherit from text or use brand colors

## Shadow System

### Elevation Levels
```css
--shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.2);
--shadow-md: 0 4px 8px rgba(0, 0, 0, 0.3);
--shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.4);
--shadow-xl: 0 16px 32px rgba(0, 0, 0, 0.5);
--shadow-glow: 0 0 40px rgba(71, 255, 191, 0.3);
```

## Motion Principles

### Page Transitions
- Fade in with subtle scale: `opacity: 0 → 1, scale: 0.98 → 1`
- Stagger children elements by 50ms
- Use ease-out timing for entrances

### Micro-interactions
- Button hover: Scale 1.02 with shadow
- Card hover: Translate Y -4px
- Link hover: Underline animation

### Scroll Animations
- Fade up on scroll with 20px translate
- Parallax for hero backgrounds
- Smooth scroll behavior

## Accessibility

### Color Contrast
- **Large Text**: Minimum 3:1 ratio
- **Body Text**: Minimum 4.5:1 ratio
- **Interactive Elements**: Clear focus indicators

### Keyboard Navigation
- All interactive elements keyboard accessible
- Visible focus states using brand colors
- Skip navigation links

### Screen Reader Support
- Semantic HTML structure
- Proper ARIA labels
- Descriptive link text

## B2B Conversion Optimization

### Above the Fold
- Clear value proposition
- Compelling hero headline
- Primary CTA prominently displayed
- Social proof indicators

### Trust Signals
- Client logos
- Security badges
- Testimonials
- Case study metrics

### CTA Strategy
- Primary: "Start Free Trial"
- Secondary: "Book a Demo"
- Tertiary: "View Pricing"

### Form Optimization
- Minimal fields
- Progressive disclosure
- Clear error states
- Success confirmation

## Implementation Guidelines

### CSS Architecture
- Use CSS custom properties for theming
- Mobile-first responsive design
- Component-based structure
- Utility classes for spacing

### Performance
- Lazy load images
- Optimize font loading
- Minimize CSS/JS bundles
- Use CSS transforms for animations

### Cross-browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Graceful degradation for older browsers
- Fallbacks for backdrop-filter