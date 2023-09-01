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
        <section class="flex flex-col space-y-10 w-[28em] bg-slate-50 rounded-xl p-7">
            <section class="space-y-4">
                <BaseSectionHeading>
                    <template v-slot:icon>
                        <Icon name="icon-park-outline:record-disc"></Icon>
                    </template>
                    Get LiveCD and Software
                </BaseSectionHeading>
                <p>
                    在此处下载本站镜像的 Linux 发行版 LiveCD 和开源软件。
                </p>
                <UButton color="white" variant="solid" block>
                    选择 LiveCD 和软件
                </UButton>
            </section>
            <section class="space-y-4">
                <BaseSectionHeading>
                    <template v-slot:icon>
                        <Icon name="icon-park-outline:newspaper-folding"></Icon>
                    </template>
                    Recent News
                </BaseSectionHeading>
                <p>
                    本站近期新闻。
                </p>
            </section>
        </section>
    </div>
</template>
