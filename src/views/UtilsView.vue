<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div class="container">
        <div v-if="$route.name === 'utils'" class="learnings-header">
            <h1>Utilities Snippets</h1>
            <p>Useful snippets to speed up development workflows, making the process more enjoyable</p>
            <br />
            <ul>
                <li>
                    <RouterLink :to="{ name: 'article', params: { name: 'prefixing-git-commits' } }">
                        <span>Prefixing Git Commits</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'article', params: { name: 'ps-shortcuts' } }">
                        <span>PowerShell Shortcuts</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'article', params: { name: 'terminal-alias' } }">
                        <span>Terminal Alias</span>
                    </RouterLink>
                </li>
                <li>
                    <RouterLink :to="{ name: 'article', params: { name: 'mdbook' } }">
                        <span>Easy Documentation with MdBook</span>
                    </RouterLink>
                </li>
            </ul>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<style scoped>
.learnings-header {}
</style>