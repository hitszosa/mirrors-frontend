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
        <section
            class="flex flex-col space-y-4 w-[32em] bg-slate-50 rounded-xl p-7"
        >
            <BaseSectionHeading>
                <template v-slot:icon>
                    <Icon name="icon-park-outline:record-disc"></Icon>
                </template>
                Get LiveCD
            </BaseSectionHeading>
        </section>
    </div>
</template>
