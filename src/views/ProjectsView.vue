<script setup>
import ProjectCard from '@/components/ProjectCard.vue';

function openMediumLink() {
  window.open('https://medium.com/smubia/social-network-analysis-web-app-cfa43bd306cd');
}
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
      <!-- <ProjectCard link="https://keithwongg.github.io/moonstone-island-potion-calculator/"
        title="Moonstone Island Potion Calculator" description="Calculator for custom potion concoctions."
        tech="Made with vanilla js" /> -->
      <ProjectCard link="https://mdtohtml.keithwjh.com" title="Markdown to HTML" description="Created this project to test marked.js. Used this tool to write contents for the 'Utils' section of this site.
          " tech="Made with raw HTML, CSS, JS" />
      <ProjectCard link="https://github.com/keithwongg/EnumsPdfGenerator-CSharp" title="Enums to HTML or PDF"
        description="Convert all files with enums within a folder into a single HTML or PDF. Useful to get an overview
          all of all possible enums in a given application." tech="Made with C#" />
    </div>

    <br />

    <h2>Deprecated</h2>
    <br />
    <div class="project-container">
      <ProjectCard link="https://github.com/keithwongg/sleep-calculator-bot" title="Sleep Calculator Telegram Bot"
        description="A telegram bot to calculate optimal sleep and wake up timings based on REM sleep cycles."
        tech="Made with Python" />
      <a href="https://github.com/keithwongg/Social_Network_Analysis_Via_CSV_Upload" class="project-card parent"
        target="_blank">
        <span class="title div1">Network Analytics Visualization</span>
        <span class="div2">Worked with Orca Active to develop a network analytics visualizer based via CSV
          upload. Full Writeup <span class="out-link" @click="openMediumLink">here</span>.</span>
        <span class="div3">Made with Django (Python)</span>
      </a>
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


/* from project card component */
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

.out-link {
  color: var(--default-highlight);
  cursor: pointer;
  z-index: 3;
}

@media (max-width: 600px) {
  .project-card {
    width: 100%;
  }
}
</style>