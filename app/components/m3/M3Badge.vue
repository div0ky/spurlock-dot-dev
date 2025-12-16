<script setup lang="ts">
interface Props {
  size?: 'md' | 'sm'
  variant?: 'muted' | 'outline' | 'primary'
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  variant: 'muted',
})

const variantClasses = {
  muted: 'bg-slate-100 text-slate-600 dark:bg-surface-overlay dark:text-slate-400',
  outline: 'border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-400',
  primary: 'bg-mint-500/10 text-mint-600 dark:text-mint-400',
}

const sizeClasses = {
  md: 'px-3 py-1.5 text-label-lg',
  sm: 'px-2 py-0.5 text-label-md',
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
