<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socialLinks = [
  { icon: 'lucide:github', href: 'https://github.com/ajspurlock', label: 'GitHub' },
  { icon: 'lucide:linkedin', href: 'https://linkedin.com/in/ajspurlock', label: 'LinkedIn' },
  { icon: 'lucide:mail', href: 'mailto:aj@spurlock.dev', label: 'Email' },
]

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Blog', href: '/blog' },
]
</script>

<template>
  <footer class="border-t border-slate-800 bg-surface-dim">
    <div class="mx-auto max-w-6xl px-6 py-12">
      <div class="grid gap-8 md:grid-cols-3">
        <!-- Brand -->
        <div class="space-y-4">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2"
          >
            <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-500/10">
              <span class="text-xl font-bold text-mint-400">S</span>
            </div>
            <span class="text-title-lg font-semibold text-white">
              Spurlock<span class="text-mint-400">.dev</span>
            </span>
          </NuxtLink>
          <p class="max-w-xs text-body-sm text-slate-400">
            Vue Certified Developer, Head of Technology, and System Architect building enterprise-grade solutions.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="mb-4 text-label-lg font-semibold uppercase tracking-wider text-slate-400">
            Navigation
          </h3>
          <ul class="space-y-2">
            <li
              v-for="link in footerLinks"
              :key="link.href"
            >
              <NuxtLink
                :to="link.href"
                class="text-body-sm text-slate-400 transition-colors hover:text-mint-400"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="mb-4 text-label-lg font-semibold uppercase tracking-wider text-slate-400">
            Connect
          </h3>
          <div class="flex gap-3">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-elevated text-slate-400 transition-all duration-200 hover:bg-mint-500/10 hover:text-mint-400"
            >
              <Icon
                :name="social.icon"
                class="h-5 w-5"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
        <p class="text-body-sm text-slate-500">
          &copy; {{ currentYear }} Aaron J. Spurlock. All rights reserved.
        </p>
        <p class="flex items-center gap-1 text-body-sm text-slate-500">
          Built with
          <Icon
            name="lucide:heart"
            class="h-4 w-4 text-red-500"
          />
          using Nuxt 4 &amp; Tailwind
        </p>
      </div>
    </div>
  </footer>
</template>

