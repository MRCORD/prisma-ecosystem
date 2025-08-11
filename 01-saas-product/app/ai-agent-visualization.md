# AI Agent Visualization Design

## Overview
The AI agent visualization is a core differentiator for Prisma PRD Builder, showing users exactly how their PRD is being constructed by 10 specialized AI agents.

## Agent Identity System

### Agent Personas (Brand Aligned)

#### 1. Idea Structurer
- **Icon**: 🧩 Puzzle piece
- **Color**: #47FFBF (Prisma Cyan)
- **Animation**: Pieces coming together

#### 2. Industry Context Adapter
- **Icon**: 🏢 Building
- **Color**: #6FFFCF (Cyan Light)
- **Animation**: Morphing shapes

#### 3. Stakeholder Synthesizer
- **Icon**: 👥 People
- **Color**: #8376FF (Prisma Purple)
- **Animation**: Connecting dots

#### 4. Competitive Analyst
- **Icon**: 📊 Chart
- **Color**: #FFB547 (Warning)
- **Animation**: Rising bars

#### 5. Compliance Scanner
- **Icon**: 🛡️ Shield
- **Color**: #FF4747 (Error)
- **Animation**: Scanning sweep

#### 6. User Insights Agent
- **Icon**: 🎯 Target
- **Color**: #47FFBF (Prisma Cyan)
- **Animation**: Ripple effect

#### 7. Story & Requirements
- **Icon**: 📝 Document
- **Color**: #2FE6A6 (Success Dark)
- **Animation**: Writing lines

#### 8. Technical Requirements
- **Icon**: ⚙️ Gear
- **Color**: #8376FF (Prisma Purple)
- **Animation**: Rotating gears

#### 9. Wireflow UX Agent
- **Icon**: 🎨 Palette
- **Color**: #FF48C7 (Prisma Pink)
- **Animation**: Drawing paths

#### 10. PRD Composer
- **Icon**: 📚 Books
- **Color**: #47FFBF (Prisma Cyan)
- **Animation**: Stacking layers

## Visualization Layouts

### 1. Timeline View (Primary)
```
┌─────────────────────────────────────────────────────────┐
│                    AI PRD Generation                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [1]---[2]---[3]---[4]---[5]---[6]---[7]---[8]---[9]---[10]  │
│   ✓    ✓    ⟳    ○    ○    ○    ○    ○    ○    ○     │
│                ↑                                        │
│         Currently Processing                            │
│                                                         │
│  ████████████░░░░░░░░░░░░░░░░░░░  30% Complete        │
│                                                         │
│  ⏱ 12s elapsed | ~28s remaining                        │
└─────────────────────────────────────────────────────────┘
```

### 2. Detailed Agent View
```
┌─────────────────────────────────────────────────────────┐
│  👥 Stakeholder Synthesizer                   Agent 3/10 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Status: Processing...                                  │
│                                                         │
│  Current Task:                                          │
│  "Identifying key stakeholders for banking compliance   │
│   and mapping their requirements..."                    │
│                                                         │
│  Preview Output:                                        │
│  • Compliance Officer (Primary)                         │
│  • Risk Management Team                                 │
│  • IT Security Lead                                     │
│  • [generating more...]                                 │
│                                                         │
│  ⟳ 5 seconds elapsed                                   │
└─────────────────────────────────────────────────────────┘
```

### 3. Compact Progress Bar
For space-constrained views:
```
AI Processing: [3/10] Stakeholder Synthesizer ████░░░░░░ 30%
```

## Animation Patterns

### Agent State Animations

#### Waiting State
- Subtle pulse effect
- 50% opacity
- No motion

#### Active State
- Full opacity
- Agent-specific animation playing
- Glow effect in agent color
- Progress ring animation

#### Completed State
- Checkmark transition
- Fade to 80% opacity
- Success color flash

#### Error State
- Red pulse
- Shake animation
- Error icon overlay

### Transition Animations

#### Agent-to-Agent Handoff
```
[Agent 1] ✓ ---> [Agent 2] ⟳
         
1. Agent 1 scales down slightly
2. Connecting line animates from 1 to 2
3. Agent 2 scales up and begins animation
4. Progress bar smoothly continues
```

#### Progress Updates
- Smooth increment (no jumps)
- Easing: ease-out
- Update every 500ms minimum

## Real-Time Feedback

### Processing Indicators

#### Text Generation
Show streaming text with typing effect:
```
Analyzing stakeholder requirements...
Found 12 key stakeholders with varying
levels of influence and interest in the
banking compliance module|
```

#### Data Processing
Show metrics being analyzed:
```
Scanning regulations: 
✓ GDPR (15 requirements)
✓ PCI-DSS (8 requirements)
⟳ SOX (analyzing...)
○ Basel III (pending)
```

### Performance Metrics
Display per-agent timing:
```
Agent Performance:
1. Idea Structurer      ✓ 3.2s
2. Industry Adapter     ✓ 4.5s
3. Stakeholder Map      ⟳ 2.1s...
```

## Interactive Elements

### User Controls

#### Pause/Resume
```
[‖] Pause  |  [▶] Resume Processing
```
- Maintains current state
- Shows "Paused" overlay
- Dims inactive agents

#### Skip Agent
```
[⟩⟩] Skip Current Agent
```
- Shows warning modal
- Explains impact
- Requires confirmation

#### View Details
```
[+] Expand Details
```
- Shows full agent output
- Real-time updates
- Syntax highlighting for technical content

### Information Tooltips
Hover over any agent for details:
```
┌─────────────────────────────┐
│ Compliance Scanner          │
│                            │
│ Scans for industry-specific│
│ regulations and ensures     │
│ your PRD meets all         │
│ compliance requirements.    │
│                            │
│ Avg. time: 5-7 seconds     │
└─────────────────────────────┘
```

## Responsive Behavior

### Mobile View
- Vertical timeline
- Swipe to see agent details
- Simplified animations
- Bottom sheet for details

### Tablet View
- Horizontal timeline
- Side panel for current agent
- Touch-friendly controls

### Desktop View
- Full timeline with previews
- Hover states
- Keyboard shortcuts
- Multi-panel layout

## Error Handling

### Agent Failures
```
┌─────────────────────────────────┐
│ ⚠️ Agent Error                  │
│                                 │
│ The Compliance Scanner          │
│ encountered an issue.           │
│                                 │
│ Options:                        │
│ [Retry] [Skip] [Use Default]   │
└─────────────────────────────────┘
```

### Recovery Options
1. **Retry**: Re-run current agent
2. **Skip**: Continue without this agent
3. **Use Default**: Apply template defaults
4. **Contact Support**: For persistent issues

## Celebration States

### Completion Animation
When all 10 agents complete:
1. Final agent completes
2. Progress bar fills to 100%
3. Subtle confetti effect
4. Success message appears
5. Transition to editor view

```
┌─────────────────────────────────────┐
│     ✨ PRD Generated Successfully!   │
│                                     │
│     Time: 32 seconds                │
│     Quality Score: 95%              │
│                                     │
│     [View PRD] [Start Editing]      │
└─────────────────────────────────────┘
```