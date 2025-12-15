---
title: "Vue Composition API Patterns I Use Daily"
description: "Practical patterns for organizing Vue 3 composition API code in large-scale applications."
date: "2024-02-20"
tags:
  - Vue.js
  - TypeScript
  - Patterns
readingTime: 6
---

After years of building with Vue 3's Composition API, I've settled on patterns that make code more readable, testable, and maintainable. Here are the ones I reach for daily.

## 1. Feature-Based Composables

Instead of organizing by technical concern (stores, utils, services), organize by feature:

```
composables/
├── leads/
│   ├── useLeadList.ts
│   ├── useLeadForm.ts
│   └── useLeadFilters.ts
├── dashboard/
│   ├── useDashboardMetrics.ts
│   └── useDashboardFilters.ts
```

Each composable handles one specific feature:

```typescript
// composables/leads/useLeadList.ts
export function useLeadList() {
  const leads = ref<Lead[]>([])
  const isLoading = ref(false)
  const error = ref<Error | null>(null)

  async function fetchLeads(filters: LeadFilters) {
    isLoading.value = true
    error.value = null
    
    try {
      leads.value = await api.leads.list(filters)
    } catch (e) {
      error.value = e as Error
    } finally {
      isLoading.value = false
    }
  }

  return {
    leads: readonly(leads),
    isLoading: readonly(isLoading),
    error: readonly(error),
    fetchLeads,
  }
}
```

## 2. The Options Pattern for Complex Composables

When composables need configuration, use an options object:

```typescript
interface UseSearchOptions<T> {
  searchFn: (query: string) => Promise<T[]>
  debounceMs?: number
  minLength?: number
  initialQuery?: string
}

export function useSearch<T>(options: UseSearchOptions<T>) {
  const {
    searchFn,
    debounceMs = 300,
    minLength = 2,
    initialQuery = '',
  } = options

  const query = ref(initialQuery)
  const results = ref<T[]>([])
  const isSearching = ref(false)

  const debouncedSearch = useDebounceFn(async (searchQuery: string) => {
    if (searchQuery.length < minLength) {
      results.value = []
      return
    }

    isSearching.value = true
    try {
      results.value = await searchFn(searchQuery)
    } finally {
      isSearching.value = false
    }
  }, debounceMs)

  watch(query, debouncedSearch)

  return { query, results, isSearching }
}
```

Usage:

```typescript
const { query, results, isSearching } = useSearch({
  searchFn: (q) => api.customers.search(q),
  debounceMs: 500,
  minLength: 3,
})
```

## 3. Provide/Inject for Dependency Injection

For shared state across component trees, provide/inject beats prop drilling:

```typescript
// composables/useLeadContext.ts
const LeadContextKey: InjectionKey<LeadContext> = Symbol('LeadContext')

export function provideLeadContext(lead: Ref<Lead>) {
  const context = {
    lead: readonly(lead),
    updateLead: async (updates: Partial<Lead>) => {
      // Update logic
    },
  }
  
  provide(LeadContextKey, context)
  return context
}

export function useLeadContext() {
  const context = inject(LeadContextKey)
  if (!context) {
    throw new Error('useLeadContext must be used within a lead provider')
  }
  return context
}
```

Parent component provides:

```vue
<script setup>
const lead = ref(await fetchLead(props.id))
provideLeadContext(lead)
</script>
```

Any descendant can consume:

```vue
<script setup>
const { lead, updateLead } = useLeadContext()
</script>
```

## 4. Computed Getters for Derived State

Keep derived state in computed properties, not manual watchers:

```typescript
// ❌ Manual synchronization
const fullName = ref('')
watch([firstName, lastName], ([first, last]) => {
  fullName.value = `${first} ${last}`
})

// ✅ Computed - always in sync, lazy evaluation
const fullName = computed(() => `${firstName.value} ${lastName.value}`)
```

For expensive computations, use `computedEager` or memo patterns:

```typescript
const expensiveResult = computedEager(() => {
  return heavyCalculation(data.value)
})
```

## 5. Cleanup Pattern for Side Effects

Always clean up side effects when components unmount:

```typescript
export function useWebSocket(url: string) {
  const socket = ref<WebSocket | null>(null)
  const messages = ref<Message[]>([])

  function connect() {
    socket.value = new WebSocket(url)
    socket.value.onmessage = (event) => {
      messages.value.push(JSON.parse(event.data))
    }
  }

  function disconnect() {
    socket.value?.close()
    socket.value = null
  }

  // Auto-cleanup on unmount
  onMounted(connect)
  onUnmounted(disconnect)

  return { messages, disconnect }
}
```

## Putting It All Together

A well-organized Vue 3 component using these patterns:

```vue
<script setup lang="ts">
import { useLeadList } from '~/composables/leads/useLeadList'
import { useLeadFilters } from '~/composables/leads/useLeadFilters'

// Feature composables
const { leads, isLoading, fetchLeads } = useLeadList()
const { filters, updateFilter, resetFilters } = useLeadFilters()

// Derived state
const filteredLeads = computed(() => 
  leads.value.filter(lead => matchesFilters(lead, filters.value))
)

const leadCount = computed(() => filteredLeads.value.length)

// Effects
watch(filters, () => fetchLeads(filters.value), { deep: true })

// Lifecycle
onMounted(() => fetchLeads(filters.value))
</script>
```

These patterns have served me well across years of building Vue applications. They're not revolutionary, but consistency in applying them makes a huge difference in maintainability.

