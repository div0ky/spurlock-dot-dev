<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'muted' | 'outline'
  size?: 'sm' | 'md'
}

withDefaults(defineProps<Props>(), {
  variant: 'muted',
  size: 'md',
})

const variantClasses = {
  primary: 'bg-mint-500/10 text-mint-600 dark:text-mint-400',
  muted: 'bg-slate-100 text-slate-600 dark:bg-surface-overlay dark:text-slate-400',
  outline: 'border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400',
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-label-md',
  md: 'px-3 py-1.5 text-label-lg',
}
</script>

<template>
  <span
    class="inline-flex items-center rounded-lg transition-colors"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </span>
</template>

