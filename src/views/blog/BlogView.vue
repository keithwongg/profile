<script setup>
</script>

<template>
  <div class="container">
    <h1>Topics</h1>
    <br />
    <div class="topic-card-container">
      <div class="topic-card">
        <span>FrontEnd</span>
      </div>
      <div class="topic-card">
        <span>FrontEnd</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.topic-card-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  width: 100%;
}

.topic-card {
  height: 100px;
  width: 100px;
  border: 1px var(--default-tag) solid;
  border-radius: 5px;
  cursor: pointer;
}

.topic-card:hover {
  border: 1px var(--default-highlight) solid;
  color: var(--default-highlight);
}
</style>