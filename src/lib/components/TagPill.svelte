<script lang="ts">
	export let name: string;
	export let color: string;
	export let textColor: string | undefined;
</script>

<div
	class="pill"
	style={`--pill-color: ${color}; ${textColor ? `--pill-text-color: ${textColor}` : 'initial'}`}
>
	<span>{name}</span>
</div>

<style lang="scss">
    .pill {
        padding: 0.25rem 1rem;
        border-radius: 500px;

        width: fit-content;
        height: fit-content;

        background-color: var(--pill-color);
        color: var(--pill-text-color);

        span {
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
</style>
