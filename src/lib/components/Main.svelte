<script lang="ts">
    let clazz: string | undefined = '';
    export { clazz as class };
</script>

<main class={clazz}>
    <slot />
</main>

<style lang="scss">
    main {
        margin-inline: 2rem;
    }
</style>