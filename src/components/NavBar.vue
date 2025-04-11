<script setup>
</script>

<template>
    <div class="navbar">
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
</template>

<style scoped>
.navbar {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    gap: 12px;
}
</style>