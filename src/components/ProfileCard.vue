<script setup>
import faDownload from './icon/faDownload.vue';
</script>

<template>
    <div class="profile-card-container parent">
        <div class="avatar-container div1">
            <img alt="dp" src="@/assets/dp.jpg" draggable="false" />
        </div>
        <div class="name-container div2">
            <h1>Keith Wong Jun Hsien</h1>
            <span>Software Developer - mostly web. Accountancy graduate from Singapore Management University
                (SMU).</span>
            <span>💼 Open to work</span>
            <span>Mail to: <a class="underline" href="mailto:keithwjh@outlook.sg">keithwjh@outlook.sg </a></span>
        </div>
        <div class="social-links div3">
            <a class="tag" href="https://github.com/keithwongg" target="_blank" draggable="false">
                <img alt="github" src="/github.png" draggable="false" />
                <span>GitHub</span>
            </a>
            <a class="tag" href="https://www.linkedin.com/in/keith-wong-jun-hsien-3a6103158/" target="_blank"
                draggable="false">
                <img alt="linkedin" src="/linkedIn.png" draggable="false" />
                <span>LinkedIn</span>
            </a>
            <a class="tag" href="/KEITH_WONG_JUN_HSIEN_Resume.pdf" target="_blank" draggable="false">
                <i draggable="false">
                    <faDownload class="icon" />
                </i>
                <span>Resume</span>
            </a>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 32px;
    font-weight: bold;
}

a {
    color: var(--default-txt);
}

.profile-card-container {
    height: fit-content;
    width: 500px;
    border: 1px var(--default-tag) solid;
    border-radius: 5px;
    padding: 12px 20px;
}

.avatar-container {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    overflow: hidden;
    user-select: none;
    align-self: center;
}

.avatar-container>img {
    object-fit: contain;
    height: 100%;
    width: 100%;
}

.name-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.social-links {
    display: flex;
    flex-direction: row;
    gap: 8px;
}

.parent {
    display: grid;
    grid-template-columns: auto 2fr;
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    place-items: flex-start;
}

.div1 {
    grid-area: 1 / 1 / 3 / 2;
}

.div2 {
    grid-area: 1 / 2 / 2 / 3;
}

.div3 {
    grid-area: 2 / 2 / 3 / 3;
}

.tag {
    padding: 4px 12px;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0.09);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    font-size: 14px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    place-items: center;
    justify-content: center;
    cursor: pointer;
}

.tag:hover {
    color: var(--default-highlight);
    /* From https://css.glass */
    background: rgba(204, 153, 0, 0.31);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(4.8px);
    -webkit-backdrop-filter: blur(4.8px);
}

.tag>img {
    height: 16px;
    width: 16px;
}

.icon {
    height: 12px;
    width: 12px;
}

.underline {
    text-decoration: underline;
}

@media (max-width: 600px) {

    h1 {
        font-size: 18px;
        font-weight: bold;
    }

    .name-container>span {
        font-size: 14px;
    }

    .avatar-container {
        height: 80px;
        width: 80px;
    }

    .profile-card-container {
        height: fit-content;
        width: 350px;
    }

    .profile-card-container>span {
        text-wrap: wrap;
        word-break: break-all;
    }

    .parent {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 2fr auto;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }

    .div1 {
        grid-area: 1 / 1 / 2 / 2;
    }

    .div2 {
        grid-area: 1 / 2 / 2 / 3;
    }

    .div3 {
        grid-area: 2 / 1 / 3 / 3;
    }

    .tag>img {
        height: 16px;
        width: 16px;
    }

    .icon {
        height: 12px;
        width: 12px;
    }

    .social-links {
        flex-wrap: wrap;
        margin-top: 12px;
    }

}
</style>