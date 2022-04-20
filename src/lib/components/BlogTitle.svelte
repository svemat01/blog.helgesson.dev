<script lang="ts">
import type { TagType } from '$lib/types/Post.type';

	import TagPill from './TagPill.svelte';

	export let title: string;
	export let date;

	export let tags: TagType;
</script>

<div class="blogTitle">
	<div class="text">
		<h1>{title}</h1>
		<p>{date}</p>
	</div>
	<div class="pills">
		{#each Object.entries(tags) as [tag, data]}
			<TagPill name={tag} color={data.color} textColor={data.textColor} />
		{/each}
	</div>

	<hr class="solid" />
</div>

<style lang="scss">
	.blogTitle {
		margin-inline: 1rem;

		.text {
			margin-inline: 1rem;

			h1 {
				font-size: 2.1rem;
			}

			p {
				margin-top: 0.5rem;
				margin-left: 1rem;

				font-size: 1.2rem;

				color: $disabled-color;
			}
		}

		.pills {
			display: flex;
			gap: 1rem 0.5rem;
			flex-wrap: wrap;

			margin-left: 3rem;
			margin-top: 0.7rem;
			margin-bottom: 0.8rem;

			/* max-width: 30rem; */

			height: fit-content;
		}

		hr.solid {
			border: 0;
			border-top: 0.4rem solid $disabled-color;

			margin-top: 0.5rem;
			margin-bottom: 1.76rem;
		}
	}
</style>
