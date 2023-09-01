<template>
    <section class="space-y-4">
        <BaseSectionHeading>
            <template #icon>
                <Icon name="icon-park-outline:newspaper-folding"></Icon>
            </template>
            Recent News
        </BaseSectionHeading>
        <ContentList path="/news" v-slot="{ list }">
            <div>
                <ul class="list-none list-inside px-2">
                    <IndexNewsWidgetItem :list="list" />
                </ul>
            </div>
        </ContentList>
        <UButton
            color="white"
            variant="solid"
            block
            class="transition delay-50"
        >
            Read More
        </UButton>
    </section>
</template>
