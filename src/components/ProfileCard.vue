<script setup>
</script>

<template>
    <div class="profile-card-container">
        <div class="avatar-container">
            <img alt="Vue logo" class="logo" src="@/assets/dp.jpg" draggable="false" />
        </div>
        <div class="name-container">
            <h1>Keith Wong Jun Hsien</h1>
            <span>Self-taught software developer with a background in accounting from Singapore Management University
                (SMU).</span>
        </div>
        <div>
            <span>Socials</span>
            <div>
                <span>github</span>
                <span>linkedin</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1 {
    font-size: 32px;
    font-weight: bold;
}

span {
    /* margin-left: 8px; */
}

.profile-card-container {
    display: grid;
    grid-template-columns: auto 2fr;
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
    grid-row-gap: 0px;
    justify-content: center;
    place-items: center;

    height: fit-content;
    width: 500px;
    border: 1px var(--default-tag) solid;
    border-radius: 5px;
    padding: 12px 20px;
}

/* .profile-card-container {
    height: fit-content;
    width: 500px;
    display: flex;
    flex-direction: row;
    border: 1px var(--default-tag) solid;
    border-radius: 5px;
    padding: 16px 24px;
} */

.avatar-container {
    border-radius: 50%;
    height: 100px;
    width: 100px;
    overflow: hidden;
    user-select: none;
    grid-area: 1 / 1 / 2 / 2;
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
    grid-area: 1 / 2 / 2 / 3;
    /* place-items: center;
    justify-content: center; */
}
</style>