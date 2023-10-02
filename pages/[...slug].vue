<template>
  <article class="max-w-screen-lg markdown-body">
    <!-- TODO: Add dark:prose-invert -->
    <ContentDoc>
      <template #not-found>
        <h2>页面尚未实现，可以到下面的链接进行贡献</h2>
        <a href="https://github.com/hitszosa/mirrors-frontend">Mirror Repository</a> on Github
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
import 'github-markdown-css'
import '~/assets/css/markdown-extended.scss'
</script>
