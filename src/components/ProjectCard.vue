<script setup>
const props = defineProps({
    link: String,
    title: String,
    description: String,
    tech: String
})
</script>

<template>
    <a :href="props.link" class="project-card parent" target="_blank">
        <span class="title div1">{{ props.title }}</span>
        <span class="description div2">{{ props.description }}</span>
        <span class="made-with div3">{{ props.tech }}</span>
    </a>
</template>

<style scoped>
.project-card {
    height: 260px;
    width: 220px;
    padding: 12px;
    color: var(--default-txt);
    border: 1px var(--default-txt) solid;
    border-radius: 5px;
}

.parent {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 8px;
}

.div1 {
    grid-area: 1 / 1 / 2 / 2;
    border-bottom: 1px var(--default-txt) solid;
    height: 60px;
}

.div2 {
    grid-area: 2 / 1 / 3 / 2;
}

.div3 {
    grid-area: 3 / 1 / 4 / 2;
}

.project-card:hover {
    border: 1px var(--default-highlight) solid;
    color: var(--default-highlight);
}

.title {
    font-size: 20px;
    font-weight: bold;
}

@media (max-width: 600px) {
    .project-card {
        width: 100%;
    }
}
</style>