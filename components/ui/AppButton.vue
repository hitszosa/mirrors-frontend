<template>
  <button
    v-bind="$attrs"
    :type="type"
    class="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60"
    :class="buttonClass"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonColor = 'white' | 'blue' | 'gray'
type ButtonVariant = 'solid' | 'ghost'
type ButtonSize = 'sm' | 'md'

interface ButtonUi {
  rounded?: string
}

const props = withDefaults(defineProps<{
  color?: ButtonColor
  variant?: ButtonVariant
  block?: boolean
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  ui?: ButtonUi
}>(), {
  color: 'gray',
  variant: 'solid',
  block: false,
  size: 'md',
  type: 'button',
  ui: () => ({}),
})

const sizeClassMap: Record<ButtonSize, string> = {
  sm: 'min-h-8 px-3 text-sm',
  md: 'min-h-10 px-4 text-base',
}

const toneClassMap: Record<ButtonColor, Record<ButtonVariant, string>> = {
  white: {
    solid: 'bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 hocus:bg-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:ring-slate-700 dark:hocus:bg-slate-800',
    ghost: 'bg-transparent text-slate-500 hocus:bg-slate-100 hocus:text-slate-700 dark:text-slate-300 dark:hocus:bg-slate-800 dark:hocus:text-slate-100',
  },
  blue: {
    solid: 'bg-blue-500 text-white shadow-sm hocus:bg-blue-400',
    ghost: 'bg-transparent text-blue-500 hocus:bg-blue-50 dark:hocus:bg-blue-500/10',
  },
  gray: {
    solid: 'bg-slate-100 text-slate-700 shadow-sm hocus:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hocus:bg-slate-700',
    ghost: 'bg-transparent text-slate-500 hocus:bg-slate-100 dark:text-slate-300 dark:hocus:bg-slate-800',
  },
}

const buttonClass = computed(() => {
  return [
    sizeClassMap[props.size],
    toneClassMap[props.color][props.variant],
    props.block ? 'flex w-full' : '',
    props.ui.rounded ?? '',
  ]
})
</script>
