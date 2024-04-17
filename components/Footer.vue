<template>
  <footer
    class="flex items-center justify-between
    pt-6 pb-8 px-2 border-t-[1px] border-slate-200 dark:border-slate-600 text-slate-400
    flex-col space-y-4 text-xs md:flex-row md:space-x-12 md:space-y-0 md:whitespace-nowrap md:text-sm"
  >
    <span class="grow">
      本站由哈尔滨工业大学（深圳）开源技术协会运营
    </span>
    <div>
      <ul class="flex space-x-8">
        <li>
          <FooterLink link="https://github.com/hitszosa">
            GitHub
          </FooterLink>
        </li>
        <li>
          <FooterLink link="https://github.com/hitszosa/Mirrors/issues/new">
            建议与反馈
          </FooterLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
