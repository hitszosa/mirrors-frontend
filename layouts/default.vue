<template>
    <div class="text-slate-800 dark:text-slate-200">
        <Navbar title-name="HITSZ OSA Mirrors" class="fixed top-0 left-0 right-0">
            <template #logo>
                <img src="~/assets/images/logo.svg" class="w-11 h-11" />
            </template>
        </Navbar>
        <div class="flex flex-col justify-between pt-16 min-h-screen bg-inherit">
            <main class="flex justify-center p-12">
                <slot />
            </main>
            <Footer class="mt-6"></Footer>
        </div>
    </div>
</template>