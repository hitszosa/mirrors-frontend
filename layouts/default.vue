<template>
    <div>
        <Navbar title-name="HITSZ OSA Mirrors">
            <template v-slot:logo>
                <Icon size="3em" name="uil:github" />
            </template>
        </Navbar>
        <main class="flex justify-center p-10">
            <slot />
        </main>
        <div class="py-4"></div>
        <Footer></Footer>
    </div>
</template>