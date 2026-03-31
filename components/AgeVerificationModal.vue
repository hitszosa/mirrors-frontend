<template>
  <UModal v-model="isOpen">
    <UCard
      :ui="{
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex flex-row justify-between items-center">
          <div class="flex items-center space-x-2 text-lg font-semibold text-slate-800 dark:text-slate-200">
            <Icon name="icon-park-outline:caution" />
            <span>年龄验证 / Age Verification</span>
          </div>
          <UButton
            :ui="{ rounded: 'rounded-full' }"
            color="white"
            variant="ghost"
            size="sm"
            @click="onCancel"
          >
            <Icon name="icon-park-outline:close" />
          </UButton>
        </div>
      </template>

      <div class="space-y-4 text-slate-700 dark:text-slate-300">
        <p class="text-sm leading-relaxed">
          根据加利福尼亚州
          <a
            href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043"
            target="_blank"
            class="text-blue-500 underline hover:text-blue-600"
          >AB-1043 Age verification signals: software applications and online services</a>
          法案，本站作为在线服务需要进行年龄验证。
        </p>
        <p class="text-sm leading-relaxed">
          暗黑模式包含较深的颜色主题，可能不适合未成年用户。请确认您已年满 18 周岁以继续切换到暗黑模式。
        </p>
        <p class="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          Pursuant to California
          <a
            href="https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202520260AB1043"
            target="_blank"
            class="text-blue-500 underline hover:text-blue-600"
          >AB-1043</a>,
          this online service is required to perform age verification.
          Dark mode contains darker color themes that may not be suitable for minors.
          Please confirm that you are at least 18 years old to switch to dark mode.
        </p>
      </div>

      <template #footer>
        <div class="flex justify-end space-x-3">
          <UButton
            color="gray"
            variant="ghost"
            @click="onCancel"
          >
            我未满 18 周岁 / I'm under 18
          </UButton>
          <UButton
            color="primary"
            @click="onConfirm"
          >
            我已年满 18 周岁 / I'm 18 or older
          </UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<script setup lang="ts">
const isOpen = defineModel<boolean>({ default: false })

const emit = defineEmits<{
  confirm: []
  cancel: []
}>()

const onConfirm = () => {
  isOpen.value = false
  emit('confirm')
}

const onCancel = () => {
  isOpen.value = false
  emit('cancel')
}
</script>
