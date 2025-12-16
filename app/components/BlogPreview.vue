<script setup lang="ts">
const { data: posts, status } = await useAsyncData('latest-posts', async () => {
  const all = await queryCollection('blog').all()
  return all.slice(0, 3)
})

const showEmptyState = computed(() => status.value === 'success' && !posts.value?.length)
</script>

<template>
  <M3Section background="dim">
    <template #background>
      <div class="absolute inset-0 bg-grid opacity-30" />
    </template>

    <!-- Section Header -->
    <div class="mb-16 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
      <div>
        <p class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400">
          Blog
        </p>
        <h2 class="mb-4 text-display-sm text-slate-900 dark:text-white">
          Latest Articles
        </h2>
        <p class="max-w-xl text-body-lg text-slate-600 dark:text-slate-400">
          Thoughts on development, architecture, and building enterprise software.
        </p>
      </div>

      <M3Button
        as="NuxtLink"
        to="/blog"
        variant="secondary"
        icon="lucide:arrow-right"
      >
        View All Posts
      </M3Button>
    </div>

    <!-- Posts Grid -->
    <div
      v-if="posts?.length"
      class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
    >
      <BlogCard
        v-for="post in posts"
        :key="post.path"
        :post="post"
      />
    </div>

    <!-- Empty State (only show when data is confirmed loaded and empty) -->
    <div
      v-else-if="showEmptyState"
      class="rounded-2xl border border-dashed border-slate-300 p-12 text-center dark:border-slate-700"
    >
      <Icon
        name="lucide:file-text"
        class="mx-auto mb-4 h-12 w-12 text-slate-400 dark:text-slate-600"
      />
      <h3 class="mb-2 text-headline-sm text-slate-500 dark:text-slate-400">
        No Posts Yet
      </h3>
      <p class="text-body-md text-slate-400 dark:text-slate-500">
        Blog posts coming soon. Stay tuned!
      </p>
    </div>
  </M3Section>
</template>
