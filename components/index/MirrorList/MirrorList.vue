<template>
  <section class="space-y-4">
    <h2 class="flex flex-nowrap space-x-1.5 text-2xl font-medium">
      <span class="inline-block translate-y-[3px]">
        <IconifyIcon icon="icon-park-outline:dropbox" />
      </span>
      <span
        class="transition-colors after:transition-all relative inline-block z-10
        after:block after:absolute after:bg-blue-100 dark:after:bg-slate-700 after:rounded-md
        after:w-4 after:h-1 after:-right-5 after:bottom-1 after:-z-10
        hocus:after:w-full hocus:after:h-2 hocus:after:right-0"
      >
        Index of Mirrors
      </span>
    </h2>
    <input
      :value="mirrorFilter"
      id="mirror-search-input"
      placeholder="Press '/' key to search for mirrors..."
      class="form-input w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-slate-800 shadow-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-blue-400 dark:focus:ring-blue-400/20"
      @input="onSearchInput"
    >
    <AppTable
      :columns="columns"
      :rows="filteredRows"
      :sort="{ column: 'name', direction: 'asc' }"
      :loading="loading"
    >
      <template #name-data="{ row }">
        <a
          v-if="isShowHelp(row.name)"
          class="group flex gap-1 items-center cursor-pointer transition-colors hocus:text-blue-400"
          :href="getHelpUrl(row.name)"
          target="_blank"
        >
          <span>
            {{ row.name }}
          </span>
          <IconifyIcon
            class="text-sm
            transition
            text-slate-400
            group-hover:text-blue-400 group-focus:text-blue-400
            dark:group-hover:text-blue-400 dark:group-focus:text-blue-400"
            icon="icon-park-outline:help"
          />
        </a>
        <span v-else>
          {{ row.name }}
        </span>
      </template>
      <template #status-data="{ row }">
        <span
          class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium capitalize"
          :class="getStatusBadgeClass(row.status)"
        >
          {{ row.status }}
        </span>
      </template>
      <template #files-data="{ row }">
        <a
          v-if="row.files"
          :href="row.files"
          target="_blank"
          class="transition-colors text-lg hocus:text-blue-400"
        >
          <IconifyIcon icon="icon-park-outline:folder-open" />
        </a>
      </template>
    </AppTable>
  </section>
</template>

<script setup lang="ts">
import { Icon as IconifyIcon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import AppTable from '~/components/ui/AppTable.vue'
import { useHelpListStore } from './HelpListStore'
import { useMirrorListStore } from './MirrorListStore'

const { rows, loading } = storeToRefs(useMirrorListStore())
const { helpList } = storeToRefs(useHelpListStore())

const helpSet = computed(() => new Set(helpList.value))

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case 'success':
      return 'bg-green-100 text-green-700 dark:bg-green-500/15 dark:text-green-300'
    case 'syncing':
      return 'bg-blue-100 text-blue-700 dark:bg-blue-500/15 dark:text-blue-300'
    case 'failed':
      return 'bg-red-100 text-red-700 dark:bg-red-500/15 dark:text-red-300'
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-200'
  }
}

const createColumns = () => {
  return [
    {
      key: 'name',
      label: 'Name',
      sortable: true,
    },
    {
      key: 'files',
      label: 'Files',
    },
    {
      key: 'lastUpdate',
      label: 'Last Update',
      sortable: true,
    },
    {
      key: 'status',
      label: 'Status',
      sortable: true,
    },
  ]
}
const columns = ref(createColumns())
const mirrorFilter = ref('')

const filteredRows = computed(() => {
  if (!mirrorFilter.value) {
    return rows.value
  }
  return rows.value.filter(row => isNameMatched(row.name, mirrorFilter.value))
})

const isShowHelp = (mirror: string) => {
  return helpSet.value.has(mirror)
}

const isNameMatched = (mirror: string, filter: string) => {
  return mirror.toLowerCase().includes(filter.toLowerCase())
}

const getHelpUrl = (mirror: string) => {
  return `https://mirrors-help.osa.moe/${mirror}`
}

const onSearchInput = (event: Event) => {
  mirrorFilter.value = (event.target as HTMLInputElement).value
}

const triggerSearchFocus = () => {
  document.getElementById('mirror-search-input')?.focus()
}

const isDialogOpen = () => {
  return document.querySelector('[role="dialog"][aria-modal="true"]') !== null
}

const isEditableElement = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false
  }

  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)
}

const onKeydown = (event: KeyboardEvent) => {
  if (event.key !== '/' || event.ctrlKey || event.metaKey || event.altKey) {
    return
  }

  if (isDialogOpen()) {
    return
  }

  if (isEditableElement(event.target)) {
    return
  }

  event.preventDefault()
  triggerSearchFocus()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>
