<template>
  <ul class="flex flex-col h-min list-none bg-gray-100 dark:bg-gray-800 p-1 rounded-xl whitespace-nowrap">
    <li
      v-for="(item, idx) in $props.items"
      :key="item"
      @click="onSelect(item, idx)"
    >
      <button
        class="transition py-3 px-7 w-full rounded-xl"
        :class="getButtonStyle(idx)"
      >
        {{ item }}
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
    items: string[],
    index: number
}>()
const emit = defineEmits<{
    'update:index': [item: string, index: number]
}>()

const getButtonStyle = (idx: number) => {
  return idx === props.index ? 'bg-white dark:bg-gray-900 shadow-sm' : ''
}
const emitUpdate = () => {
  emit('update:index', props.items[0], 0)
}

const onSelect = (item: string, index: number) => {
  emit('update:index', item, index)
}

emitUpdate()
</script>
