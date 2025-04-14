<script setup>
import { articles } from './articles'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const matchedComponent = computed(() => {
    return articles[route.params.name] || null
})
</script>

<template>
    <RouterLink to="/learnings">
        <span>
            < Back </span>
    </RouterLink>
    <component :is="matchedComponent" v-if="matchedComponent"></component>
    <span v-else>Component not found</span>
</template>

<style scoped></style>