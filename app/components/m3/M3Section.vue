<script setup lang="ts">
interface Props {
  background?: 'default' | 'dim'
  id?: string
  padding?: 'lg' | 'md' | 'sm'
}

withDefaults(defineProps<Props>(), {
  background: 'default',
  id: undefined,
  padding: 'lg',
})

const paddingClasses = {
  lg: 'py-24',
  md: 'py-16',
  sm: 'py-12',
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
