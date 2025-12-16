// EFFECT: Manages theme state and persists to localStorage
// Default is dark mode (html has 'dark' class via nuxt.config.ts)
export function useTheme() {
  const isDark = ref(true)

  function initializeTheme() {
    if (import.meta.server) return

    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = stored === 'dark' || (stored === null && prefersDark)

    isDark.value = shouldBeDark
    // Sync state with what the blocking script already did
    // The blocking script handles the initial DOM state
  }

  function applyTheme(dark: boolean) {
    if (import.meta.server) return

    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  function setTheme(theme: 'light' | 'dark') {
    isDark.value = theme === 'dark'
    applyTheme(isDark.value)
    localStorage.setItem('theme', theme)
  }

  onMounted(() => {
    initializeTheme()
  })

  return {
    isDark: readonly(isDark),
    toggleTheme,
    setTheme,
  }
}

