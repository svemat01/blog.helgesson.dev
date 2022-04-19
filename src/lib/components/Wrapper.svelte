<div class="wrapper">
    <slot />
</div>

<style lang="scss">
    .wrapper {
        display: flex;
        flex-direction: column;

        margin-inline: auto;

        width: min(100% - 5rem, 900px);
    }
</style>