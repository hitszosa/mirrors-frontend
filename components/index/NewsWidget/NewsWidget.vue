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
                <ul class="list-disc list-inside pl-2">
                    <li v-for="article in list" :key="article._path">
                        {{ article.title }}
                    </li>
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

<script setup lang="ts"></script>
