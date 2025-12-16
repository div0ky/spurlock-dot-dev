<script setup lang="ts">
useSeoMeta({
  description: 'Explore my portfolio of enterprise software projects, including the Evergreen platform.',
  title: 'Projects | Aaron J. Spurlock',
})

const { data: projects } = await useAsyncData('projects', () =>
  queryCollection('projects').all(),
)

const parentProjects = computed(() =>
  projects.value?.filter(p => !p.parent).sort((a, b) => (a.order ?? 99) - (b.order ?? 99)) ?? [],
)

function getChildProjects(parentSlug: string) {
  return projects.value
    ?.filter(p => p.parent === parentSlug)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99)) ?? []
}

function getSlugFromPath(path: string): string {
  return path.split('/').pop() ?? ''
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
          Portfolio
        </p>
        <h1 class="mb-6 text-display-md text-slate-900 dark:text-white">
          Projects
        </h1>
        <p class="mx-auto max-w-2xl text-body-lg text-slate-600 dark:text-slate-400">
          A collection of enterprise software solutions I've designed and built,
          featuring the comprehensive Evergreen platform.
        </p>
      </div>
    </section>

    <!-- Projects List -->
    <section class="py-12">
      <div class="mx-auto max-w-6xl px-6">
        <div
          v-if="parentProjects.length"
          class="space-y-8"
        >
          <div
            v-for="project in parentProjects"
            :key="project.path"
            class="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-surface-elevated"
          >
            <!-- Main Project Card -->
            <NuxtLink
              :to="project.path"
              class="group block transition-all duration-500 hover:bg-slate-50 dark:hover:bg-surface-overlay"
            >
              <div class="grid gap-6 p-6 md:grid-cols-3 md:p-8">
                <!-- Image -->
                <div class="aspect-video overflow-hidden rounded-xl bg-slate-100 dark:bg-surface-overlay md:aspect-[4/3]">
                  <img
                    v-if="project.image"
                    :src="project.image"
                    :alt="project.title"
                    class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  >
                  <div
                    v-else
                    class="flex h-full w-full items-center justify-center bg-gradient-to-br from-mint-500/10 to-white dark:to-surface-elevated"
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
                    <h2 class="text-headline-md text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400">
                      {{ project.title }}
                    </h2>
                    <M3Badge
                      v-if="project.featured"
                      variant="primary"
                      size="sm"
                    >
                      Featured
                    </M3Badge>
                  </div>

                  <p class="mb-4 text-body-lg text-slate-600 dark:text-slate-400">
                    {{ project.description }}
                  </p>

                  <div
                    v-if="project.tags?.length"
                    class="mb-4 flex flex-wrap gap-2"
                  >
                    <M3Badge
                      v-for="tag in project.tags.slice(0, 6)"
                      :key="tag"
                      variant="muted"
                      size="sm"
                    >
                      {{ tag }}
                    </M3Badge>
                  </div>

                  <div class="flex items-center gap-2 text-label-lg font-medium text-mint-600 dark:text-mint-400">
                    View Details
                    <Icon
                      name="lucide:arrow-right"
                      class="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </NuxtLink>

            <!-- Child Modules -->
            <div
              v-if="getChildProjects(getSlugFromPath(project.path)).length"
              class="border-t border-slate-200 bg-slate-50 px-6 py-4 dark:border-slate-700 dark:bg-surface-overlay md:px-8"
            >
              <p class="mb-3 text-label-md font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Modules
              </p>
              <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                <NuxtLink
                  v-for="child in getChildProjects(getSlugFromPath(project.path))"
                  :key="child.path"
                  :to="child.path"
                  class="group/child flex items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 transition-all hover:border-mint-500/30 hover:shadow-md dark:border-slate-700 dark:bg-surface-elevated dark:hover:border-mint-500/30"
                >
                  <Icon
                    :name="child.icon || 'lucide:box'"
                    class="h-5 w-5 shrink-0 text-mint-500"
                  />
                  <span class="text-label-lg text-slate-700 transition-colors group-hover/child:text-mint-600 dark:text-slate-300 dark:group-hover/child:text-mint-400">
                    {{ child.title }}
                  </span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div
          v-else
          class="rounded-2xl border border-dashed border-slate-300 p-16 text-center dark:border-slate-700"
        >
          <Icon
            name="lucide:folder"
            class="mx-auto mb-4 h-16 w-16 text-slate-400 dark:text-slate-600"
          />
          <h2 class="mb-2 text-headline-md text-slate-500 dark:text-slate-400">
            Projects Coming Soon
          </h2>
          <p class="text-body-lg text-slate-400 dark:text-slate-500">
            Detailed project breakdowns are being prepared. Check back soon!
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
