# Blue Racoon - Style Guide

## Brand Identity

### Theme System

Blue Racoon offers four distinct themes that users can switch between according to their preference.

#### Default Light Theme (Happy Hues Palette 9)

- **Background:** `#eff0f3` - Main background
- **Secondary Background:** `#fffffe` - Card background
- **Headline:** `#0d0d0d` - Primary text
- **Paragraph:** `#2a2a2a` - Secondary text
- **Button:** `#ff8e3c` - Primary action
- **Button Text:** `#0d0d0d` - Button text
- **Highlight:** `#d9376e` - Accent color
- **Stroke:** `#0d0d0d` - Borders and dividers

#### Default Dark Theme (Happy Hues Palette 13)

- **Background:** `#0f0e17` - Main background
- **Secondary Background:** `#fffffe` - Card background
- **Headline:** `#fffffe` - Primary text
- **Paragraph:** `#a7a9be` - Secondary text
- **Button:** `#ff8906` - Primary action
- **Button Text:** `#fffffe` - Button text
- **Highlight:** `#e53170` - Accent color
- **Secondary Highlight:** `#f25f4c` - Additional accent

#### Blue Pink Theme (Happy Hues Palette 12)

- **Background:** `#fec7d7` - Main background
- **Secondary Background:** `#fffffe` - Card background
- **Headline:** `#0e172c` - Primary text
- **Paragraph:** `#172c66` - Secondary text
- **Button:** `#f25042` - Primary action
- **Button Text:** `#fffffe` - Button text
- **Highlight:** `#725ac1` - Accent color
- **Stroke:** `#0e172c` - Borders and dividers

#### Extra White Theme (Happy Hues Palette 6)

- **Background:** `#fffffe` - Main background
- **Secondary Background:** `#f9f4ef` - Card background
- **Headline:** `#020826` - Primary text
- **Paragraph:** `#716040` - Secondary text
- **Button:** `#8c7851` - Primary action
- **Button Text:** `#fffffe` - Button text
- **Highlight:** `#eaddcf` - Accent color
- **Stroke:** `#020826` - Borders and dividers

### Theme Switcher

- Prominent theme selection control in settings/profile area
- Immediate application of theme changes
- Theme preference stored in user profile
- System default option that respects OS light/dark preference

### Typography

#### Font Family

- **Primary Font:** Adobe Clean (Adobe Font)
  - Fallback: Roboto (Google Font)
- **Secondary Font:** Adobe Caslon Pro (Adobe Font)
  - Fallback: Merriweather (Google Font)
- **Monospace Font:** Source Code Pro (Adobe Font)
  - Fallback: Roboto Mono (Google Font)

#### Font Sizes

- **Heading 1:** 24px (Page titles)
- **Heading 2:** 20px (Section titles)
- **Heading 3:** 18px (Card titles)
- **Body Text:** 16px (Primary content)
- **Small Text:** 14px (Secondary information, metadata)
- **Micro Text:** 12px (Timestamps, footnotes)

#### Font Weights

- **Regular:** 400
- **Medium:** 500
- **Bold:** 700

## Components

### Cards

#### Task Card

- Rounded corners (8px radius)
- Light shadow (elevation: 1)
- Background color from theme's Secondary Background
- Title at top (Heading 3) using theme's Headline color
- Metadata below with Small text using theme's Paragraph color
- "Last worked on" tag prominently displayed with theme's Highlight color
- Action buttons right-aligned at bottom using theme's Button color

#### Widget Card

- Rounded corners (8px radius)
- Medium shadow (elevation: 2)
- Background color from theme's Secondary Background
- Title in header with icon using theme's Headline color
- Content area with appropriate visualization using theme's Paragraph color
- Optional footer with summary information
- Border accents using theme's Highlight color

### Buttons

#### Primary Button

- Filled with theme's Button color
- Text color from theme's Button Text
- 8px border radius
- Medium elevation shadow
- Hover state: slightly darker shade of Button color

#### Secondary Button

- Outlined with theme's Button color border
- Text color from theme's Button color
- 8px border radius
- No elevation shadow
- Hover state: light background color (10% opacity of Button color)

#### Icon Button

- Circular
- Transparent background
- Icon color from theme's Button color
- Hover state: light background color (10% opacity of Button color)

### Form Elements

#### Text Input

- Outlined style
- Border color from theme's Stroke color
- Text color from theme's Paragraph color
- Label color from theme's Paragraph color
- Label above input
- Helper text below when needed using theme's Paragraph color at 70% opacity
- Focus state: border color changes to theme's Button color

#### Dropdowns & Selects

- Match text input styling
- Dropdown animation for options
- Selected item highlighted with theme's Button color at 20% opacity
- Clear iconography for dropdown state

#### Checkboxes & Toggles

- Theme's Button color when active
- Theme's Stroke color when inactive
- Clear visual difference between states
- Appropriate size (24px)

## Layout Guidelines

### Spacing System

- **Base unit:** 8px
- **Extra small:** 4px (half base unit)
- **Small:** 8px (1x base unit)
- **Medium:** 16px (2x base unit)
- **Large:** 24px (3x base unit)
- **Extra large:** 32px (4x base unit)
- **2XL:** 48px (6x base unit)

### Grid System

- 12-column grid for desktop
- Responsive breakpoints:
  - **Mobile:** 0-600px
  - **Tablet:** 600-960px
  - **Desktop:** 960px+
- Consistent gutters (16px on mobile, 24px on desktop)

### Content Containers

- Max width of 1200px
- Centered on page
- Padding adjusts based on screen size
- Background color from theme's Background color

## Interactive Elements

### Hover States

- Subtle background color change using theme colors
- Cursor change to pointer
- Possible elevation increase for cards

### Focus States

- Clear outline using theme's Highlight color
- Should meet accessibility standards
- Maintain appropriate contrast with background

### Active States

- Darker shade of component color
- Brief animation for feedback (200ms)

## Animations & Transitions

### Duration Guidelines

- **Quick:** 100ms (simple UI changes)
- **Standard:** 200ms (most transitions)
- **Complex:** 300ms (larger UI changes)

### Easing Functions

- **Standard:** ease-in-out
- **Entrance:** ease-out
- **Exit:** ease-in

### Animation Types

- Fade in/out for appearing/disappearing elements
- Scale for emphasis
- Slide for navigation and panels

## Accessibility Guidelines

### Color Contrast

- Maintain 4.5:1 contrast ratio for normal text
- Maintain 3:1 contrast ratio for large text
- Avoid using color alone to convey information
- Test all themes for sufficient contrast ratios

### Text Sizing

- Allow text scaling without breaking layouts
- Maintain readability at all sizes

### Focus Indicators

- Clear focus indicators for keyboard navigation
- Never remove focus outlines without replacement
- Ensure focus indicators are visible in all themes

## Icon System

### Icon Library

- Material Design Icons as primary source
- Consistent 24px base size
- 1px stroke weight for outlined icons
- Icon colors should adapt to current theme

### Icon Usage

- Use icons consistently across the application
- Include text labels where possible for clarity
- Maintain padding around icons (minimum 8px)
- Ensure sufficient contrast in all themes
