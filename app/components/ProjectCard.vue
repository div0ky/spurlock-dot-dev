<script setup lang="ts">
interface Project {
  slug: string
  title: string
  description: string
  image?: string
  tags: string[]
  featured?: boolean
}

defineProps<{
  project: Project
}>()
</script>

<template>
  <NuxtLink
    :to="`/projects/${project.slug}`"
    class="group relative block overflow-hidden rounded-2xl border border-slate-800 bg-surface-elevated transition-all duration-500 hover:border-mint-500/30 hover:shadow-xl hover:shadow-mint-500/5"
  >
    <!-- Image -->
    <div class="relative aspect-video overflow-hidden bg-surface-overlay">
      <NuxtImg
        v-if="project.image"
        :src="project.image"
        :alt="project.title"
        width="640"
        height="360"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
      <div
        v-else
        class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-surface-elevated"
      >
        <Icon
          name="lucide:code-2"
          class="h-16 w-16 text-mint-500/30"
        />
      </div>

      <!-- Featured Badge -->
      <div
        v-if="project.featured"
        class="absolute left-4 top-4"
      >
        <span class="inline-flex items-center gap-1.5 rounded-full bg-mint-500 px-3 py-1 text-label-md font-medium text-slate-900">
          <Icon
            name="lucide:star"
            class="h-3.5 w-3.5"
          />
          Featured
        </span>
      </div>

      <!-- Hover Overlay -->
      <div class="absolute inset-0 flex items-center justify-center bg-surface/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <span class="flex items-center gap-2 rounded-full bg-mint-500 px-6 py-3 text-label-lg font-semibold text-slate-900">
          View Project
          <Icon
            name="lucide:arrow-right"
            class="h-5 w-5"
          />
        </span>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="mb-2 text-headline-sm text-white transition-colors group-hover:text-mint-400">
        {{ project.title }}
      </h3>
      <p class="mb-4 line-clamp-2 text-body-md text-slate-400">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags.slice(0, 4)"
          :key="tag"
          class="rounded-lg bg-surface-overlay px-2.5 py-1 text-label-md text-slate-500 transition-colors group-hover:text-slate-400"
        >
          {{ tag }}
        </span>
        <span
          v-if="project.tags.length > 4"
          class="rounded-lg bg-surface-overlay px-2.5 py-1 text-label-md text-slate-500"
        >
          +{{ project.tags.length - 4 }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

