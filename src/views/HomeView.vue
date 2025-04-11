<script setup>
import ProfileCard from '@/components/ProfileCard.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();
const isBase = computed(() => route.name === 'home')
</script>

<template>
    <div class="container">
        <ProfileCard v-if="isBase" />

        <div v-if="isBase" class="navbar">
            <RouterLink :to="{ name: 'work' }">
                <span>Work Experience</span>
            </RouterLink>
            <RouterLink :to="{ name: 'projects' }">
                <span>Projects</span>
            </RouterLink>
            <RouterLink :to="{ name: 'interests' }">
                <span>Interests</span>
            </RouterLink>
            <RouterLink :to="{ name: 'blog' }">
                <span>Blog</span>
            </RouterLink>
        </div>

    </div>

</template>

<style scoped>
.navbar {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    gap: 12px;
}

a {
    color: var(--default-txt)
}

a:hover {
    /* border: 1px var(--default-highlight) solid; */
    /* border-radius: 5px; */
    background-color: transparent;
    color: var(--default-highlight);
}
</style>