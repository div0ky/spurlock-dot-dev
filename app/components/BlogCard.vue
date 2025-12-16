<script setup lang="ts">
interface BlogPost {
  path: string
  title: string
  description: string
  date: string
  tags?: string[]
  readingTime?: number
  image?: string
}

defineProps<{
  post: BlogPost
}>()

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <NuxtLink
    :to="post.path"
    class="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-mint-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-surface-elevated"
  >
    <!-- Image -->
    <div
      v-if="post.image"
      class="aspect-video overflow-hidden"
    >
      <img
        :src="post.image"
        :alt="post.title"
        class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      >
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Meta -->
      <div class="mb-3 flex items-center gap-3 text-body-sm text-slate-500">
        <time :datetime="post.date">{{ formatDate(post.date) }}</time>
        <span
          v-if="post.readingTime"
          class="flex items-center gap-1"
        >
          <Icon
            name="lucide:clock"
            class="h-3.5 w-3.5"
          />
          {{ post.readingTime }} min read
        </span>
      </div>

      <!-- Title -->
      <h3 class="mb-2 text-headline-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400">
        {{ post.title }}
      </h3>

      <!-- Description -->
      <p class="mb-4 line-clamp-2 text-body-md text-slate-600 dark:text-slate-400">
        {{ post.description }}
      </p>

      <!-- Tags -->
      <div
        v-if="post.tags?.length"
        class="flex flex-wrap gap-2"
      >
        <M3Badge
          v-for="tag in post.tags.slice(0, 3)"
          :key="tag"
          variant="muted"
          size="sm"
        >
          {{ tag }}
        </M3Badge>
      </div>

      <!-- Read More -->
      <div class="mt-4 flex items-center gap-2 text-label-lg font-medium text-mint-600 opacity-0 transition-opacity group-hover:opacity-100 dark:text-mint-400">
        Read Article
        <Icon
          name="lucide:arrow-right"
          class="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </div>
    </div>
  </NuxtLink>
</template>
