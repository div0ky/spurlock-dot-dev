---
title: "Explicit is the New Clever: A Manifesto for the Perpetually Exhausted"
description: "Why verbose, self-documenting code beats cleverness—and makes AI actually understand your intent."
date: "2026-01-08"
tags:
  - Architecture
  - Code
readingTime: 10
---

Let's cut the crap. We've all been there - it's 2 AM, you're mainlining cold brew, and you write a one-liner that makes you feel like the Leonardo da Vinci of JavaScript. It's a beautiful, elegant, *clever* piece of code that chains six array methods, uses a bitwise operator "because it's faster," and fits in a single 120-character line.

Three months later, you stumble across that same line while debugging a production incident. You stare at it like it's ancient Sanskrit written by a drunkard. *What does this do? Why does it exist? Who hurt me?*

This, friends, is the cleverness tax. And it's time we stop paying it.

## The Siren Song of Clever Code

Clever code is ego-driven code. It's you flexing on your future self-and trust me, future you is tired, has forgotten everything, and just wants to go home. Clever code is:
- **Dense**: One line doing twelve things
- **Context-dependent**: Requires understanding three other files to grok
- **Brittle**: Breaks in ways that make no sense
- **AI-hostile**: Even Claude struggles to untangle your `reduce` chain

Here's a real example I found in our codebase last week (names changed to protect the guilty):

```ts
// The "clever" way
const stats = users.reduce((a, u) => ((a[u.dept] = (a[u.dept] || 0) + u.hours), a), {} as Record<string, number>);
```

Sure, it works. It's also a war crime. Let's count the sins:
- Side effects in a `reduce` (unforgivable)
- Comma operator (are we writing C now?)
- Type assertion because TypeScript rightly hates this
- Zero colocation of interface definitions

## The Explicit Gospel: Repeat Yourself, Just a Little

Here's the thing they don't teach you in Clean Code workshops: **sometimes repeating yourself is fine**. Not DRY heresy - *strategic* repetition. The kind that makes your code read like a damn children's book.

### Principle #1: Colocate Your Types Like They Owe You Money

Stop putting all your interfaces in a `types.ts` file three directories away. It's 2024. We have tree-shaking. Put that interface where it's *used*.

```ts
// ❌ The "organized" way (read: annoying)
// ~/types/user.ts
export interface UserStats {
  department: string;
  totalHours: number;
}

// ~/utils/analytics.ts
import { UserStats } from '~/types/user'

// ✅ The explicit way
// ~/utils/analytics.ts
interface DepartmentHourStats {
  department: string;
  totalHours: number;
}

function calculateDepartmentHours(users: User[]): Record<string, DepartmentHourStats> {
  // ...
}
```

"But now I have duplicate interfaces!" Yeah, and? If two modules need the *exact same shape* but have different semantic meaning, they should *have different interfaces*. If they truly share meaning, *extract it when it hurts, not before*.

### Principle #2: Variables Are Free, Confusion is Expensive

Every time you inline a complex expression, a junior developer somewhere cries. Variables are zero-cost abstractions. Use them like you're trying to win a verbosity contest.

```ts
// ❌ Clever and compact
const active = users.filter(u => u.status === 'active' && u.lastLogin > Date.now() - 86400000);

// ✅ Explicit and readable
const ONE_DAY_IN_MS = 86_400_000;
const yesterday = Date.now() - ONE_DAY_IN_MS;
const isRecentlyActive = (user: User) => user.status === 'active' && user.lastLogin > yesterday;

const recentlyActiveUsers = users.filter(isRecentlyActive);
```

"But that's three lines instead of one!" And? Your minifier will handle it. Your brain won't. The AI reading this will understand it instantly. The junior dev onboarding next week won't need to ask what `86400000` is.

### Principle #3: Name Things for What They *Mean*, Not What They *Do*

This is the big one. That variable you create *just* to give a name to a value? That's not waste - that's *documentation that compiles*.

```ts
// ❌ The inline special
if (user.role.includes('admin') && user.permissions.includes('write') && !user.isSuspended) {
  // ...
}

// ✅ The self-documenting way
const hasAdminRole = user.role.includes('admin');
const hasWritePermission = user.permissions.includes('write');
const isAccountActive = !user.isSuspended;

const canEditContent = hasAdminRole && hasWritePermission && isAccountActive;

if (canEditContent) {
  // ...
}
```

Yes, it's more lines. Yes, it feels "wrong" at first-like you're being paid by the keystroke. But that `canEditContent` variable? That's a **domain concept**. It's now testable, debuggable, and shows up in your AI's context window with a clear name.

## The AI Angle: Explicit Code is Prompt Engineering for Machines

Here's a spicy take: **AI pair programming has made clever code even more dangerous**. When you write dense, clever nonsense, you're not just confusing future humans-you're confusing your AI assistant.

Modern AI tools (yes, even the fancy ones) parse code the same way humans do: by building a mental model. When you write:

```ts
const result = data.flatMap(x => x.items).reduce((a, b) => a + b.price, 0);
```

The AI has to reverse-engineer your intent. But when you write:

```ts
const allItems = data.flatMap(invoice => invoice.items);
const totalPrice = allItems.reduce((sum, item) => sum + item.price, 0);
```

The AI instantly understands:
- `allItems` is a flat array of items
- `totalPrice` is a sum of prices
- It can suggest better variable names
- It can spot type mismatches
- It can write tests that actually make sense

Explicit code is **prompt engineering for your AI**. You're giving it the context it needs to be useful instead of just generating more clever garbage.

## The Psychological Hurdle: Why This Feels Like Losing

I get it. After 20+ years of "DRY" being beaten into your skull, writing "redundant" code feels like failure. It feels like you're not "smart enough" to abstract it.

But here's the truth: **Abstraction is a liability until proven otherwise**. Every abstraction adds indirection. Every indirection adds cognitive load. The best code is code that doesn't make you think.

That feeling of "this is too verbose"? That's your ego talking. Tell it to shut up and let your future self have a good night's sleep.

## A Real-World Nuxt 3 Example

Let's bring this home with something from our actual stack. Here's a pattern I see constantly:

```ts
// ❌ The "efficient" way
const { data: projects } = await useAsyncData('projects', () => 
  $fetch(`/api/projects?status=${route.query.status || 'active'}&branch=${userStore.currentBranch.id}`)
);
```

Looks fine, right? Now try debugging why projects aren't loading when the query param is wrong. You need to know:
- The API endpoint structure
- The default status logic
- Where `currentBranch` comes from

Now watch:

```ts
// ✅ The explicit way
const DEFAULT_PROJECT_STATUS = 'active';
const selectedStatus = route.query.status || DEFAULT_PROJECT_STATUS;
const currentBranchId = userStore.currentBranch.id;

const apiEndpoint = `/api/projects`;
const queryParams = new URLSearchParams({
  status: selectedStatus,
  branch: String(currentBranchId),
});

const { data: projects } = await useAsyncData('projects', () => 
  $fetch(`${apiEndpoint}?${queryParams}`)
);
```

More code? Absolutely. But now you can:
- Console.log any step
- Set breakpoints that make sense
- Understand the API contract at a glance
- Let your AI refactor individual pieces safely
- Hand this to a junior dev without explanation

## The Verdict: Be Kind to Your Future Self (and Your AI)

Clever code is a party trick. Explicit code is a professional courtesy.

Next time you're tempted to chain five methods into a single expression, remember: **you're not writing code for the compiler. You're writing it for a tired, distracted, possibly hungover version of yourself**-or an AI with a context window limit.

The compiler doesn't care about your variable names. The interpreter doesn't care about your extra lines. But the human (and the AI) reading it? They care a lot.

So be explicit. Be verbose. Be boring. Future you will thank you. Current you will spend less time in `git blame` wondering who the asshole was that wrote that garbage.

Spoiler: it was you. It was always you.

---

*Now go forth and write code that reads like a damn children's book. Your team, your AI, and your 2 AM debugging self will thank you.*