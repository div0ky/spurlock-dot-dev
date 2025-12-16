<script setup lang="ts">
const route = useRoute()
const slug = Array.isArray(route.params.slug) ? route.params.slug.join('/') : route.params.slug

const fullPath = `/projects/${slug}`
const { data: project } = await useAsyncData(`project-${slug}`, async () => {
  const all = await queryCollection('projects').all()
  return all.find(p => p.path === fullPath)
})

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Project not found',
  })
}

useSeoMeta({
  title: () => `${project.value?.title} | Aaron J. Spurlock`,
  description: () => project.value?.description,
  ogTitle: () => project.value?.title,
  ogDescription: () => project.value?.description,
  ogType: 'article',
})

// Get related projects
const { data: relatedProjects } = await useAsyncData(`related-project-${slug}`, async () => {
  if (!project.value?.tags?.length) return []
  const all = await queryCollection('projects').all()
  return all.filter(p => p.path !== fullPath).slice(0, 3)
})
</script>

<template>
  <div class="min-h-screen">
    <!-- Project Header -->
    <header class="relative overflow-hidden py-24">
      <div class="absolute inset-0 bg-mesh" />
      <div class="absolute inset-0 bg-grid opacity-50" />

      <div class="relative mx-auto max-w-6xl px-6">
        <!-- Back Link -->
        <NuxtLink
          to="/projects"
          class="group mb-8 inline-flex items-center gap-2 text-label-lg text-slate-400 transition-colors hover:text-mint-400"
        >
          <Icon
            name="lucide:arrow-left"
            class="h-4 w-4 transition-transform group-hover:-translate-x-1"
          />
          Back to Projects
        </NuxtLink>

        <div class="grid gap-12 lg:grid-cols-2">
          <!-- Content -->
          <div>
            <!-- Tags -->
            <div
              v-if="project?.tags?.length"
              class="mb-4 flex flex-wrap gap-2"
            >
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full bg-mint-500/10 px-3 py-1 text-label-md text-mint-400"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="mb-6 text-display-sm text-white md:text-display-md">
              {{ project?.title }}
            </h1>

            <!-- Description -->
            <p class="mb-8 text-body-lg text-slate-400">
              {{ project?.description }}
            </p>

            <!-- Quick Stats -->
            <div
              v-if="project?.stats"
              class="grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              <div
                v-for="(value, key) in project.stats"
                :key="key"
                class="rounded-xl border border-slate-800 bg-surface-elevated p-4"
              >
                <p class="text-display-sm text-mint-400">
                  {{ value }}
                </p>
                <p class="text-label-md uppercase tracking-wider text-slate-500">
                  {{ key }}
                </p>
              </div>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="relative">
            <div class="aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-surface-elevated">
              <img
                v-if="project?.image"
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover"
              >
              <div
                v-else
                class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-surface-elevated"
              >
                <Icon
                  :name="project?.icon || 'lucide:layout-dashboard'"
                  class="h-24 w-24 text-mint-500/30"
                />
              </div>
            </div>

            <!-- Decorative -->
            <div class="absolute -bottom-4 -right-4 h-20 w-20 rounded-2xl border-2 border-mint-500/20" />
          </div>
        </div>
      </div>
    </header>

    <!-- Project Content -->
    <article class="py-16">
      <div class="mx-auto max-w-4xl px-6">
        <ContentRenderer
          v-if="project"
          :value="project"
          class="prose prose-lg prose-invert max-w-none prose-headings:font-semibold prose-headings:text-white prose-h2:mt-12 prose-h2:text-headline-lg prose-h3:text-headline-md prose-p:text-slate-300 prose-a:text-mint-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-mint-400 prose-pre:bg-surface-elevated prose-pre:border prose-pre:border-slate-800 prose-blockquote:border-mint-500 prose-blockquote:text-slate-400 prose-li:text-slate-300 prose-img:rounded-xl prose-img:border prose-img:border-slate-800"
        />
      </div>
    </article>

    <!-- Screenshots Gallery -->
    <section
      v-if="project?.screenshots?.length"
      class="border-t border-slate-800 py-16"
    >
      <div class="mx-auto max-w-6xl px-6">
        <ScreenshotGallery
          :screenshots="project.screenshots"
          title="Screenshots"
        />
      </div>
    </section>

    <!-- Tech Stack Detail -->
    <section
      v-if="project?.techStack"
      class="border-t border-slate-800 bg-surface-dim py-16"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-headline-lg text-white">
          Technology Stack
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(techs, category) in project.techStack"
            :key="category"
            class="rounded-xl border border-slate-800 bg-surface-elevated p-6"
          >
            <h3 class="mb-4 text-title-lg font-semibold capitalize text-mint-400">
              {{ category }}
            </h3>
            <ul class="space-y-2">
              <li
                v-for="tech in techs"
                :key="tech"
                class="flex items-center gap-2 text-body-md text-slate-400"
              >
                <Icon
                  name="lucide:check"
                  class="h-4 w-4 text-mint-500"
                />
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section
      v-if="relatedProjects?.length"
      class="border-t border-slate-800 py-16"
    >
      <div class="mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-headline-lg text-white">
          Related Projects
        </h2>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            v-for="related in relatedProjects"
            :key="related.path"
            :project="{
              slug: related.path?.replace('/projects/', '') || '',
              title: related.title,
              description: related.description,
              image: related.image,
              tags: related.tags || [],
              featured: related.featured,
            }"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="border-t border-slate-800 bg-surface-dim py-16">
      <div class="mx-auto max-w-3xl px-6 text-center">
        <h2 class="mb-4 text-headline-lg text-white">
          Interested in working together?
        </h2>
        <p class="mb-8 text-body-lg text-slate-400">
          I'm always open to discussing new projects and opportunities.
        </p>
        <a
          href="mailto:aj@spurlock.dev"
          class="inline-flex items-center gap-2 rounded-full bg-mint-500 px-8 py-4 text-label-lg font-semibold text-slate-900 transition-all duration-300 hover:bg-mint-600 hover:shadow-glow-mint-lg"
        >
          <Icon
            name="lucide:mail"
            class="h-5 w-5"
          />
          Get in Touch
        </a>
      </div>
    </section>
  </div>
</template>

