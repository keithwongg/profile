<script setup>
</script>

<template>
    <div class="profile-card-container parent">
        <div class="avatar-container div1">
            <img alt="dp" src="@/assets/dp.jpg" draggable="false" />
        </div>
        <div class="name-container div2">
            <h1>Keith Wong Jun Hsien</h1>
            <span>Self-taught software developer with a background in accounting from Singapore Management University
                (SMU).</span>
        </div>
        <div class="social-links div3">
            <div class="tag">
                <img alt="github" src="/public/github.png" draggable="false" />
                <span>GitHub</span>
            </div>
            <div class="tag">
                <img alt="linkedin" src="/public/linkedIn.png" draggable="false" />
                <span>LinkedIn</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 32px;
    font-weight: bold;
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
    /* border: 1px red solid; */
    /* border-radius: 15px;
    background-color: var(--default-tag); */
    padding: 4px 12px;
    /* From https://css.glass */
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
}

.tag>img {
    height: 20px;
    width: 20px;
}
</style>