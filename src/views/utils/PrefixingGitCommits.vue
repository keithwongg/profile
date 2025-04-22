<script setup>
</script>

<template>
    <h1 id="prefixing-git-commits">Prefixing Git Commits</h1>

    <br />

    <p>In my previous work, we track commits by prefixing them with a ticket
        code. For example, if I fixed ticket 5003, within a project named ‘PSG’,
        my commit would probably look something like:
        <code>PSG-5003-FixLongRunningQuery</code>. It is easy to omit this
        prefix in every commit and the easy way to add this prefix without
        setting up git hooks is by adding a custom commit template in
        <code>.git/config</code>.
    </p>

    <br />

    <h2 id="step-1-add-the-commit-template-reference-to-your_repo.gitconfig">Step
        1: Append the commit template reference to your_repo/.git/config file</h2>
    <p>Path: <code>your_repo/.git/config</code></p>
    <p>Add the following:</p>
    <pre><code>[commit]
template = .git/.gitmessage.txt</code></pre>
    <p>The file name does not have to be <code>gitmessage</code>.</p>

    <br />

    <h2 id="step-2-fill-in-prefix">Step 2: Fill in Prefix</h2>
    <p>In the <code>txt</code> file created in step 1, fill in your prefix
        text. In this example, it is:</p>
    <pre><code>PSG-</code></pre>
    <p>And thats all. Now all commits will have the prefix
        <code>PSG-</code>. I find this to be more flexible and simple to set-up,
        although it might be a bit more manual than githooks.
    </p>

    <br />

    <p>Hope this helps.</p>
    <p>Checkout some of my other git snippets <a
            href="https://gist.github.com/keithwongg/ffbe4438a31ac8fa97527ee1c77e7c82" target="_blank">here</a>.</p>

</template>

<style scoped></style>