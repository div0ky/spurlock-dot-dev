<script setup lang="ts">
const titles = [
  'Head of Technology',
  'Vue Certified',
  'Full-Stack Developer',
  'System Architect',
  'DevOps Engineer',
]

const currentTitleIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
  }, 2500)
})

const techStackArray = ['Vue', 'React', 'Nuxt', 'Django', 'Flask', 'Astro', 'MangoDB', 'TypeScript', 'Python', 'Node.js', 'Bun', 'Redis', 'BullMQ', 'Prisma', 'Tailwind CSS', 'WebSockets', 'Docker Swarm', 'Nitro.js', 'Nest.js', 'PostgreSQL', 'Docker']
const techStack = computed(() => [...techStackArray].sort((a, b) => a.localeCompare(b)))
</script>

<template>
  <section class="relative min-h-[90vh] overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-mesh" />
    <div class="absolute inset-0 bg-grid opacity-50 dark:opacity-50" />

    <!-- Decorative Elements -->
    <div class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-mint-500/10 blur-3xl" />
    <div class="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-mint-500/5 blur-3xl" />

    <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 lg:min-h-[90vh] lg:flex-row lg:gap-16 lg:py-0">
      <!-- Text Content -->
      <div class="flex-1 text-center lg:text-left">
        <M3Badge
          variant="primary"
          class="mb-4 animate-fade-in"
        >
          <span class="relative mr-2 flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-500 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
          </span>
          Available for opportunities
        </M3Badge>

        <h1 class="mb-6 text-display-md text-slate-900 animate-fade-in-up dark:text-white lg:text-display-lg stagger-1">
          Hi, I'm <span class="text-gradient">Spurlock</span>
        </h1>

        <div class="mb-8 h-12 animate-fade-in-up stagger-2">
          <Transition
            mode="out-in"
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-4"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4"
          >
            <p
              :key="currentTitleIndex"
              class="text-headline-md text-slate-500 dark:text-slate-400 lg:text-headline-lg"
            >
              {{ titles[currentTitleIndex] }}
            </p>
          </Transition>
        </div>

        <p class="mx-auto mb-10 max-w-xl text-body-lg text-slate-600 animate-fade-in-up dark:text-slate-400 lg:mx-0 stagger-3">
          20+ years in IT and development. Creator of <span class="font-semibold text-mint-600 dark:text-mint-400">Evergreen</span> —
          an enterprise platform powering all operations across 5 branches at Midtown Home Improvements.
        </p>

        <div class="flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row lg:justify-start stagger-4">
          <M3Button
            as="NuxtLink"
            to="/#projects"
            variant="primary"
            size="lg"
            icon="lucide:arrow-right"
          >
            View My Work
          </M3Button>

          <M3Button
            as="a"
            href="mailto:aj@spurlock.dev"
            variant="secondary"
            size="lg"
            icon="lucide:mail"
            icon-position="left"
          >
            Get in Touch
          </M3Button>
        </div>

        <!-- Tech Stack -->
        <div class="mt-12 animate-fade-in-up stagger-5">
          <p class="mb-4 text-label-md uppercase tracking-wider text-slate-500">
            Tech I Work With
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <M3Badge
              v-for="tech in techStack"
              :key="tech"
              variant="muted"
              size="sm"
              class="hover:text-mint-600 dark:hover:text-mint-400"
            >
              {{ tech }}
            </M3Badge>
          </div>
        </div>
      </div>

      <!-- Photo -->
      <div class="mt-12 flex-shrink-0 lg:mt-0">
        <div class="relative animate-scale-in">
          <!-- Glow Effect -->
          <div class="absolute -inset-4 rounded-full bg-gradient-to-br from-mint-500/20 to-transparent blur-2xl" />

          <!-- Photo Frame -->
          <div class="relative h-72 w-72 overflow-hidden rounded-3xl border-2 border-mint-500/20 bg-white shadow-lg dark:bg-surface-elevated dark:shadow-none lg:h-96 lg:w-96">
            <NuxtImg
              src="/images/headshot_v2.png"
              alt="Aaron J. Spurlock"
              width="384"
              height="384"
              class="h-full w-full object-cover object-top"
              loading="eager"
            />

            <!-- Decorative Corner -->
            <div class="absolute -bottom-2 -right-2 h-20 w-20 rounded-tl-3xl border-l-2 border-t-2 border-mint-500/30" />
          </div>

          <!-- Floating Badge -->
          <div class="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg dark:border-slate-800 dark:bg-surface-elevated dark:shadow-none">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/10">
                <Icon
                  name="lucide:briefcase"
                  class="h-6 w-6 text-mint-600 dark:text-mint-400"
                />
              </div>
              <div>
                <p class="text-label-md text-slate-500 dark:text-slate-400">Experience</p>
                <p class="text-title-md font-semibold text-slate-900 dark:text-white">20+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <Icon
        name="lucide:chevron-down"
        class="h-8 w-8 text-mint-500/50"
      />
    </div>
  </section>
</template>
