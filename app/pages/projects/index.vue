<script setup lang="ts">
useSeoMeta({
  title: 'Projects | Aaron J. Spurlock',
  description: 'Explore my portfolio of enterprise software projects, including the Evergreen platform.',
})

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all(),
)
</script>

<template>
  <div class="min-h-screen">
    <!-- Header -->
    <section class="relative overflow-hidden py-24">
      <div class="absolute inset-0 bg-mesh" />
      <div class="absolute inset-0 bg-grid opacity-50" />

      <div class="relative mx-auto max-w-6xl px-6 text-center">
        <p class="mb-4 text-label-lg uppercase tracking-wider text-mint-400">
          Portfolio
        </p>
        <h1 class="mb-6 text-display-md text-white">
          Projects
        </h1>
        <p class="mx-auto max-w-2xl text-body-lg text-slate-400">
          A collection of enterprise software solutions I've designed and built,
          featuring the comprehensive Evergreen platform.
        </p>
      </div>
    </section>

    <!-- Projects List -->
    <section class="py-12">
      <div class="mx-auto max-w-6xl px-6">
        <div
          v-if="projects?.length"
          class="space-y-8"
        >
          <NuxtLink
            v-for="project in projects"
            :key="project.path"
            :to="project.path"
            class="group block overflow-hidden rounded-2xl border border-slate-800 bg-surface-elevated transition-all duration-500 hover:border-mint-500/30 hover:shadow-xl"
          >
            <div class="grid gap-6 p-6 md:grid-cols-3 md:p-8">
              <!-- Image -->
              <div class="aspect-video overflow-hidden rounded-xl bg-surface-overlay md:aspect-[4/3]">
                <img
                  v-if="project.image"
                  :src="project.image"
                  :alt="project.title"
                  class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                >
                <div
                  v-else
                  class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-surface-elevated"
                >
                  <Icon
                    :name="project.icon || 'lucide:code-2'"
                    class="h-16 w-16 text-mint-500/30"
                  />
                </div>
              </div>

              <!-- Content -->
              <div class="flex flex-col justify-center md:col-span-2">
                <div class="mb-2 flex items-center gap-3">
                  <h2 class="text-headline-md text-white transition-colors group-hover:text-mint-400">
                    {{ project.title }}
                  </h2>
                  <span
                    v-if="project.featured"
                    class="rounded-full bg-mint-500/10 px-2 py-0.5 text-label-md text-mint-400"
                  >
                    Featured
                  </span>
                </div>

                <p class="mb-4 text-body-lg text-slate-400">
                  {{ project.description }}
                </p>

                <div
                  v-if="project.tags?.length"
                  class="mb-4 flex flex-wrap gap-2"
                >
                  <span
                    v-for="tag in project.tags.slice(0, 6)"
                    :key="tag"
                    class="rounded-lg bg-surface-overlay px-2.5 py-1 text-label-md text-slate-500 transition-colors group-hover:text-slate-400"
                  >
                    {{ tag }}
                  </span>
                </div>

                <div class="flex items-center gap-2 text-label-lg font-medium text-mint-400">
                  View Details
                  <Icon
                    name="lucide:arrow-right"
                    class="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="rounded-2xl border border-dashed border-slate-700 p-16 text-center"
        >
          <Icon
            name="lucide:folder"
            class="mx-auto mb-4 h-16 w-16 text-slate-600"
          />
          <h2 class="mb-2 text-headline-md text-slate-400">
            Projects Coming Soon
          </h2>
          <p class="text-body-lg text-slate-500">
            Detailed project breakdowns are being prepared. Check back soon!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

