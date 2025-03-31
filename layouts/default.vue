<template>
  <div>
    <div class="h-full min-h-screen">
      <MiscAprilFools2025 />
    </div>
    <div class="flex flex-col text-slate-800 dark:text-slate-200 w-full">
      <Navbar
        title-name="HITSZ OSA Mirrors"
        class="top-0 left-0"
      >
        <template #logo>
          <img
            src="~/assets/images/logo.svg"
          >
        </template>
      </Navbar>
      <div
        class="flex flex-col justify-between min-h-screen bg-inherit
  pt-20 px-6 md:pt-12 md:px-12"
      >
        <main class="flex justify-around px-auto py-12">
          <slot />
        </main>
        <Footer class="mt-6" />
      </div>
    </div>
  </div>
</template>
