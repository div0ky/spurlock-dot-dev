<script setup lang="ts">
const { data: projects } = await useAsyncData('showcase-projects', () =>
  queryCollection('projects').all(),
)

const featuredProject = computed(() =>
  projects.value?.find(p => p.featured && !p.parent),
)

const childProjects = computed(() =>
  projects.value
    ?.filter(p => p.parent === 'evergreen')
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99)) ?? [],
)
</script>

<template>
  <M3Section id="projects">
    <template #background>
      <div class="absolute inset-0 bg-mesh opacity-50" />
    </template>

    <M3SectionHeader
      label="Portfolio"
      title="Featured Projects"
      description="Explore the systems I've built, from the comprehensive Evergreen platform to its individual modules and features."
    />

    <!-- Featured Project (Evergreen) -->
    <div
      v-if="featuredProject"
      class="mb-12"
    >
      <NuxtLink
        :to="featuredProject.path"
        class="group relative block rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:border-mint-500/30 hover:shadow-2xl hover:shadow-mint-500/10 dark:border-slate-800 dark:bg-surface-elevated"
      >
        <div class="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
          <!-- Content -->
          <div class="flex flex-col justify-center">
            <div class="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-mint-500 px-4 py-1.5 text-label-lg font-medium text-slate-900">
              <Icon
                name="lucide:star"
                class="h-4 w-4"
              />
              Featured Project
            </div>

            <h3 class="mb-4 text-display-sm text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400">
              {{ featuredProject.title }}
            </h3>

            <p class="mb-6 text-body-lg text-slate-600 dark:text-slate-400">
              {{ featuredProject.description }}
            </p>

            <div class="mb-8 flex flex-wrap gap-2">
              <M3Badge
                v-for="tag in featuredProject.tags"
                :key="tag"
                variant="muted"
              >
                {{ tag }}
              </M3Badge>
            </div>

            <div class="flex items-center gap-2 text-title-lg font-semibold text-mint-600 dark:text-mint-400">
              Explore Project
              <Icon
                name="lucide:arrow-right"
                class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>

          <!-- Visual -->
          <div class="relative self-start">
            <div class="aspect-video overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-surface-overlay">
              <NuxtImg
                :src="featuredProject.image"
                :alt="`${featuredProject.title} screenshot`"
                width="640"
                height="360"
                class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl border-2 border-mint-500/20" />
            <div class="absolute -left-4 -top-4 h-16 w-16 rounded-xl bg-mint-500/10" />
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Modules Grid -->
    <div
      v-if="childProjects.length"
      class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <NuxtLink
        v-for="child in childProjects"
        :key="child.path"
        :to="child.path"
        class="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-mint-500/30 hover:shadow-xl dark:border-slate-800 dark:bg-surface-elevated"
      >
        <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/10">
          <Icon
            :name="child.icon || 'lucide:box'"
            class="h-6 w-6 text-mint-500"
          />
        </div>
        <h4 class="mb-2 text-title-lg text-slate-900 transition-colors group-hover:text-mint-600 dark:text-white dark:group-hover:text-mint-400">
          {{ child.title }}
        </h4>
        <p class="mb-4 line-clamp-2 flex-1 text-body-md text-slate-600 dark:text-slate-400">
          {{ child.description }}
        </p>
        <div class="flex items-center gap-1 text-label-md font-medium text-mint-600 dark:text-mint-400">
          Learn more
          <Icon
            name="lucide:arrow-right"
            class="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </div>
      </NuxtLink>
    </div>

    <!-- View All Link -->
    <div class="mt-12 text-center">
      <M3Button
        to="/projects"
        variant="secondary"
        size="lg"
        icon="lucide:arrow-right"
      >
        View All Projects
      </M3Button>
    </div>
  </M3Section>
</template>
