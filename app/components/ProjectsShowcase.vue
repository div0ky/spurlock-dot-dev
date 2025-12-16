<script setup lang="ts">
interface Project {
  slug: string
  title: string
  description: string
  image?: string
  tags: string[]
  featured?: boolean
}

const projects: Project[] = [
  {
    slug: 'evergreen',
    title: 'Evergreen',
    description: 'Enterprise platform powering all operations across 5 branches. Prototyped in 2 weeks, evolved over 4+ years into a comprehensive business system with CRM, Call Center, BI, and Client Portal.',
    image: '/images/evergreen_featured.png',
    tags: ['Nuxt', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Twilio', 'Prisma'],
    featured: true,
  },
  {
    slug: 'evergreen-crm',
    title: 'Evergreen CRM Module',
    description: 'Contact management, lead aggregation from external sources, SMS messaging, and automated workflows powering sales operations.',
    image: '/images/evergreen_crm.png',
    tags: ['Nuxt', 'Prisma', 'PostgreSQL', 'BullMQ'],
  },
  {
    slug: 'evergreen-bi',
    title: 'Business Intelligence Dashboard',
    description: 'Real-time analytics and reporting with customizable dashboards, KPI tracking, and data visualization across all business operations.',
    image: '/images/evergreen_bi.png',
    tags: ['WebSockets', 'Redis', 'PostgreSQL', 'Read Replicas'],
  },
  {
    slug: 'evergreen-call-center',
    title: 'Call Center Platform',
    description: 'Full Twilio-powered call center used by telemarketers daily. Features call recording, real-time monitoring, and performance tracking.',
    image: '/images/evergreen_call-center.png',
    tags: ['Twilio', 'WebSockets', 'Redis', 'BullMQ'],
  },
  {
    slug: 'evergreen-client-portal',
    title: 'Client Portal',
    description: 'Self-service portal for customers to track production jobs, view documents, service tickets, and communicate with their project team.',
    image: '/images/evergreen_portal.png',
    tags: ['Nuxt', 'File Uploads', 'Real-time Updates'],
  },
]

const featuredProject = computed(() => projects.find(p => p.featured))
const otherProjects = computed(() => projects.filter(p => !p.featured))
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
        :to="`/projects/${featuredProject.slug}`"
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
                src="/images/evergreen_featured.png"
                alt="Evergreen Dashboard showing branch scorecards and analytics"
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

    <!-- Other Projects Grid -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      <ProjectCard
        v-for="project in otherProjects"
        :key="project.slug"
        :project="project"
      />
    </div>

    <!-- View All Link -->
    <div class="mt-12 text-center">
      <M3Button
        as="NuxtLink"
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
