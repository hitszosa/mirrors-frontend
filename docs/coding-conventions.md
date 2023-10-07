# Coding conventions

## ESLint

**All rules** in ESLint config file applies.

## Function

```typescript
// ✅ Define functions in this way
const getName = () => {
  return 'Obama'
}

// 🚫 Bad example
function getName() {
  return 'Obama'
}
```

## Immutability

```typescript
// ✅ Use constants as much as possible
const name = ref('Obama')
const nums = [1, 2, 3]
const evenNums = nums.filter((n) => n % 2 === 0)

// 🚫 Bad example
var name = ref('Obama')
let nums = [1, 2, 3]
let evenNums = []
for (let n of nums) {
  if (n % 2 === 0) {
      evenNums.push(n)
  }
}
```

## Vue API

```typescript
// ✅ Always use Vue Composition API for TypeScript
defineProps<{
  name: string
}>()

// 🚫 Bad example
defineProps({
  name: String
})
```

## Tag Attributes

```html
// ✅ Break line when number of attributes is more than two
<a
  class="underline"
  href="/"
>
  Obama
</a>
<img class="m-2" />

// 🚫 Bad example
<a class="underline" href="/">
  Obama
</a>
<img
  class="m-2"
/>
```

## Tailwind CSS

Use Tailwind CSS as much as possible. Write all the styles in `class` attribute. **Avoid using the actual CSS.**

### Colors

```html
// ✅ Use built-in colors as much as possible
// And keep colors consistent among the website
// Also, do not use pure black or white
<span class="text-slate-800 dark:text-slate-200">
  Obama
</span>

// 🚫 Bad example
<span class="text-black dark:text-[#50d71e]">
  Obama
</span>
```

### Hover and Focus

```html
// ✅ Use hover and focus selectors with hocus
<NuxtLink
  :to="/"
  class="hocus:underline hover:cursor-pointer"
>
  Obama
</NuxtLink>

// 🚫 Bad example
<span class="hover:underline">
  Obama
</span>
<span class="focus:underline hover:underline">
  Obama
</span>
```

## Directory Structure

Keep directory structure consistent and clean.

## Consistency

Always learn the conventions from other code to keep consistent.

~~And always keep thinking of *state of the arts*.~~