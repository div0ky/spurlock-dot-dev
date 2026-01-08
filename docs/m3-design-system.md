# M3 Design System in Nuxt

Material Design 3 (M3) component library implementation for spurlock.dev. Components live in `~/components/m3/` and follow strict conventions for consistency, type safety, and dark mode support.

## Core Principles

1. **Inevitable naming**: `M3ComponentName.vue` (PascalCase, M3 prefix)
2. **TypeScript-first**: Explicit `Props` interface for every component
3. **Variant-driven design**: Pre-defined variant/size classes as typed objects
4. **Dark mode native**: Every color has a `dark:` equivalent using custom surface tokens
5. **Semantic flexibility**: Dynamic `:is` component rendering for proper HTML semantics
6. **Smooth transitions**: 300ms duration-300 on all interactive states

## File Structure Pattern

```typescript
// ~/components/m3/M3ComponentName.vue
<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' // Always type union literals
  size?: 'sm' | 'md' | 'lg'
  // Required props have no default
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

// Variant classes as const objects (not computed)
const variantClasses = {
  primary: 'bg-mint-500 text-slate-900 hover:bg-mint-600',
  secondary: 'border border-slate-300 dark:border-slate-700',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-label-md',
  md: 'px-6 py-3 text-label-lg',
  lg: 'px-8 py-4 text-label-lg',
}
</script>

<template>
  <component
    :is="as || 'div'"
    class="transition-all duration-300"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
```

## Design Tokens (Tailwind Extended)

### Colors
- **Accent**: `mint-{400,500,600}` (primary brand color)
- **Surfaces** (dark mode):
  - `bg-surface-dim` - Dimmed background
  - `bg-surface-elevated` - Raised surface (cards, modals)
  - `bg-surface-overlay` - Layered content
- **Text**: `slate-{600,900}` (light) / `slate-{300,400}` + `white` (dark)

### Typography Scale
- `text-display-sm` - Section headings
- `text-body-lg` - Body text, descriptions
- `text-label-lg` - Button text, emphasized labels (uppercase tracking-wider)
- `text-label-md` - Small labels, badges

### Spacing/Sizing
- Padding: `sm: py-12`, `md: py-16`, `lg: py-24` (sections)
- Buttons: `sm: px-4 py-2`, `md: px-6 py-3`, `lg: px-8 py-4`
- Borders: `rounded-2xl` (cards), `rounded-full` (buttons), `rounded-lg` (badges)

## Component Reference

### M3Button
**Purpose**: Links, buttons, CTAs with icon support

```vue
<M3Button variant="primary" size="md" icon="heroicons:arrow-right" to="/projects">
  View Projects
</M3Button>
```

**Variants**: `primary` (filled mint), `secondary` (outlined), `ghost` (text only)  
**Props**: `to` (NuxtLink), `href` (anchor), `icon`, `iconPosition: 'left' | 'right'`  
**Pattern**: Renders as `<button>`, `<a>`, or `<NuxtLink>` based on props

### M3Card
**Purpose**: Content containers with elevation

```vue
<M3Card variant="elevated" hoverable as="article">
  <slot /> <!-- Your content here -->
</M3Card>
```

**Variants**: `elevated` (bordered + bg), `outlined` (border only)  
**Props**: `as: 'div' | 'article' | 'section'`, `hoverable: boolean`

### M3Badge
**Purpose**: Labels, tags, status indicators

```vue
<M3Badge variant="primary" size="sm">TypeScript</M3Badge>
```

**Variants**: `muted` (gray bg), `outline` (bordered), `primary` (mint accent)

### M3Section
**Purpose**: Page-level sections with consistent spacing

```vue
<M3Section id="projects" background="dim" padding="lg">
  <slot name="background" /> <!-- Decorative backgrounds -->
  <slot /> <!-- Section content (auto-wrapped in max-w-6xl container) -->
</M3Section>
```

**Props**: `background: 'default' | 'dim'`, `padding: 'sm' | 'md' | 'lg'`

### M3SectionHeader
**Purpose**: Section titles with optional label/description

```vue
<M3SectionHeader
  label="Featured Work"
  title="Projects"
  description="Scalable enterprise solutions built for humans."
  align="center"
/>
```

### M3IconButton
**Purpose**: Compact icon-only actions

```vue
<M3IconButton icon="heroicons:moon" label="Toggle theme" variant="ghost" size="md" />
```

**Variants**: `default` (filled bg on hover), `elevated` (always filled), `ghost` (text only)

## Common Patterns

### Dynamic Component Rendering
Use computed component type for semantic HTML:

```typescript
const componentType = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
```

### Conditional Slot Content
Wrap optional UI in `v-if` checks:

```vue
<Icon v-if="icon && iconPosition === 'left'" :name="icon" />
<slot />
<Icon v-if="icon && iconPosition === 'right'" :name="icon" />
```

### Class Composition
Always use array syntax for dynamic classes:

```vue
:class="[variantClasses[variant], sizeClasses[size], hoverable && 'hover:shadow-lg']"
```

## Extending the System

### Adding a New Component

1. **Create** `~/components/m3/M3ComponentName.vue`
2. **Define** `Props` interface with sensible defaults
3. **Extract** variant/size classes into const objects (not maps or computed)
4. **Include** dark mode classes for every visual property
5. **Add** transitions: `transition-all duration-300` on interactive elements
6. **Support** semantic HTML via `as` prop when appropriate
7. **Document** in this file with usage example

### Variant Naming Conventions
- **Visual style**: `primary`, `secondary`, `ghost`, `muted`, `outline`
- **State**: `elevated`, `hoverable`, `active`
- **Context**: `default`, `dim`, `overlay` (surfaces)

### Required Props vs Defaults
- **No default**: Core content props (`title`, `icon`, `label`)
- **Always default**: Style props (`variant`, `size`, `align`)

## Rules (Inevitable > Clean)

- **No inline styles**: Use Tailwind classes exclusively
- **No arbitrary values**: Define tokens in `tailwind.config.ts` first
- **Single responsibility**: One variant object per visual property (don't mix size + color)
- **Explicit typing**: Union literals, not string enums (`'sm' | 'md' | 'lg'` not `Size`)
- **Dark mode everywhere**: If you add a color class, add its `dark:` equivalent immediately
- **Icon namespacing**: Use `heroicons:icon-name` format (Nuxt Icon module convention)

## Testing Your Component

```vue
<!-- Light mode, all variants -->
<M3YourComponent variant="primary" />
<M3YourComponent variant="secondary" />

<!-- Dark mode check (toggle theme) -->
<M3YourComponent variant="primary" />

<!-- Size variations -->
<M3YourComponent size="sm" />
<M3YourComponent size="md" />
<M3YourComponent size="lg" />

<!-- With slotted content -->
<M3YourComponent>
  <p>Content should render naturally</p>
</M3YourComponent>
```

## Design Philosophy

Material Design 3 prioritizes:
1. **Expressive surfaces** - Rounded corners, elevation, borders create depth
2. **Dynamic color** - Mint accent adapts to light/dark modes
3. **Large touch targets** - Min 44×44px for interactive elements
4. **Readable typography** - Consistent scale with clear hierarchy
5. **Smooth motion** - 300ms transitions feel responsive without lag

The M3 system in this codebase is **not** Google's official M3 library—it's a custom implementation inspired by Material Design 3 principles, optimized for this Nuxt app's specific needs. Keep it simple, keep it inevitable.

