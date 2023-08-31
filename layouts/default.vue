<template>
    <div class="h-screen">
        <Navbar title-name="HITSZ OSA Mirrors" class="fixed top-0 left-0 right-0">
            <template v-slot:logo>
                <Icon size="3em" name="uil:github" />
            </template>
        </Navbar>
        <div class="pt-16">
            <main class="flex justify-center p-10">
                <slot />
            </main>
            <div class="py-4"></div>
            <Footer></Footer>
        </div>
    </div>
</template>