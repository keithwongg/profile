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
    <div class="back">
        <RouterLink to="/learnings">
            <span>
                < Back </span>
        </RouterLink>
    </div>
    <component :is="matchedComponent" v-if="matchedComponent"></component>
    <span v-else>Component not found</span>
</template>

<style scoped>
.back {
    margin-bottom: 24px;
}
</style>