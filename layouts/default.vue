<template>
  <div class="text-slate-800 dark:text-slate-200">
    <Navbar
      title-name="HITSZ OSA Mirrors"
      class="fixed top-0 left-0 right-0"
    >
      <template #logo>
        <img
          src="~/assets/images/logo.svg"
        >
      </template>
    </Navbar>
    <div class="flex flex-col justify-between pt-12 min-h-screen bg-inherit">
      <main class="flex justify-around p-12">
        <slot />
      </main>
      <Footer class="mt-6" />
    </div>
  </div>
</template>
