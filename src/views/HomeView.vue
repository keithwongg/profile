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
        <div class="links-container">
            <!-- <RouterLink :to="{ name: 'work' }">
                <span>Work</span>
            </RouterLink> -->
            <RouterLink :to="{ name: 'projects' }">
                <span>Projects</span>
            </RouterLink>
            <RouterLink :to="{ name: 'utils' }">
                <span>Utilities</span>
            </RouterLink>
        </div>
    </div>

</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
}

.links-container {
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 12px;
}

a {
    color: var(--default-txt);
}

a:hover {
    color: var(--default-highlight);
}
</style>