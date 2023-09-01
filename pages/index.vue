<template>
    <div class="flex flex-row space-x-12 w-full max-w-screen-xl">
        <section class="flex flex-col space-y-4 grow">
            <IndexMirrorList />
        </section>
        <section class="flex flex-col p-7 space-y-10 w-[28em] h-min bg-slate-50 rounded-xl">
            <IndexDownloadWidget />
            <IndexNewsWidget />
        </section>
    </div>
</template>
