<template>
  <BaseSectionHeading>
    <template #icon>
      <Icon name="icon-park-outline:dropbox" />
    </template>
    Index of Mirrors
  </BaseSectionHeading>
  <UTable
    :columns="columns"
    :rows="rows"
    :loading="loading"
    :ui="{
      td: { color: 'text-slate-800 dark:text-slate-200', size: 'text-base', padding: 'px-3 py-2.5' },
      th: { color: 'text-slate-800 dark:text-slate-200', size: 'text-base', padding: 'px-3 py-3' },
      tr: { base: 'transition hocus:bg-slate-50 dark:hocus:bg-slate-800/50' },
    }"
  >
    <template #name-data="{ row }">
      <a
        v-if="isShowHelp(row.name)"
        class="group flex gap-1 items-center cursor-pointer transition hocus:text-blue-400"
        :href="getHelpUrl(row.name)"
        target="_blank"
      >
        <span>
          {{ row.name }}
        </span>
        <span
          class="text-sm
          transition
          text-slate-400
          group-hover:text-blue-400 group-focus:text-blue-400
          dark:group-hover:text-blue-400  dark:group-focus:text-blue-400"
        >
          <Icon name="icon-park-outline:help" />
        </span>
      </a>
      <span v-else>
        {{ row.name }}
      </span>
    </template>
    <template #status-data="{ row }">
      <UBadge :color="getTagType(row.status)">
        {{ row.status }}
      </UBadge>
    </template>
    <template #files-data="{ row }">
      <NuxtLink
        v-if="row.files"
        :to="row.files"
        target="_blank"
        class="transition text-lg hocus:text-blue-400"
      >
        <Icon name="icon-park-outline:folder-open" />
      </NuxtLink>
    </template>
  </UTable>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMirrorListStore } from './MirrorListStore'
import { useHelpListStore } from './HelpListStore'

const { rows, loading } = storeToRefs(useMirrorListStore())
const { helpList } = storeToRefs(useHelpListStore())

const helpSet = computed(() => new Set(helpList.value))

const getTagType = (status: string) => {
  switch (status) {
  case 'success':
    return 'primary'
  case 'syncing':
    return 'blue'
  case 'failed':
    return 'red'
  }
}

const createColumns = () => {
  return [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'files',
      label: 'Files',
    },
    {
      key: 'lastUpdate',
      label: 'Last Update',
    },
    {
      key: 'status',
      label: 'Status',
    },
  ]
}
const columns = ref(createColumns())

const isShowHelp = (mirror: string) => {
  return helpSet.value.has(mirror)
}

const getHelpUrl = (mirror: string) => {
  return `https://mirrors-help.osa.moe/${mirror}`
}
</script>
