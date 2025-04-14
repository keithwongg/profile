<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import NavBar from './components/NavBar.vue';

const route = useRoute();
const isBase = computed(() => route.name === 'home')
</script>

<template>
  <main :class="{ centralize: isBase }">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <component :is="Component"></component>
      </template>
    </RouterView>
  </main>
  <NavBar v-if="$route.meta.showNav !== false" />
</template>

<style scoped>
main {
  height: 100%;
  width: 100%;
  padding-bottom: 60px;
  overflow-y: scroll;
}

.centralize {
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
}
</style>
