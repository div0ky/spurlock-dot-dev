<script setup lang="ts">
interface Props {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  label: undefined,
  description: undefined,
  align: 'center',
})
</script>

<template>
  <div
    class="mb-16"
    :class="align === 'center' ? 'text-center' : 'text-left'"
  >
    <p
      v-if="label"
      class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400"
    >
      {{ label }}
    </p>
    <h2 class="mb-6 text-display-sm text-slate-900 dark:text-white">
      {{ title }}
    </h2>
    <p
      v-if="description"
      class="mx-auto max-w-2xl text-body-lg text-slate-600 dark:text-slate-400"
      :class="align === 'left' && 'mx-0'"
    >
      {{ description }}
    </p>
    <slot />
  </div>
</template>

