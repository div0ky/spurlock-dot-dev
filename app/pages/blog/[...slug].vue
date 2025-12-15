<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const fullPath = `/blog/${slug}`
const { data: post } = await useAsyncData(`blog-${slug}`, async () => {
  const all = await queryCollection('blog').all()
  return all.find(p => p.path === fullPath)
})

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found',
  })
}

useSeoMeta({
  title: () => `${post.value?.title} | Aaron J. Spurlock`,
  description: () => post.value?.description,
  ogTitle: () => post.value?.title,
  ogDescription: () => post.value?.description,
  ogType: 'article',
  articlePublishedTime: () => post.value?.date,
  articleAuthor: 'Aaron J. Spurlock',
})

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Get related posts by tags
const { data: relatedPosts } = await useAsyncData(`related-${slug}`, async () => {
  if (!post.value?.tags?.length) return []
  const all = await queryCollection('blog').all()
  return all.filter(p => p.path !== fullPath).slice(0, 3)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Article Header -->
    <header class="relative overflow-hidden py-24">
      <div class="absolute inset-0 bg-mesh" />
      <div class="absolute inset-0 bg-grid opacity-50" />

      <div class="relative mx-auto max-w-3xl px-6">
        <!-- Back Link -->
        <NuxtLink
          to="/blog"
          class="group mb-8 inline-flex items-center gap-2 text-label-lg text-slate-400 transition-colors hover:text-mint-400"
        >
          <Icon
            name="lucide:arrow-left"
            class="h-4 w-4 transition-transform group-hover:-translate-x-1"
          />
          Back to Blog
        </NuxtLink>

        <!-- Tags -->
        <div
          v-if="post?.tags?.length"
          class="mb-4 flex flex-wrap gap-2"
        >
          <span
            v-for="tag in post.tags"
            :key="tag"
            class="rounded-full bg-mint-500/10 px-3 py-1 text-label-md text-mint-400"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="mb-6 text-display-sm text-white md:text-display-md">
          {{ post?.title }}
        </h1>

        <!-- Meta -->
        <div class="flex flex-wrap items-center gap-4 text-body-md text-slate-400">
          <div class="flex items-center gap-2">
            <div class="flex h-10 w-10 items-center justify-center rounded-full bg-mint-500/10">
              <span class="text-title-md font-semibold text-mint-400">AJ</span>
            </div>
            <span>Aaron J. Spurlock</span>
          </div>

          <span class="text-slate-600">•</span>

          <time
            v-if="post?.date"
            :datetime="post.date"
          >
            {{ formatDate(post.date) }}
          </time>

          <span
            v-if="post?.readingTime"
            class="flex items-center gap-1"
          >
            <span class="text-slate-600">•</span>
            <Icon
              name="lucide:clock"
              class="h-4 w-4"
            />
            {{ post.readingTime }} min read
          </span>
        </div>
      </div>
    </header>

    <!-- Article Content -->
    <article class="py-12">
      <div class="mx-auto max-w-3xl px-6">
        <ContentRenderer
          v-if="post"
          :value="post"
          class="prose prose-lg prose-invert max-w-none prose-headings:font-semibold prose-headings:text-white prose-h2:text-headline-lg prose-h3:text-headline-md prose-p:text-slate-300 prose-a:text-mint-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-mint-400 prose-pre:bg-surface-elevated prose-pre:border prose-pre:border-slate-800 prose-blockquote:border-mint-500 prose-blockquote:text-slate-400 prose-li:text-slate-300"
        />
      </div>
    </article>

    <!-- Related Posts -->
    <section
      v-if="relatedPosts?.length"
      class="border-t border-slate-800 py-24"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-headline-lg text-white">
          Related Articles
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.path"
            :post="relatedPost"
          />
        </div>
      </div>
    </section>

    <!-- Author Bio -->
    <section class="border-t border-slate-800 bg-surface-dim py-16">
      <div class="mx-auto max-w-3xl px-6">
        <div class="flex flex-col items-center gap-6 rounded-2xl border border-slate-800 bg-surface-elevated p-8 text-center md:flex-row md:text-left">
          <div class="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-mint-500/10">
            <Icon
              name="lucide:user"
              class="h-10 w-10 text-mint-400"
            />
          </div>
          <div>
            <h3 class="mb-2 text-headline-sm text-white">
              Written by Aaron J. Spurlock
            </h3>
            <p class="mb-4 text-body-md text-slate-400">
              Head of Technology at Midtown Home Improvements. Building enterprise-grade software and writing about the journey.
            </p>
            <div class="flex justify-center gap-3 md:justify-start">
              <a
                href="https://github.com/ajspurlock"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-overlay text-slate-400 transition-colors hover:bg-mint-500/10 hover:text-mint-400"
              >
                <Icon
                  name="lucide:github"
                  class="h-5 w-5"
                />
              </a>
              <a
                href="https://linkedin.com/in/ajspurlock"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-overlay text-slate-400 transition-colors hover:bg-mint-500/10 hover:text-mint-400"
              >
                <Icon
                  name="lucide:linkedin"
                  class="h-5 w-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

