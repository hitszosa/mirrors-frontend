<template>
  <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
    <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
      <thead class="bg-slate-50 dark:bg-slate-800/80">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            class="px-4 py-3 text-left text-sm font-medium text-slate-600 dark:text-slate-200"
          >
            <button
              v-if="column.sortable"
              type="button"
              class="inline-flex items-center gap-1 transition-colors hocus:text-blue-500"
              @click="toggleSort(column.key)"
            >
              <span>{{ column.label }}</span>
              <span class="text-xs text-slate-400 dark:text-slate-500">{{ sortIndicator(column.key) }}</span>
            </button>
            <span v-else>{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
        <tr v-if="loading">
          <td
            :colspan="columns.length"
            class="px-4 py-6"
          >
            <div class="space-y-3">
              <div class="h-4 w-1/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
              <div class="h-4 w-full animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
              <div class="h-4 w-2/3 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />
            </div>
          </td>
        </tr>
        <tr v-else-if="sortedRows.length === 0">
          <td
            :colspan="columns.length"
            class="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400"
          >
            No results found.
          </td>
        </tr>
        <template v-else>
          <tr
            v-for="(row, rowIndex) in sortedRows"
            :key="getRowKey(row, rowIndex)"
            class="text-sm text-slate-700 dark:text-slate-200"
          >
            <td
              v-for="column in columns"
              :key="column.key"
              class="px-4 py-3 align-middle"
            >
              <slot
                v-if="hasSlot(column.key)"
                :name="`${column.key}-data`"
                :row="row"
              />
              <span v-else>{{ getCellText(row, column.key) }}</span>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots } from 'vue'

type SortDirection = 'asc' | 'desc'

interface TableColumn {
  key: string
  label: string
  sortable?: boolean
}

interface TableSort {
  column: string
  direction: SortDirection
}

const props = defineProps<{
  columns: TableColumn[]
  rows: Record<string, unknown>[]
  sort?: TableSort
  loading?: boolean
}>()

const slots = useSlots()
const activeSort = ref<TableSort | null>(props.sort ? { ...props.sort } : null)

const hasSlot = (key: string) => {
  return Boolean(slots[`${key}-data`])
}

const getCellValue = (row: Record<string, unknown>, key: string) => {
  return row[key]
}

const getCellText = (row: Record<string, unknown>, key: string) => {
  const value = getCellValue(row, key)
  return value == null ? '' : String(value)
}

const compareValues = (left: unknown, right: unknown) => {
  if (left == null && right == null) {
    return 0
  }
  if (left == null) {
    return -1
  }
  if (right == null) {
    return 1
  }
  if (typeof left === 'number' && typeof right === 'number') {
    return left - right
  }
  return String(left).localeCompare(String(right))
}

const sortedRows = computed(() => {
  const renderedRows = [...props.rows]
  if (!activeSort.value) {
    return renderedRows
  }

  const { column, direction } = activeSort.value
  return renderedRows.sort((left, right) => {
    const result = compareValues(getCellValue(left, column), getCellValue(right, column))
    return direction === 'asc' ? result : -result
  })
})

const toggleSort = (columnKey: string) => {
  if (activeSort.value?.column === columnKey) {
    activeSort.value = {
      column: columnKey,
      direction: activeSort.value.direction === 'asc' ? 'desc' : 'asc',
    }
    return
  }

  activeSort.value = {
    column: columnKey,
    direction: 'asc',
  }
}

const sortIndicator = (columnKey: string) => {
  if (activeSort.value?.column !== columnKey) {
    return ''
  }
  return activeSort.value.direction === 'asc' ? '▲' : '▼'
}

const getRowKey = (row: Record<string, unknown>, index: number) => {
  return String(row.name ?? row.id ?? index)
}
</script>
