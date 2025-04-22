<script setup>
</script>

<template>
    <h1>Useful Front-End Tools</h1>
    <h2>CSS Generators</h2>
    <p>Here are some one-page CSS generators/ tool that i find useful:</p>
    <ul>
        <li><a href="https://coolors.co/">Coolors</a></li>
        <li><a href="https://cssgrid-generator.netlify.app/">CSS Grid</a></li>
        <li><a href="https://css.glass/">CSS Glass</a></li>
        <li><a href="https://cssgradient.io/">CSS Gradient</a></li>
    </ul>
    <p>I find these to be helpful and sufficient for simple applications rather than including 3rd party dependencies.
    </p>
    <h2>Customized Scrollbar</h2>
    <p>Currently using this to get rid of Chrome's <a
            href="https://support.google.com/chrome/thread/269613337/why-is-the-chrome-scrollbar-still-so-ugly?hl=en">ugly
            default scrollbar</a>:</p>
    <pre><code>/* width */
::-webkit-scrollbar {
    background: var(--default-highlight);
    width: 8px;
    border-radius: 5px;
}

/* Track */
::-webkit-scrollbar-track {
    background: var(--default-bg);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #7a7a7a;
}
</code></pre>
    <h2>Icons</h2>
    <ul>
        <li><a href="https://fontawesome.com/search?o=r&amp;s=solid">FontAwesome</a></li>
        <li><a href="https://docs.fontawesome.com/web/use-with/vue">FontAwesome with Vue - Docs</a></li>
    </ul>
    <p>I started learning Vue.js recently and found FontAwesome to be very easy to use.</p>
    <h2>Drawings</h2>
    <ul>
        <li><a href="https://penpot.app/">Penpot</a></li>
        <li><a href="https://excalidraw.com/">Excalidraw</a></li>
        <li><a href="https://app.diagrams.net/">draw.io</a></li>
    </ul>
    <p>I use PenPot for wireframing or high fidelity mockups, which is an alternative to Figma. Excalidraw is a good and
        free alternative to Miro. Draw.io is useful for UML diagrams or sequence diagrams.</p>
    <p>PenPot and Excalidraw are open-sourced. Excalidraw and Draw.io purely exists on the front-end and no data is
        stored on servers unless a backup option is selected.</p>
    <h2>User Onboarding</h2>
    <ul>
        <li><a href="https://driverjs.com/">driver.js</a></li>
    </ul>
    <p>Found this to be the easiest to use.</p>
    <h2>Syntax Highlighting</h2>
    <ul>
        <li><a href="https://highlightjs.org/">highlight.js</a></li>
    </ul>
    <p>Useful if you have your own styling for markdown generated html files and want further customization for syntax
        stylings in code blocks.</p>
    <h2>Markdown Conversions</h2>
    <ul>
        <li><a href="https://marked.js.org/">marked.js</a></li>
        <li><a href="https://pandoc.org/">pandoc</a></li>
    </ul>
    <p>Marked.js is good for front-end conversions of <code>.md</code> to <code>.html</code>. Pandoc is good for all
        other file type conversions.</p>
</template>

<style scoped></style>