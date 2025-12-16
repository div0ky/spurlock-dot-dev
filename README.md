# spurlock.dev - Developer Portfolio

A modern developer portfolio built with Nuxt 4, Tailwind CSS, and Nuxt Content v3. Features a mint green and dark grey color scheme inspired by Material Design 3 Expressive.

## 🎨 Design

- **Theme**: M3 Expressive with mint green (#22c968) and dark grey palette
- **Typography**: Space Grotesk for headings, JetBrains Mono for code
- **Layout**: Responsive design with mobile-first approach
- **Components**: Custom components built with Vue 3 Composition API

## 🚀 Features

- **Hero Section**: Animated hero with rotating job titles
- **Work History**: Timeline-based work experience showcase
- **Projects Showcase**: Featured project cards with detailed deep-dive pages
- **Blog System**: Markdown-based blog with Nuxt Content v3 and Shiki syntax highlighting
- **Screenshot Galleries**: Lightbox-enabled image galleries for project screenshots
- **Code Snippets**: Syntax-highlighted code blocks with GitHub Dark theme

## 📁 Project Structure

```
app/
  ├── components/        # Vue components
  │   ├── AppHeader.vue      # Navigation header
  │   ├── AppFooter.vue      # Site footer
  │   ├── AppHero.vue        # Landing page hero
  │   ├── WorkHistory.vue    # Experience timeline
  │   ├── ProjectsShowcase.vue
  │   ├── ProjectCard.vue
  │   ├── BlogPreview.vue
  │   ├── BlogCard.vue
  │   └── ScreenshotGallery.vue
  ├── layouts/          # Layout templates
  ├── pages/            # Route pages
  │   ├── index.vue         # Landing page
  │   ├── blog/
  │   │   ├── index.vue     # Blog listing
  │   │   └── [...slug].vue # Individual blog posts
  │   └── projects/
  │       ├── index.vue     # Projects listing
  │       └── [...slug].vue # Project deep-dives
  └── assets/css/
      └── main.css         # Global styles and design tokens

content/
  ├── blog/            # Blog posts (Markdown)
  └── projects/        # Project documentation (Markdown)

content.config.ts      # Nuxt Content v3 configuration
tailwind.config.ts     # Tailwind configuration
nuxt.config.ts         # Nuxt configuration
```

## 🛠️ Tech Stack

- **Framework**: Nuxt 4.2.2
- **Styling**: Tailwind CSS with custom M3-inspired design tokens
- **Content**: Nuxt Content v3 with Markdown support
- **Syntax Highlighting**: Shiki with GitHub Dark theme
- **Icons**: Nuxt Icon with Lucide icons
- **Fonts**: Space Grotesk & JetBrains Mono via Google Fonts
- **Type Safety**: TypeScript with strict mode

## 📝 Content Management

### Blog Posts

Create markdown files in `content/blog/`:

```markdown
---
title: "Your Post Title"
description: "Brief description"
date: "2024-01-15"
tags:
  - Tag1
  - Tag2
readingTime: 8
---

Your content here...
```

### Projects

Create markdown files in `content/projects/`:

```markdown
---
title: "Project Name"
description: "Project description"
order: 1
featured: true
tags:
  - Vue.js
  - TypeScript
icon: "lucide:layout-dashboard"
stats:
  users: "200+"
  uptime: "99.9%"
techStack:
  frontend:
    - Vue 3
    - Nuxt 3
  backend:
    - Node.js
    - PostgreSQL
---

## Overview

Project details...
```

## 🚦 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or Node.js 18+

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Development

The dev server runs at `http://localhost:3000/`

- Hot reload is enabled for all components and content
- Changes to content files automatically rebuild and refresh
- TypeScript and ESLint checks run automatically

## 📦 Building for Production

```bash
# Build for production
bun run build

# Preview production build locally
bun run preview
```

## 🎯 Key Implementation Details

### Nuxt Content v3 Integration

The site uses Nuxt Content v3 which has different APIs from v2:

- Use `queryCollection('collectionName')` instead of `queryContent()`
- Content items use `path` property instead of `_path`
- Collections are defined in `content.config.ts` with Zod schemas

### Design System

CSS custom properties are defined in `app/assets/css/main.css`:

- `--color-primary`: Mint green color variants
- `--color-surface`: Dark grey surface colors
- `--font-sans` / `--font-mono`: Typography stacks
- `--space-*`: Spacing scale
- `--radius-*`: Border radius scale
- `--transition-*`: Animation timing functions

### Component Patterns

Components follow Vue 3 Composition API patterns:

- `<script setup lang="ts">` for type-safe components
- Interface definitions for props
- Composables for shared logic
- Slots for flexible layouts

## 📄 License

All rights reserved © 2025 Aaron J. Spurlock

## 🔗 Links

- **Portfolio**: [spurlock.dev](https://spurlock.dev)
- **GitHub**: [@div0ky](https://github.com/ajspurlock)
- **LinkedIn**: [ajspurlock](https://linkedin.com/in/ajspurlock)
- **Email**: [aaron@spurlock.dev](mailto:aaron@spurlock.dev)
