<script setup lang="ts">
interface Screenshot {
  src: string
  alt: string
  caption?: string
}

const props = defineProps<{
  screenshots: Screenshot[]
  title?: string
}>()

const selectedIndex = ref<number | null>(null)

const selectedScreenshot = computed(() => {
  if (selectedIndex.value === null) return null
  return props.screenshots[selectedIndex.value]
})

function openLightbox(index: number) {
  selectedIndex.value = index
  document.body.style.overflow = 'hidden'
}

function closeLightbox() {
  selectedIndex.value = null
  document.body.style.overflow = ''
}

function nextImage() {
  if (selectedIndex.value === null) return
  selectedIndex.value = (selectedIndex.value + 1) % props.screenshots.length
}

function prevImage() {
  if (selectedIndex.value === null) return
  selectedIndex.value = (selectedIndex.value - 1 + props.screenshots.length) % props.screenshots.length
}

function handleKeydown(e: KeyboardEvent) {
  if (selectedIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') prevImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div>
    <!-- Gallery Header -->
    <div
      v-if="title"
      class="mb-6"
    >
      <h3 class="text-headline-sm text-slate-900 dark:text-white">
        {{ title }}
      </h3>
    </div>

    <!-- Gallery Grid -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <button
        v-for="(screenshot, index) in screenshots"
        :key="screenshot.src"
        class="group relative aspect-video overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-mint-500/30 hover:shadow-lg dark:border-slate-800 dark:bg-surface-elevated"
        @click="openLightbox(index)"
      >
        <img
          :src="screenshot.src"
          :alt="screenshot.alt"
          class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        >

        <!-- Hover Overlay -->
        <div class="absolute inset-0 flex items-center justify-center bg-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-surface/60">
          <Icon
            name="lucide:maximize-2"
            class="h-8 w-8 text-slate-900 dark:text-white"
          />
        </div>

        <!-- Caption -->
        <div
          v-if="screenshot.caption"
          class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3 dark:from-surface"
        >
          <p class="text-body-sm text-white dark:text-slate-300">
            {{ screenshot.caption }}
          </p>
        </div>
      </button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="selectedIndex !== null"
          class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/95 backdrop-blur-sm dark:bg-surface-dim/95"
          @click.self="closeLightbox"
        >
          <!-- Close Button -->
          <M3IconButton
            icon="lucide:x"
            label="Close"
            variant="elevated"
            size="lg"
            class="absolute right-4 top-4"
            @click="closeLightbox"
          />

          <!-- Navigation -->
          <M3IconButton
            icon="lucide:chevron-left"
            label="Previous"
            variant="elevated"
            size="lg"
            class="absolute left-4"
            @click="prevImage"
          />

          <M3IconButton
            icon="lucide:chevron-right"
            label="Next"
            variant="elevated"
            size="lg"
            class="absolute right-4"
            @click="nextImage"
          />

          <!-- Image -->
          <div
            v-if="selectedScreenshot"
            class="max-h-[85vh] max-w-[90vw]"
          >
            <img
              :src="selectedScreenshot.src"
              :alt="selectedScreenshot.alt"
              class="max-h-[85vh] max-w-full rounded-lg object-contain"
            >

            <!-- Caption -->
            <p
              v-if="selectedScreenshot.caption"
              class="mt-4 text-center text-body-md text-slate-300"
            >
              {{ selectedScreenshot.caption }}
            </p>
          </div>

          <!-- Counter -->
          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-4 py-2 text-body-sm text-slate-600 shadow-lg dark:bg-surface-elevated dark:text-slate-400 dark:shadow-none">
            {{ selectedIndex + 1 }} / {{ screenshots.length }}
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
