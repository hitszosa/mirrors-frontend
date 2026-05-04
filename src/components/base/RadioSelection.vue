<template>
  <ul
    role="radiogroup"
    aria-orientation="vertical"
    class="flex flex-col h-full overflow-y-auto list-none rounded-xl border border-surface-border bg-page-bg p-1 whitespace-nowrap"
  >
    <li
      v-for="(item, idx) in $props.items"
      :key="item"
      role="presentation"
    >
      <button
        type="button"
        role="radio"
        :aria-checked="props.index === idx"
        :tabindex="props.index === idx ? 0 : -1"
        class="w-full rounded-xl p-3 text-left text-muted-fg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        :class="getButtonStyle(idx)"
        @click="onSelect(item, idx)"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  items: string[]
  index: number
}>()
const emit = defineEmits<{
  'update:index': [item: string, index: number]
}>()

const getButtonStyle = (idx: number) => {
  return idx === props.index
    ? 'bg-surface text-primary shadow-sm ring-1 ring-surface-border'
    : 'hocus:text-surface-fg cursor-pointer'
}

const emitUpdate = () => {
  if (props.items.length === 0) {
    return
  }

  emit('update:index', props.items[0], 0)
}

const onSelect = (item: string, index: number) => {
  emit('update:index', item, index)
}

onMounted(() => {
  emitUpdate()
})
</script>
