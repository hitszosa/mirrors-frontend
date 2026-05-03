<template>
  <section
    class="rounded-2xl bg-white shadow-xl ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-700"
    :class="ui.base"
  >
    <header
      v-if="$slots.header"
      class="p-6"
      :class="ui.divide"
    >
      <slot name="header" />
    </header>
    <div
      class="p-6"
      :class="$slots.header && ui.divide ? 'border-t border-slate-200 dark:border-slate-800' : ''"
    >
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface CardUi {
  base?: string
  divide?: string
}

withDefaults(defineProps<{
  ui?: CardUi
}>(), {
  ui: () => ({}),
})
</script>
