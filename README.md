# Chip-to-Agent Stack Portfolio

A modern, interactive portfolio website showcasing full-stack AI engineering expertise from custom silicon design to autonomous agent systems.

## 🎨 Theme

The website embodies the **"Chip-to-Agent Stack"** concept, presenting AI engineering as a layered system:

- **Layer 0: Silicon** - ASIC design, hardware accelerators, chip fabrication
- **Layer 1: Models** - LLM fine-tuning, training pipelines, model optimization
- **Layer 2: Agents** - Multi-agent systems, tool orchestration, autonomous workflows
- **Layer 3: Impact** - Business outcomes, production deployments, measurable results

## ✨ Features

- **3D Particle Background** - Dynamic Three.js particle field with smooth animations
- **Smooth Scrolling** - Buttery smooth scroll experience powered by Lenis
- **Interactive Stack Visualization** - Animated layer-by-layer system view
- **Advanced Animations** - Framer Motion for fluid, professional transitions
- **Responsive Design** - Fully responsive across all device sizes
- **Modern CSS** - SCSS modules with custom properties for theming
- **Performance Optimized** - Fast loading and smooth 60fps animations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Animations**:
  - Framer Motion (UI animations)
  - Three.js & React Three Fiber (3D effects)
  - GSAP (Advanced animations)
  - Lenis (Smooth scrolling)
- **Utilities**:
  - React Intersection Observer
  - Lottie React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
/app
  /globals.css          # Global styles and CSS variables
  /layout.tsx           # Root layout with smooth scroll
  /page.tsx             # Main page composition

/components
  /layers/              # Layer components (L0-L3)
    - Layer0Silicon.tsx
    - Layer1Models.tsx
    - Layer2Agents.tsx
    - Layer3Impact.tsx
    - Layer.module.scss  # Shared layer styles
  
  - Navigation.tsx       # Fixed navigation bar
  - Hero.tsx            # Hero section with CTA
  - ParticleBackground.tsx  # 3D particle effects
  - StackVisualization.tsx  # Interactive stack view
  - Publications.tsx    # Research publications
  - Contact.tsx         # Contact section & footer
  - SmoothScroll.tsx    # Lenis smooth scroll wrapper
  - *.module.scss       # Component-specific styles
```

## 🎯 Key Sections

### Hero
- Attention-grabbing title with animated badge
- Three core pillars (ASIC, Models, Agents)
- Key statistics and CTAs
- 3D particle background

### Stack Visualization
- Animated layer-by-layer breakdown
- Interactive hover effects
- Connecting lines between layers
- Metrics for each layer

### Layer 0: Silicon
- ASIC design projects
- Chip fabrication achievements
- Hardware acceleration work
- Technology stack

### Layer 1: Models
- LLM fine-tuning experience
- RAG pipeline architecture
- CNN training and optimization
- ML/DL frameworks

### Layer 2: Agents
- Multi-agent systems
- Tool orchestration
- Agentic design principles
- Agent technologies

### Layer 3: Impact
- Business outcomes
- Production deployments
- Leadership roles
- Full-stack value proposition

### Publications
- Research papers in top-tier venues
- ISSCC, JSSC, VLSI publications
- Academic credentials

### Contact
- Multiple contact methods
- CTA for opportunities
- Social links
- Footer

## 🎨 Customization

### Colors

Edit CSS variables in `/app/globals.css`:

```css
:root {
  --color-primary: #00ff88;
  --color-secondary: #00d4ff;
  --color-accent: #ff006e;
  --layer-0: #ff006e;  /* Silicon */
  --layer-1: #7209b7;  /* Models */
  --layer-2: #3a0ca3;  /* Agents */
  --layer-3: #00ff88;  /* Impact */
}
```

### Content

Update personal information, projects, and experience in the respective component files.

## 📱 Responsive Design

The site is fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## ⚡ Performance

- Server-side rendering with Next.js
- Component-level code splitting
- Optimized animations (60fps)
- Lazy loading for heavy assets
- Smooth scroll performance

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with modern web technologies and inspired by cutting-edge portfolio designs and system dashboards.

---

**Motasem Sakr** | Full-Stack AI Engineer
Chip → Agent Stack

