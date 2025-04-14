<script setup>
import faHouse from './icon/faHouse.vue';
</script>

<template>
    <div class="navbar-grid">
        <RouterLink :class="{ selected: $route.name === 'home' }" :to="{ name: 'home' }">
            <faHouse class="icon" />
        </RouterLink>
        <RouterLink :class="{ selected: $route.name === 'work' }" :to="{ name: 'work' }">
            <span>Work</span>
        </RouterLink>
        <RouterLink :class="{ selected: $route.name === 'projects' }" :to="{ name: 'projects' }">
            <span>Projects</span>
        </RouterLink>
        <RouterLink :class="{ selected: $route.name === 'interests' }" :to="{ name: 'interests' }">
            <span>Interests</span>
        </RouterLink>
        <!-- <RouterLink :to="{ name: 'blog' }">
                <span>Blog</span>
            </RouterLink> -->
    </div>
</template>

<style scoped>
.navbar-grid {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 32px;
    border-top: 1px var(--default-highlight) solid;
    background-color: var(--default-bg);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    place-items: center;
    justify-content: space-between;
}

.navbar {
    margin-top: 8px;
    display: flex;
    flex-direction: row;
    gap: 12px;
}

a {
    color: var(--default-txt);
    text-align: center;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    place-items: center;
}

.selected {
    color: var(--default-highlight);
    /* From https://css.glass */
    background: rgba(204, 153, 0, 0.31);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
}

a:hover {
    color: var(--default-highlight);
    /* From https://css.glass */
    background: rgba(204, 153, 0, 0.31);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
}

.icon {
    height: 12px;
    width: 12px;
}
</style>