<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
console.log(`paaramsnma: ${route.name}`)
</script>

<template>
  <div class="container">
    <div v-if="$route.name === 'learnings'" class="learnings-header">
      <h1>Learning Snippets</h1>
      <br />
      <ul>
        <li>
          <RouterLink :to="{ name: 'article', params: { name: 'prefixing-git-commits' } }">
            <span>Prefixing Git Commits</span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <RouterView></RouterView>
  </div>
</template>

<style scoped>
.learnings-header {}
</style>