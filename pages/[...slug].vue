<template>
  <article class="flex flex-col w-full max-w-screen-lg markdown-body">
    <ContentDoc>
      <template #not-found>
        <h2>404 Not Found</h2>
        <blockquote>
          <p>Roses are red,</p>
          <p>Violets are blue;</p>
          <p>The page you seek,</p>
          <p>Has bid us adieu.</p>
          <p>It's not in the cards,</p>
          <p>Not even a trace;</p>
          <p>Gone like a ghost,</p>
          <p>Without a digital grace.</p>
          <p>But worry not, friend,</p>
          <p>Keep searching with glee;</p>
          <p>For the web's full of wonders,</p>
          <p>There's still so much to see!</p>
        </blockquote>
        <p>
          This petite verse is graciously presented by ChatGPT.
        </p>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup lang="ts">
import 'github-markdown-css'
import '~/assets/css/markdown-extended.scss'
</script>
