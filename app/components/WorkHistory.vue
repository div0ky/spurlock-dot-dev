<script setup lang="ts">
interface Job {
  company: string
  description: string
  duration: string
  highlights: string[]
  isCurrent?: boolean
  period: string
  technologies: string[]
  title: string
}

const jobs: Job[] = [
  {
    company: 'Midtown Home Improvements',
    description: 'Founded and lead the Technology department. Prototyped Evergreen in two weeks, which has evolved into an enterprise-grade platform powering all 5 branches. Built the development team from scratch and oversee all technology operations.',
    duration: '4+ years',
    highlights: [
      'Invented and architected Evergreen — now powers the entire company across 5 branches',
      'Built full Call Center with Twilio integration for telemarketing operations',
      'Implemented BI dashboard, Client Portal, lead aggregation, and mobile app',
      'Tech stack: Nuxt, Nest.js, PostgreSQL, Redis, BullMQ, Prisma, Docker',
      'Lead development team, DevOps, IT helpdesk, and network infrastructure',
    ],
    isCurrent: true,
    period: '2020 - Present',
    technologies: ['Nuxt', 'Nest.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'Twilio', 'Prisma'],
    title: 'Head of Technology',
  },
  {
    company: 'MightStream',
    description: 'Founded a live-streaming startup during COVID that offered live-stream embedding for mobile apps and websites. Grew to 1,000 daily active users and achieved profitability before sunset.',
    duration: '1 year',
    highlights: [
      'Built product from concept to 1,000 daily active users',
      'Achieved profitability as a solo founder',
      'Full-stack development and infrastructure management',
    ],
    period: '2020 - 2021',
    technologies: ['Python', 'Django', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'WebRTC', 'WebSockets', 'Docker'],
    title: 'Founder & CEO',
  },
  {
    company: 'Restream',
    description: 'Technical support for the leading multistreaming platform. Helped customers configure and troubleshoot their streaming setups while building internal tools to improve team efficiency.',
    duration: '1 year',
    highlights: [
      'Supported customers with stream setup, configuration, and troubleshooting',
      'Developed JavaScript tools for support team automation',
      'Built internal tools to streamline operations',
      'Deep expertise in live streaming technology and APIs',
    ],
    period: '2019 - 2020',
    technologies: ['JavaScript', 'Node.js', 'APIs', 'Live Streaming', 'WebRTC'],
    title: 'Technical Support Engineer',
  },
  {
    company: 'Apple',
    description: 'Started in AppleCare support and advanced to special projects involving engineering work. Gained deep understanding of Apple ecosystem and enterprise-level support operations.',
    duration: '3 years',
    highlights: [
      'Selected for special engineering projects',
      'Advanced technical troubleshooting and diagnostics',
      'Enterprise-level customer support experience',
    ],
    period: '2016 - 2019',
    technologies: ['macOS', 'iOS', 'Diagnostics', 'Engineering Tools'],
    title: 'AppleCare Advisor & Special Projects',
  },
]
</script>

<template>
  <M3Section
    id="experience"
    background="dim"
  >
    <template #background>
      <div class="absolute inset-0 bg-grid opacity-30" />
    </template>

    <M3SectionHeader
      label="Career Journey"
      title="Work Experience"
      description="Two decades of experience from QBASIC and dial-up modems to building enterprise platforms that power entire companies."
    />

    <!-- Timeline -->
    <div class="relative">
      <!-- Timeline Line -->
      <div class="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-mint-500 via-mint-500/50 to-transparent md:left-1/2 md:block" />

      <!-- Jobs -->
      <div class="space-y-12">
        <div
          v-for="(job, index) in jobs"
          :key="job.company"
          class="relative"
        >
          <!-- Timeline Dot -->
          <div class="absolute left-0 top-8 hidden h-4 w-4 -translate-x-1/2 items-center justify-center md:left-1/2 md:flex">
            <div
              class="h-4 w-4 rounded-full border-2"
              :class="job.isCurrent ? 'border-mint-500 bg-mint-500' : 'border-mint-500/50 bg-white dark:bg-surface'"
            >
              <div
                v-if="job.isCurrent"
                class="absolute h-4 w-4 animate-ping rounded-full bg-mint-500/50"
              />
            </div>
          </div>

          <!-- Job Card -->
          <div
            class="md:w-[calc(50%-2rem)]"
            :class="index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'"
          >
            <M3Card
              hoverable
              class="p-6"
            >
              <!-- Header -->
              <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div class="min-w-0 flex-1">
                  <div class="flex flex-wrap items-center gap-2">
                    <h3 class="text-headline-sm text-slate-900 dark:text-white">
                      {{ job.title }}
                    </h3>
                    <M3Badge
                      v-if="job.isCurrent"
                      variant="primary"
                      size="sm"
                    >
                      Current
                    </M3Badge>
                  </div>
                  <p class="mt-1 text-title-md text-mint-600 dark:text-mint-400">
                    {{ job.company }}
                  </p>
                </div>
                <div class="flex-shrink-0 sm:text-right">
                  <p class="text-body-md text-slate-500 dark:text-slate-400">
                    {{ job.period }}
                  </p>
                  <p class="text-body-sm text-slate-400 dark:text-slate-500">
                    {{ job.duration }}
                  </p>
                </div>
              </div>

              <!-- Description -->
              <p class="mb-4 text-body-md text-slate-600 dark:text-slate-400">
                {{ job.description }}
              </p>

              <!-- Highlights -->
              <ul class="mb-4 space-y-2">
                <li
                  v-for="highlight in job.highlights"
                  :key="highlight"
                  class="flex items-start gap-2 text-body-sm text-slate-600 dark:text-slate-400"
                >
                  <Icon
                    name="lucide:check"
                    class="mt-0.5 h-4 w-4 flex-shrink-0 text-mint-500"
                  />
                  {{ highlight }}
                </li>
              </ul>

              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <M3Badge
                  v-for="tech in job.technologies"
                  :key="tech"
                  variant="muted"
                  size="sm"
                >
                  {{ tech }}
                </M3Badge>
              </div>
            </M3Card>
          </div>
        </div>
      </div>
    </div>
  </M3Section>
</template>
