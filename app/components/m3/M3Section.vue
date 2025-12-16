<script setup lang="ts">
interface Props {
  id?: string
  background?: 'default' | 'dim'
  padding?: 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  id: undefined,
  background: 'default',
  padding: 'lg',
})

const paddingClasses = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-24',
}
</script>

<template>
  <section
    :id="id"
    class="relative overflow-hidden"
    :class="[
      paddingClasses[padding],
      background === 'dim' && 'bg-slate-50 dark:bg-surface-dim',
    ]"
  >
    <!-- Background effects slot -->
    <slot name="background" />

    <div class="relative mx-auto max-w-6xl px-6">
      <slot />
    </div>
  </section>
</template>

