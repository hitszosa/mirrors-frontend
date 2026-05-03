<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4 py-8"
      @click="onBackdropClick"
    >
      <div
        ref="dialogRef"
        v-bind="$attrs"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        class="max-h-full w-full max-w-4xl overflow-hidden rounded-2xl focus:outline-none"
      >
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

defineOptions({
  inheritAttrs: false,
})

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const dialogRef = ref<HTMLDivElement | null>(null)
const previousActiveElement = ref<HTMLElement | null>(null)

const close = () => {
  emit('update:modelValue', false)
}

const onBackdropClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    close()
  }
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.modelValue) {
    close()
  }
}

watch(() => props.modelValue, (isOpen) => {
  if (typeof window === 'undefined') {
    return
  }

  if (isOpen) {
    previousActiveElement.value = document.activeElement instanceof HTMLElement ? document.activeElement : null
    window.addEventListener('keydown', onKeydown)
    nextTick(() => {
      dialogRef.value?.focus()
    })
    return
  }

  window.removeEventListener('keydown', onKeydown)
  if (previousActiveElement.value?.isConnected) {
    previousActiveElement.value.focus()
  }
  previousActiveElement.value = null
}, { immediate: true })

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('keydown', onKeydown)
  }
})
</script>
