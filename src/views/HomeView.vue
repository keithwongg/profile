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
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    place-items: center;
    justify-content: center;
}
</style>