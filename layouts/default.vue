<template>
    <div class="h-screen text-slate-800">
        <Navbar title-name="HITSZ OSA Mirrors" class="fixed top-0 left-0 right-0">
            <template #logo>
                <Icon size="3em" name="uil:github" />
            </template>
        </Navbar>
        <div class="flex flex-col justify-between pt-16 min-h-screen">
            <main class="flex justify-center p-12">
                <slot />
            </main>
            <Footer class="mt-6"></Footer>
        </div>
    </div>
</template>