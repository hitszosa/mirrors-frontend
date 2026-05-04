<template>
  <div class="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
    <table class="min-w-full divide-y divide-border">
      <thead class="bg-surface-muted/80">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            scope="col"
            :aria-sort="getAriaSort(column)"
            class="px-4 py-3 text-left text-sm font-medium text-muted"
          >
            <button
              v-if="column.sortable"
              type="button"
               class="inline-flex items-center gap-1 rounded-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hocus:text-brand"
               @click="toggleSort(column.key)"
             >
               <span>{{ column.label }}</span>
               <span class="text-xs text-muted">{{ sortIndicator(column.key) }}</span>
             </button>
            <span v-else>{{ column.label }}</span>
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-border">
        <tr v-if="loading">
          <td
            :colspan="columns.length"
            class="px-4 py-6"
          >
            <div class="space-y-3">
               <div class="h-4 w-1/3 animate-pulse rounded-full bg-surface-muted" />
               <div class="h-4 w-full animate-pulse rounded-full bg-surface-muted" />
               <div class="h-4 w-2/3 animate-pulse rounded-full bg-surface-muted" />
             </div>
           </td>
         </tr>
        <tr v-else-if="sortedRows.length === 0">
          <td
            :colspan="columns.length"
            class="px-4 py-6 text-center text-sm text-muted"
          >
            No results found.
          </td>
        </tr>
        <template v-else>
          <tr
            v-for="(row, rowIndex) in sortedRows"
            :key="getRowKey(row, rowIndex)"
            class="text-sm text-fg transition-colors hocus:bg-surface-muted/60"
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

const getAriaSort = (column: TableColumn) => {
  if (!column.sortable) {
    return undefined
  }

  if (activeSort.value?.column !== column.key) {
    return 'none'
  }

  return activeSort.value.direction === 'asc' ? 'ascending' : 'descending'
}

const getRowKey = (row: Record<string, unknown>, index: number) => {
  return String(row.name ?? row.id ?? index)
}
</script>
