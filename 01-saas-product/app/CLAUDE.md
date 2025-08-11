
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Prisma PRD Builder is a static landing page for an AI-powered Product Requirements Document (PRD) creation tool. The site showcases 10 specialized AI agents that help product managers create professional PRDs in minutes rather than hours.

## Technology Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Inter (primary), JetBrains Mono (monospace)
- **Deployment**: Vercel (static hosting)
- **Content Language**: Spanish (es)

## Development Commands

Since this is a static website, there are no build steps or package managers. The site runs directly in the browser.

### Local Development
```bash
# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000
```

### Deployment
```bash
# Deploy to Vercel (automatic via Git)
git push origin main

# Manual deployment
vercel --prod
```

## File Structure

```
/
├── index.html          # Main landing page
├── homepage.html       # Alternative homepage version
├── styles.css          # Complete styling system
├── script.js           # Interactive functionality
├── vercel.json         # Deployment configuration
├── favicon.png         # Site icon
├── assets/             # Images and media
├── docs/               # Product documentation
│   ├── prd-formatted.md
│   ├── agentic-flow-design.md
│   └── market-research/
└── productv2.md        # Product requirements
```

## Architecture

### CSS Design System
The project uses a comprehensive CSS custom property system defined in `styles.css`:

- **Brand Colors**: `--color-cyan` (#47FFBF), `--color-purple` (#8376FF), `--color-pink` (#FF48C7)
- **Typography**: Inter font family with weight variations (300-700)
- **Spacing**: Systematic spacing scale from `--space-xs` to `--space-5xl`
- **Animations**: Custom easing functions and transition timing

### JavaScript Modules
The `script.js` file is organized into functional modules:

- **Navigation**: Sticky header, mobile menu, smooth scrolling
- **Interactions**: Agent card selection, FAQ accordion
- **ROI Calculator**: Dynamic cost calculation with canvas visualization
- **Analytics**: Event tracking with conversion funnels
- **Animations**: Intersection Observer for scroll-triggered effects

### Content Architecture
The landing page follows a conversion-optimized structure:

1. **Hero Section**: Value proposition with 10 AI agents concept
2. **Problem Section**: Identifies pain points (4-6 hours per PRD)
3. **Solution Section**: 10-agent workflow visualization
4. **Features Grid**: Key capabilities and benefits
5. **Social Proof**: Testimonials from major companies
6. **ROI Calculator**: Interactive cost savings demonstration
7. **Pricing Tiers**: Free, Pro ($19/month), Team ($49/user)

## Key Components

### Agent Showcase System
The core feature highlighting 10 specialized AI agents:
- Interactive card selection in `initAgentCards()`
- Visual process flow (Idea → 10 Agents → Complete PRD)
- Each agent has specific expertise (Structure, Context, Stakeholders, etc.)

### ROI Calculator
Interactive calculator that demonstrates value proposition:
- Input: PRDs per month, hours per PRD, cost per hour
- Output: Time saved, monthly savings, annual ROI
- Includes animated canvas chart visualization
- Assumes 70% time reduction with AI assistance

### Conversion Tracking
Comprehensive analytics system tracking:
- CTA click actions (`data-action` attributes)
- Scroll depth milestones (25%, 50%, 75%, 100%)
- Time on page engagement metrics
- Form submissions and user interactions

## Deployment Configuration

### Vercel Settings (`vercel.json`)
- **Build Command**: None (static site)
- **Output Directory**: Root (`.`)
- **Security Headers**: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection

### Content Security
The site implements basic security headers and follows web security best practices:
- No external script dependencies (vanilla JS)
- Lazy loading for images
- Accessible navigation with ARIA labels
- Keyboard navigation support

## Brand Guidelines

### Visual Identity
- **Primary Colors**: High-contrast neon palette (cyan, purple, pink)
- **Typography**: Clean, professional Inter font system
- **Aesthetic**: Modern tech/SaaS with glass morphism effects
- **Voice**: Professional but approachable, focused on efficiency

### Content Strategy
- **Target Audience**: Product Managers and startup founders
- **Value Proposition**: Reduce PRD creation time from hours to minutes
- **Pain Points**: Time waste, inconsistent formats, missing requirements
- **Solution**: 10 specialized AI agents with proven templates

## Accessibility Features

- Semantic HTML structure with proper heading hierarchy
- ARIA labels and roles for interactive elements
- Keyboard navigation support (Tab, Escape)
- Screen reader friendly content structure
- High contrast color combinations
- Focus management for modals and interactive elements

## Performance Optimizations

- Intersection Observer for lazy loading and animations
- Throttled scroll event handlers
- Canvas-based chart rendering for performance
- Minimal external dependencies
- Optimized image loading strategies
- Client-side performance tracking

## Content Management

### Spanish Localization
The site is primarily in Spanish with professional business terminology:
- Formal business language for enterprise audience
- Technical terms appropriately localized
- Cultural adaptation for Latin American market

### Modal Placeholders
The JavaScript includes placeholder functions for:
- `showSignupModal()` - User registration flow
- `showDemoModal()` - Demo scheduling
- `showContactModal()` - Sales contact form

These are currently implemented as alerts but can be replaced with actual modal components when backend integration is added.