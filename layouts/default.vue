<template>
  <div>
    <div class="h-full min-h-screen pt-[120px] lg:pt-14">
      <MiscAprilFools2025 />
    </div>
    <div class="flex flex-col text-slate-800 dark:text-slate-200 w-full">
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
        class="flex flex-col justify-between min-h-screen bg-inherit px-6 md:px-12"
      >
        <main class="flex justify-around px-auto py-12">
          <slot />
        </main>
        <Footer class="mt-6" />
      </div>
    </div>
  </div>
</template>
