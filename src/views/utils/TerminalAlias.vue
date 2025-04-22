<script setup>
</script>

<template>
    <h1>Terminal Alias</h1>
    <p>We can set shortcuts like this in the terminal (e.g here is using .bashrc), which can be useful for quickly
        navigating between projects:</p>
    <pre><code>alias downloads='cd ~/../../mnt/c/Users/User/Downloads/'
</code></pre>
    <p>Run <code>downloads</code> in the terminal to change directory to the destinated folder.</p>
    <p><code>/mnt/c/</code> is the path to the mounted C drive on Windows. You can access this drive from within WSL2.
    </p>
</template>

<style scoped></style>