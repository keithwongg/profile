<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
</script>

<template>
  <div class="container">
    <h1>Projects</h1>

    <br />

    <h2>Active</h2>
    <br />
    <div class="project-container">
      <ProjectCard link="https://simplesplit.keithwjh.com" title="Simple Split"
        description="A browser only client side app to split bills with people. No data stored on servers."
        tech="Made with Vue.js" />
      <ProjectCard link="https://keithwongg.github.io/moonstone-island-potion-calculator/"
        title="Moonstone Island Potion Calculator" description="Calculator for custom potion concoctions."
        tech="Made with vanilla js" />
      <ProjectCard link="https://github.com/keithwongg/EnumsPdfGenerator-CSharp" title="Enums to HTML or PDF"
        description="Collate all enums within a folder into a single HTML or PDF. Useful to get an overview
          all of all possible enums in a given application." tech="Made with C#" />
    </div>

    <br />

    <h2>Deprecated</h2>
    <br />
    <div class="project-container">
      <ProjectCard link="https://github.com/keithwongg/sleep-calculator-bot" title="Sleep Calculator Telegram Bot"
        description="A telegram bot to calculate optimal sleep and wake up timings based on REM sleep cycles."
        tech="Made with Python" />
      <ProjectCard link="https://github.com/keithwongg/supamu_bot" title="Supamu Telegram Bot"
        description="A telegram bot to spam messages to friends as a way to wake them up." tech="Made with Python" />
    </div>
  </div>
</template>

<style scoped>
.project-container {
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 8px;
}
</style>