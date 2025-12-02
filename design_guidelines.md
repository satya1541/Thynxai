# ThynxAI Design Guidelines

## Design Approach
**Reference-Based: Effica-Inspired SaaS Aesthetic**

This design follows the minimal, professional aesthetic established by Effica (effica.framer.ai), characterized by clean layouts, generous whitespace, and conversion-focused UX. The approach prioritizes clarity, trust, and ease of navigation while maintaining a premium B2B feel.

## Visual System

### Color Palette
- **Primary Background**: Pure white (#FFFFFF)
- **Secondary Background**: Soft grey (#F8F9FA, #F5F5F5)
- **Card Backgrounds**: White with subtle shadows
- **Text**: Dark grey hierarchy (#1A1A1A for headings, #4A4A4A for body, #6B7280 for secondary)
- **Accent**: Minimal use, reserved for CTAs and interactive elements

### Typography
- **Headings**: Modern sans-serif (Inter, Plus Jakarta Sans, or similar)
  - H1: 3.5rem (56px) - Hero headlines, bold weight
  - H2: 2.5rem (40px) - Section headers, semibold
  - H3: 1.875rem (30px) - Subsection titles, semibold
  - H4: 1.25rem (20px) - Card titles, medium
- **Body**: 1rem (16px) base, 1.125rem (18px) for important copy
- **Line Height**: Generous 1.6-1.8 for readability
- **Letter Spacing**: Tight (-0.02em) for headings, normal for body

### Spacing System
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24, 32** for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card padding: p-8 to p-12
- Element gaps: gap-6 to gap-8 for grids
- Container max-width: max-w-7xl with px-6 to px-8

### Layout Patterns
- **Centered containers**: All sections use max-w-7xl centered
- **Two-column splits**: 50/50 or 60/40 for service details (text left, visual right)
- **Grid systems**: 2-column (tablet), 4-column (desktop) for service cards
- **Vertical rhythm**: Consistent py-24 between major sections

## Component Specifications

### 1. Hero Section
- Full viewport height consideration (min-h-screen or 80vh)
- Centered content with generous top padding
- Headline + subheadline + dual CTAs stacked vertically
- Subtle floating UI elements (mockup screenshots, abstract shapes)
- Include trust indicators below CTAs (logos, user count, ratings)
- **Image**: Large hero image or gradient background with subtle patterns

### 2. Services Overview (4-Card Grid)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- White cards with rounded-xl borders, subtle hover lift
- Simple outlined icons (48-64px) at top
- Service name (H4), 2-3 line description
- Hover: slight shadow increase, subtle scale (1.02)

### 3. Detailed Service Sections
- Alternating layout: text-left/image-right, then text-right/image-left
- 2-column grid (lg:grid-cols-2) with gap-12 to gap-16
- Text side: Service name (H2), description paragraph, 3-4 benefit bullets with check icons
- Visual side: UI mockup, dashboard preview, or feature illustration
- Background alternates: white, then soft grey (#F8F9FA)

### 4. How It Works (Timeline)
- Horizontal step progression with connectors
- 4 circular or rounded-square step indicators
- Step number/icon, title, short description below
- Subtle arrow connectors between steps
- Mobile: vertical stack

### 5. Why Choose ThynxAI (Benefits Grid)
- Light grey container background (bg-gray-50)
- 2-3 column grid of benefit items
- Simple icon + headline + 1-2 line description per benefit
- Consistent spacing, clean alignment

### 6. Stats/Case Studies
- 3-4 metric cards in horizontal row
- Large number (3-4rem) with counter animation on scroll
- Metric label below in smaller text
- Optional: subtle card backgrounds

### 7. Pricing Cards
- 3-card layout (grid-cols-1 md:grid-cols-3)
- Rounded-2xl cards with border or subtle shadow
- Plan name, price (large), feature list, CTA button
- Middle card: elevated (scale-105, stronger shadow)

### 8. Testimonials
- Horizontal scroll or 3-column grid
- White cards with rounded-xl, padding-8
- Quote text, avatar (64px circle), name, role, company
- Subtle quotation mark icon

### 9. FAQ Accordion
- Max-w-3xl centered
- Each item: question (semibold) + expandable answer
- Chevron icon rotation on expand
- Border-bottom separators

### 10. CTA Footer Banner
- Full-width section with gradient or solid background
- Centered content: headline, subtext, primary CTA
- py-20 to py-24 padding

### 11. Clean Footer
- Multi-column layout (4-5 columns on desktop)
- Logo + brief description column
- Product, Company, Resources, Legal link columns
- Copyright and social icons at bottom
- Subtle top border, py-12 to py-16 padding

## Animation Guidelines
**Minimal and purposeful** - enhance without distraction:
- **Fade-up on scroll**: Sections fade in with slight upward movement (20-30px)
- **Number counters**: Stats animate from 0 to target on viewport entry
- **Card hovers**: Subtle scale (1.02) and shadow increase, 200ms ease
- **Button interactions**: Smooth background transitions, slight scale on press
- **Accordion**: Smooth height expansion, 300ms ease
- **NO** heavy parallax, excessive movement, or distracting effects

## Icons
Use **Heroicons (outline style)** or **Lucide Icons** via CDN
- Service cards: lightbulb, users, code, shopping-bag
- Benefits: check-circle, shield-check, clock, trending-up
- Navigation: menu, close, chevrons for accordions

## Images
1. **Hero Section**: Large, high-quality hero image showing modern dashboard UI, AI interface, or abstract tech visualization - positioned as background or right-side element
2. **Service Detail Sections**: UI mockups, dashboard screenshots, or feature visualizations for each service (Idea Lab report preview, Studio dashboard, Repo interface, Marketplace view)
3. **No stock photos** - use interface mockups, clean illustrations, or abstract shapes
4. **All images**: Rounded corners (rounded-xl to rounded-2xl), subtle shadows

## Responsive Behavior
- **Mobile-first**: Single column layouts, stacked elements
- **Tablet** (md:): 2-column grids, side-by-side service details
- **Desktop** (lg:): Full 4-column grids, optimized whitespace
- **Touch targets**: Minimum 44px for all interactive elements
- **Typography scales**: Reduce heading sizes by 30-40% on mobile

## Quality Standards
- **Pixel-perfect alignment**: All elements grid-aligned
- **Consistent shadows**: Use 2-3 shadow weights maximum
- **Professional copywriting**: Short paragraphs (2-3 lines), clear value propositions
- **Loading states**: Skeleton screens for dynamic content
- **Accessibility**: Proper heading hierarchy, sufficient contrast, keyboard navigation

This design creates a trustworthy, conversion-optimized SaaS experience that positions ThynxAI as a premium, AI-powered technology platform.