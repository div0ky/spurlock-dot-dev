<script setup lang="ts">
interface Props {
  as?: 'article' | 'div' | 'section'
  hoverable?: boolean
  variant?: 'elevated' | 'outlined'
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  hoverable: false,
  variant: 'elevated',
})
</script>

<template>
  <component
    :is="as"
    class="rounded-2xl transition-all duration-300"
    :class="[
      variant === 'elevated'
        ? 'border border-slate-200 bg-white dark:border-slate-800 dark:bg-surface-elevated'
        : 'border border-slate-200 bg-transparent dark:border-slate-800',
      hoverable && 'hover:border-mint-500/30 hover:shadow-lg dark:hover:shadow-mint-500/5',
    ]"
  >
    <slot />
  </component>
</template>
