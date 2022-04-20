<script lang="ts">
    export let href: string;
</script>

<a {href}><slot/></a>

<style lang="scss">
    a {
        color: $accent-color;

        &:hover {
            filter: brightness(0.8);
        }
    }
</style>