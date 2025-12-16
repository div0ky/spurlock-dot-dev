<script setup lang="ts">
const titles = [
  'Head of Technology',
  'Vue Certified Developer',
  'Full-Stack Developer',
  'System Architect',
]

const currentTitleIndex = ref(0)

onMounted(() => {
  setInterval(() => {
    currentTitleIndex.value = (currentTitleIndex.value + 1) % titles.length
  }, 3000)
})
</script>

<template>
  <section class="relative min-h-[90vh] overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0 bg-mesh" />
    <div class="absolute inset-0 bg-grid opacity-50" />

    <!-- Decorative Elements -->
    <div class="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-mint-500/10 blur-3xl" />
    <div class="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-mint-500/5 blur-3xl" />

    <div class="relative mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 lg:min-h-[90vh] lg:flex-row lg:gap-16 lg:py-0">
      <!-- Text Content -->
      <div class="flex-1 text-center lg:text-left">
        <div class="mb-4 inline-flex items-center gap-2 rounded-full bg-mint-500/10 px-4 py-2 text-label-lg text-mint-400 animate-fade-in">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
            <span class="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
          </span>
          Available for opportunities
        </div>

        <h1 class="mb-6 text-display-md text-white animate-fade-in-up lg:text-display-lg stagger-1">
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
              class="text-headline-md text-slate-400 lg:text-headline-lg"
            >
              {{ titles[currentTitleIndex] }}
            </p>
          </Transition>
        </div>

        <p class="mx-auto mb-10 max-w-xl text-body-lg text-slate-400 animate-fade-in-up lg:mx-0 stagger-3">
          20+ years in IT and development. Creator of <span class="font-semibold text-mint-400">Evergreen</span> —
          an enterprise platform powering all operations across 5 branches at Midtown Home Improvements.
        </p>

        <div class="flex flex-col items-center gap-4 animate-fade-in-up sm:flex-row lg:justify-start stagger-4">
          <NuxtLink
            to="/#projects"
            class="group flex items-center gap-2 rounded-full bg-mint-500 px-8 py-4 text-label-lg font-semibold text-slate-900 transition-all duration-300 hover:bg-mint-600 hover:shadow-glow-mint-lg"
          >
            View My Work
            <Icon
              name="lucide:arrow-right"
              class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            />
          </NuxtLink>

          <a
            href="mailto:aj@spurlock.dev"
            class="group flex items-center gap-2 rounded-full border border-slate-700 px-8 py-4 text-label-lg font-semibold text-white transition-all duration-300 hover:border-mint-500/50 hover:bg-mint-500/10"
          >
            <Icon
              name="lucide:mail"
              class="h-5 w-5"
            />
            Get in Touch
          </a>
        </div>

        <!-- Tech Stack -->
        <div class="mt-12 animate-fade-in-up stagger-5">
          <p class="mb-4 text-label-md uppercase tracking-wider text-slate-500">
            Tech I Work With
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <div
              v-for="tech in ['Vue', 'Nuxt', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker']"
              :key="tech"
              class="rounded-lg bg-surface-elevated px-3 py-1.5 text-body-sm text-slate-400 transition-colors hover:bg-surface-overlay hover:text-mint-400"
            >
              {{ tech }}
            </div>
          </div>
        </div>
      </div>

      <!-- Photo -->
      <div class="mt-12 flex-shrink-0 lg:mt-0">
        <div class="relative animate-scale-in">
          <!-- Glow Effect -->
          <div class="absolute -inset-4 rounded-full bg-gradient-to-br from-mint-500/20 to-transparent blur-2xl" />

          <!-- Photo Frame -->
          <div class="relative h-72 w-72 overflow-hidden rounded-3xl border-2 border-mint-500/20 bg-surface-elevated lg:h-96 lg:w-96">
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
          <div class="absolute -bottom-4 -left-4 rounded-2xl bg-surface-elevated p-4 shadow-lg">
            <div class="flex items-center gap-3">
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-mint-500/10">
                <Icon
                  name="lucide:briefcase"
                  class="h-6 w-6 text-mint-400"
                />
              </div>
              <div>
                <p class="text-label-md text-slate-400">Experience</p>
                <p class="text-title-md font-semibold text-white">20+ Years</p>
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

