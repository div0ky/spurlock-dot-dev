<script setup lang="ts">
interface Props {
  href?: string
  icon?: string
  iconPosition?: 'left' | 'right'
  size?: 'lg' | 'md' | 'sm'
  to?: string
  variant?: 'ghost' | 'primary' | 'secondary'
}

const props = withDefaults(defineProps<Props>(), {
  href: undefined,
  icon: undefined,
  iconPosition: 'right',
  size: 'md',
  to: undefined,
  variant: 'primary',
})

const componentType = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})

const variantClasses = {
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-surface-elevated dark:hover:text-white',
  primary: 'bg-mint-500 text-slate-900 hover:bg-mint-600 hover:shadow-glow-mint',
  secondary: 'border border-slate-300 text-slate-900 hover:border-mint-500/50 hover:bg-mint-500/10 dark:border-slate-700 dark:text-white',
}

const sizeClasses = {
  lg: 'px-8 py-4 text-label-lg gap-2',
  md: 'px-6 py-3 text-label-lg gap-2',
  sm: 'px-4 py-2 text-label-md gap-1.5',
}
</script>

<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    class="group inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <Icon
      v-if="icon && iconPosition === 'left'"
      :name="icon"
      class="h-5 w-5"
    />
    <slot />
    <Icon
      v-if="icon && iconPosition === 'right'"
      :name="icon"
      class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    />
  </component>
</template>
