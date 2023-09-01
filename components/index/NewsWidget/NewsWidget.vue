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
                        <a
                            class="transition delay-50 after:duration-500 after:transition-all relative inline-block z-10 
                            after:block after:absolute after:rounded-md after:bg-blue-200 after:w-0 after:h-0 after:-right-0 after:bottom-1 after:-z-10 
                            hocus:after:w-full hocus:after:h-1 hocus:after:right-0 hover:cursor-pointer"
                        >
                            {{ article.title }}</a
                        >
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
