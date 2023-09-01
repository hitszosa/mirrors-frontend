<template>
    <div class="flex flex-row space-x-12 w-full max-w-screen-xl">
        <section class="flex flex-col space-y-4 grow">
            <BaseSectionHeading>
                <template v-slot:icon>
                    <Icon name="icon-park-outline:dropbox"></Icon>
                </template>
                Index of Mirrors
            </BaseSectionHeading>
            <IndexMirrorList />
        </section>
        <section class="flex flex-col p-7 space-y-10 w-[28em] h-min bg-slate-50 rounded-xl">
            <IndexDownloadWidget />
            <IndexNewsWidget />
        </section>
    </div>
</template>
