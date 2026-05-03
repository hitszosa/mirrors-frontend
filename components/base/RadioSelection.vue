<template>
  <ul
    role="radiogroup"
    aria-orientation="vertical"
    class="flex flex-col h-full overflow-y-auto list-none bg-gray-100 dark:bg-gray-800 p-1 rounded-xl whitespace-nowrap"
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
        class="transition-colors p-3 w-full rounded-xl"
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
  return idx === props.index ? 'bg-white dark:bg-gray-900 shadow-sm' : ''
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
