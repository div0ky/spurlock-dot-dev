<script setup lang="ts">
const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog', href: '/blog' },
]

const isMobileMenuOpen = ref(false)

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
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
            <span class="text-xl font-bold text-mint-400">S</span>
          </div>
          <span class="text-title-lg font-semibold text-white">
            Spurlock<span class="text-mint-400">.dev</span>
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden items-center gap-8 md:flex">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="relative text-body-md text-slate-300 transition-colors duration-200 hover:text-mint-400"
          >
            {{ link.label }}
            <span class="absolute -bottom-1 left-0 h-0.5 w-0 bg-mint-400 transition-all duration-300 hover:w-full" />
          </NuxtLink>

          <a
            href="mailto:aj@spurlock.dev"
            class="rounded-full bg-mint-500 px-5 py-2.5 text-label-lg font-medium text-slate-900 transition-all duration-300 hover:bg-mint-400 hover:shadow-glow-mint"
          >
            Contact
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-surface-elevated hover:text-mint-400 md:hidden"
          aria-label="Toggle menu"
          @click="toggleMobileMenu"
        >
          <Icon
            :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
            class="h-6 w-6"
          />
        </button>
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
          class="mt-4 flex flex-col gap-2 rounded-xl bg-surface-elevated p-4 md:hidden"
        >
          <NuxtLink
            v-for="link in navLinks"
            :key="link.href"
            :to="link.href"
            class="rounded-lg px-4 py-3 text-body-md text-slate-300 transition-colors hover:bg-surface-overlay hover:text-mint-400"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </NuxtLink>

          <a
            href="mailto:aj@spurlock.dev"
            class="mt-2 rounded-lg bg-mint-500 px-4 py-3 text-center text-label-lg font-medium text-slate-900 transition-colors hover:bg-mint-400"
            @click="closeMobileMenu"
          >
            Contact
          </a>
        </div>
      </Transition>
    </nav>
  </header>
</template>

