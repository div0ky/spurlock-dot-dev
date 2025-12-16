<script setup lang="ts">
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#experience', label: 'Experience' },
  { href: '/blog', label: 'Blog' },
]

const isMobileMenuOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 glass">
    <nav class="mx-auto max-w-6xl px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="group flex items-center gap-2"
          @click="closeMobileMenu"
        >
          <div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/10 transition-all duration-300 group-hover:bg-mint-500/20 group-hover:shadow-glow-mint">
            <span class="text-xl font-bold text-mint-600 dark:text-mint-400">S</span>
          </div>
          <span class="text-title-lg font-semibold text-slate-900 dark:text-white">
            Spurlock<span class="text-mint-600 dark:text-mint-400">.dev</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-6 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="relative text-body-md text-slate-600 transition-colors duration-200 hover:text-mint-600 dark:text-slate-300 dark:hover:text-mint-400"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-mint-500 transition-all duration-300 hover:w-full" />
          </NuxtLink>

          <M3IconButton
            :icon="isDark ? 'lucide:sun' : 'lucide:moon'"
            label="Toggle theme"
            @click="toggleTheme"
          />

          <M3Button
            as="a"
            href="mailto:aj@spurlock.dev"
            variant="primary"
            size="sm"
          >
            Contact
          </M3Button>
        </div>

        <!-- Mobile Menu Button -->
        <M3IconButton
          :icon="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
          label="Toggle menu"
          size="lg"
          class="md:hidden"
          @click="toggleMobileMenu"
        />
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isMobileMenuOpen"
          class="mt-4 flex flex-col gap-2 rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-surface-elevated md:hidden"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="rounded-lg px-4 py-3 text-body-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-mint-600 dark:text-slate-300 dark:hover:bg-surface-overlay dark:hover:text-mint-400"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>

          <button
            class="flex h-12 w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-body-md text-slate-600 transition-colors hover:bg-slate-100 hover:text-mint-600 dark:text-slate-300 dark:hover:bg-surface-overlay dark:hover:text-mint-400"
            aria-label="Toggle theme"
            @click="toggleTheme"
          >
            <Icon
              :name="isDark ? 'lucide:sun' : 'lucide:moon'"
              class="h-5 w-5"
            />
            <span>{{ isDark ? 'Light Mode' : 'Dark Mode' }}</span>
          </button>

          <a
            href="mailto:aj@spurlock.dev"
            class="mt-2 rounded-lg bg-mint-500 px-4 py-3 text-center text-label-lg font-medium text-slate-900 transition-colors hover:bg-mint-600"
            @click="closeMobileMenu"
          >
            Contact
          </a>
        </div>
      </Transition>
    </nav>
  </header>
</template>
