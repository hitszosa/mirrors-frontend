<template>
  <div class="flex flex-col text-slate-800 dark:text-slate-200 w-screen">
    <Navbar
      title-name="HITSZ OSA Mirrors"
      class="fixed top-0 left-0"
    >
      <template #logo>
        <img
          src="~/assets/images/logo.svg"
        >
      </template>
    </Navbar>
    <div
      class="flex flex-col justify-between px-12 min-h-screen min-w-fit bg-inherit
      pt-24 md:pt-12"
    >
      <main class="flex justify-around px-auto py-12">
        <slot />
      </main>
      <Footer class="mt-6" />
    </div>
  </div>
</template>
