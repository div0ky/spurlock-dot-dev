<script setup lang="ts">
interface Props {
  icon: string
  variant?: 'default' | 'ghost' | 'elevated'
  size?: 'sm' | 'md' | 'lg'
  label: string
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'md',
})

const variantClasses = {
  default: 'text-slate-600 hover:bg-slate-100 hover:text-mint-600 dark:text-slate-300 dark:hover:bg-surface-elevated dark:hover:text-mint-400',
  ghost: 'text-slate-500 hover:text-mint-600 dark:text-slate-400 dark:hover:text-mint-400',
  elevated: 'bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:text-mint-600 dark:bg-surface-elevated dark:text-slate-400 dark:hover:bg-surface-overlay dark:hover:text-white',
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
}

const iconSizes = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
}
</script>

<template>
  <button
    class="flex items-center justify-center rounded-lg transition-colors"
    :class="[variantClasses[variant], sizeClasses[size]]"
    :aria-label="label"
  >
    <Icon
      :name="icon"
      :class="iconSizes[size]"
    />
  </button>
</template>

