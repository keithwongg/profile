<script setup>
import faCard from './icon/faCard.vue';
</script>

<template>
    <div class="navbar">
        <div class="parent">
            <RouterLink :to="{ name: 'home' }" class="div1">
                <faCard class="icon" />
            </RouterLink>
            <!-- <RouterLink :class="{ selected: $route.name === 'work' }" :to="{ name: 'work' }" class="div2">
                <span>Work</span>
            </RouterLink> -->
            <RouterLink :class="{ selected: $route.name === 'projects' }" :to="{ name: 'projects' }" class="div3">
                <span>Projects</span>
            </RouterLink>
            <!-- <RouterLink :class="{ selected: $route.name === 'interests' }" :to="{ name: 'interests' }" class="div4">
                <span>Interests</span>
            </RouterLink> -->
            <RouterLink :class="{ selected: $route.name === 'utils' }" :to="{ name: 'utils' }" class="div4">
                <span>Utils</span>
            </RouterLink>
        </div>
    </div>
</template>

<style scoped>
.navbar {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 40px;
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: center;
    background-color: var(--default-bg);
}

.parent {
    display: grid;
    grid-template-columns: 1fr repeat(3, 2fr);
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    place-items: center;
    justify-items: center;
    width: 340px;
}

.parent>a {
    color: var(--default-txt);
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
}

.div3 {
    grid-area: 1 / 3 / 2 / 4;
}

.div4 {
    grid-area: 1 / 4 / 2 / 5;
}

.icon {
    height: 14px;
    width: 14px;
}

.selected {
    color: var(--default-highlight) !important;
}

a:hover {
    color: var(--default-highlight);
}

@media (max-width: 600px) {
    .navbar {
        position: absolute;
        top: auto;
        bottom: 0px;
        left: 0px;
        height: 40px;
        width: 100%;
        display: flex;
        place-items: center;
        justify-content: center;
    }
}
</style>