export default defineAppConfig({
  ui: {
    primary: 'sky',
    table: {
      td: { color: 'text-slate-800 dark:text-slate-200', size: 'text-base', padding: 'px-3 py-2.5' },
      th: {
        color: 'text-slate-800 dark:text-slate-200 [&>*]:text-slate-800 [&>*]:dark:text-slate-200',
        font: '[&>*]:font-semibold',
        size: 'text-base [&>*]:text-base',
        padding: 'px-3 py-3'
      },
      tr: { base: 'transition-colors hocus:bg-slate-50 dark:hocus:bg-slate-800/50' },
      default: {
        sortAscIcon: 'i-icon-park-outline-sort-amount-up',
        sortDescIcon: 'i-icon-park-outline-sort-amount-down',
        sortButton: {
          icon: 'i-icon-park-outline-sort-three',
        },
        loadingState: {
          icon: 'i-icon-park-outline-loading-one',
        },
        emptyState: {
          icon: 'i-icon-park-outline-inbox',
        }
      }
    },
    modal: {
      base: 'relative text-left rtl:text-right w-full flex flex-col',
      width: 'sm:max-w-2xl',
      height: 'h-[calc(100vh-4em)]',
    }
  }
})
