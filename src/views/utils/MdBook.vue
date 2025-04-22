<script setup>
</script>

<template>
    <h1>Documentation with mdBook</h1>
    <p>Documentation is always a challenge in development teams, especially when faced with uncertain requirements and
        changes in implementation. Even when an application stabilizes after go-live, documentation holds the least
        prioritization compared to bug fixes and other backlog items. Yet, it is an absolutely necessity. It is a form
        of asynchronous communication, helps get new developers up to speed, and provide assistance to existing ones.
    </p>
    <p>The high amount of resistance to get started and myriad tools selection like <a target="_blank"
            href="https://www.gitbook.com/">GitBook</a>, <a target="_blank"
            href="https://vuepress.vuejs.org/">VuePress</a>, and <a target="_blank"
            href="https://docusaurus.io/">Docusarus</a> could be off-putting. It takes some time to learn, and it
        is even more of a
        struggle to get it hosted and shared especially if you are a new developer not yet granted with autonomy. <a
            target="_blank" href="https://rust-lang.github.io/mdBook/index.html">mdBook</a>
        solves all of these problems. Well... I hope it does for you as it did for me.</p>
    <br />
    <p>From the official docs:</p>
    <blockquote>
        <p>"mdBook is a command line tool to create books with Markdown. It is ideal for creating product or API
            documentation, tutorials, course materials or anything that requires a clean, easily navigable and
            customizable presentation."</p>
    </blockquote>
    <br />
    <h2>Positives</h2>
    <ul>
        <li>easy to learn (less than 10 minutes)</li>
        <li>lightweight (no npm packages)</li>
        <li>raw html files</li>
        <li>easy hosting</li>
        <li>customizable stylings with css</li>
        <li>other features: search, export as pdf, different themes</li>
    </ul>
    <p>All you need is a folder with markdown files, a <code>Summary.md</code> file to rearrange your contents in the
        sidebar and raw html + js files will be generated with <code>mdbook build</code>. Reading <a target="_blank"
            href="https://rust-lang.github.io/mdBook/guide/creating.html">this page of the official docs</a> takes a
        short time and it is enough to get started.</p>
    <p>Raw html and js files means that there are no other npm dependencies, resulting in a light weight package. It
        also means that you can even 'host' them on OneDrive - an extremely effective solution to distribute
        documentation without possessing access requirements to host. Just open <code>index.html</code> and bookmark it
        in the browser for easy access.</p>
    <p><a target="_blank"
            href="https://rust-lang.github.io/mdBook/format/configuration/general.html?highlight=css#general-configuration">CSS
            can also be customized</a> with <code>additional-css</code> under <code>[output.html]</code> in the
        <code>book.toml</code> configuration.
    </p>
    <p>Search through all docs by pressing the keyboard shortcut <code>S</code>.</p>
    <h2>Negatives</h2>
    <ul>
        <li>requires installation of <code>rust</code></li>
        <li>UI is not as pretty as other documentation options</li>
    </ul>
    <p>If your organization does not allow you to install rust, then mdBook might not be viable.</p>
    <p>mdBook focuses on simplicity and functionality, so the UI might not be as crazy as other tooling. To me, that is
        more of an advantage rather than a disadvantage, but nonetheless, is a point for consideration. </p>
</template>

<style scoped></style>