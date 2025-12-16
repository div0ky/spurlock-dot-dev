<script setup lang="ts">
useSeoMeta({
  description: 'Thoughts on development, architecture, and building enterprise software.',
  title: 'Blog | Aaron J. Spurlock',
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').all(),
)

const allTags = computed(() => {
  if (!posts.value) return []
  const tags = posts.value.flatMap(post => post.tags || [])
  return [...new Set(tags)]
})

const selectedTag = ref<null | string>(null)

const filteredPosts = computed(() => {
  if (!posts.value) return []
  if (!selectedTag.value) return posts.value
  const tag = selectedTag.value
  return posts.value.filter(post => post.tags?.includes(tag))
})

function selectTag(tag: null | string) {
  selectedTag.value = selectedTag.value === tag ? null : tag
}
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="relative overflow-hidden py-24">
      <div class="absolute inset-0 bg-mesh" />
      <div class="absolute inset-0 bg-grid opacity-50" />

      <div class="relative mx-auto max-w-6xl px-6 text-center">
        <p class="mb-4 text-label-lg uppercase tracking-wider text-mint-600 dark:text-mint-400">
          Blog
        </p>
        <h1 class="mb-6 text-display-md text-slate-900 dark:text-white">
          Articles & Thoughts
        </h1>
        <p class="mx-auto max-w-2xl text-body-lg text-slate-600 dark:text-slate-400">
          Exploring development patterns, system architecture, and lessons learned
          from building enterprise software.
        </p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-12">
      <div class="mx-auto max-w-6xl px-6">
        <!-- Tag Filter -->
        <div
          v-if="allTags.length"
          class="mb-12"
        >
          <p class="mb-4 text-label-md uppercase tracking-wider text-slate-500">
            Filter by Topic
          </p>
          <div class="flex flex-wrap gap-2">
            <button
              :class="[
                'rounded-full px-4 py-2 text-label-lg transition-all duration-200',
                !selectedTag
                  ? 'bg-mint-500 text-slate-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-surface-elevated dark:text-slate-400 dark:hover:bg-surface-overlay dark:hover:text-white',
              ]"
              @click="selectTag(null)"
            >
              All Posts
            </button>
            <button
              v-for="tag in allTags"
              :key="tag"
              :class="[
                'rounded-full px-4 py-2 text-label-lg transition-all duration-200',
                selectedTag === tag
                  ? 'bg-mint-500 text-slate-900'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 dark:bg-surface-elevated dark:text-slate-400 dark:hover:bg-surface-overlay dark:hover:text-white',
              ]"
              @click="selectTag(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>

        <!-- Posts Grid -->
        <div
          v-if="filteredPosts?.length"
          class="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
        <BlogCard
          v-for="post in filteredPosts"
          :key="post.path"
          :post="post"
        />
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="rounded-2xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700"
        >
          <Icon
            name="lucide:file-text"
            class="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600"
          />
          <h2 class="mb-2 text-headline-md text-slate-500 dark:text-slate-400">
            No Posts Yet
          </h2>
          <p class="text-body-lg text-slate-400 dark:text-slate-500">
            Blog posts are coming soon. Check back later!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
