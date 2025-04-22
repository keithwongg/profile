<script setup>
</script>

<template>
    <h1>Powershell Shortcuts</h1>
    <p>Similar to terminal's shortcuts <router-link :to="{name: 'article', }">with alias</router-link>, we can create custom powershell shortcuts to spin up a
        development environment quickly. My past projects usually have the front and backend hosted on separate
        instances and thus, requires various terminals to get a web application running locally.</p>
    <p>The following example shows a shortcut to create 2 windows in a single Windows Terminal tab - one for the
        frontend (Vue.js) and the other for the back (C#). </p>
    <pre><code>function run-backend {
    cd "C:\\Users\\admin\\Documents\\Repos\\VueWithAsp\\VueWithAsp.Server";
    dotnet run;
}

function run-frontend {
    cd "C:\\Users\\admin\\Documents\\Repos\\VueWithAsp\\vuewithasp.client"
    npm run dev;
}

function work {
    wt -w 0 --title "Backend (C#)" --tabColor '#512cd4' PowerShell -c run-backend `; split-pane -H --title "FrontEnd (Vue.js)" --suppressApplicationTitle --tabColor '#8ed4b5' PowerShell -c run-frontend;
}
</code></pre>
    <p>Running <code>work</code> in powershell will execute the script.</p>
    <h2>Explanation</h2>
    <p>Functions act as shorthand in PowerShell. E.g, if we run <code>run-backend</code> in Powershell, the
        <code>cd</code> and <code>dotnet run</code> commands will be executed.
    </p>
    <p>To chain multiple commands together, we can use <code>;</code> (as seen in the <code>work</code> function).</p>
    <p><code>--title</code> and <code>--tabColor</code> are just for customization, to provide information on the
        selected window. <code>split-pane -H</code> splits the pane horizontally. <code>Powershell -c</code> executes
        commands in PowerShell.</p>
    <h2>Location to store this script</h2>
    <p>We can run <code>echo $PROFILE</code> in PowerShell to get location of Profile Script. Save the above code
        snippet as a <code>.ps1</code> script.</p>
    <p>Open a fresh instance of Windows Terminal and you should be able to run your new commands.</p>
    <br />
    <h1>Resources</h1>
    <ul>
        <li><a target="_blank"
                href="https://learn.microsoft.com/en-us/windows/terminal/command-line-arguments?tabs=windows">Windows
                Terminal Docs - Command Line Arguments</a></li>
    </ul>
</template>

<style scoped></style>