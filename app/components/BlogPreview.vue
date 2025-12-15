<script setup lang="ts">
const { data: posts } = await useAsyncData('latest-posts', async () => {
  const all = await queryCollection('blog').all()
  return all.slice(0, 3)
},
)
</script>

<template>
  <section class="relative py-24">
    <!-- Background -->
    <div class="absolute inset-0 bg-surface-dim" />
    <div class="absolute inset-0 bg-grid opacity-30" />

    <div class="relative mx-auto max-w-6xl px-6">
      <!-- Section Header -->
      <div class="mb-16 flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p class="mb-4 text-label-lg uppercase tracking-wider text-mint-400">
            Blog
          </p>
          <h2 class="mb-4 text-display-sm text-white">
            Latest Articles
          </h2>
          <p class="max-w-xl text-body-lg text-slate-400">
            Thoughts on development, architecture, and building enterprise software.
          </p>
        </div>

        <NuxtLink
          to="/blog"
          class="group flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-label-lg font-semibold text-white transition-all duration-300 hover:border-mint-500/50 hover:bg-mint-500/10"
        >
          View All Posts
          <Icon
            name="lucide:arrow-right"
            class="h-5 w-5 transition-transform group-hover:translate-x-1"
          />
        </NuxtLink>
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

      <!-- Empty State -->
      <div
        v-else
        class="rounded-2xl border border-dashed border-slate-700 p-12 text-center"
      >
        <Icon
          name="lucide:file-text"
          class="mx-auto mb-4 h-12 w-12 text-slate-600"
        />
        <h3 class="mb-2 text-headline-sm text-slate-400">
          No Posts Yet
        </h3>
        <p class="text-body-md text-slate-500">
          Blog posts coming soon. Stay tuned!
        </p>
      </div>
    </div>
  </section>
</template>

