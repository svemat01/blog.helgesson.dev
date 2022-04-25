<script lang="ts">
	import type { PostWithMeta } from '$lib/types/Post.type';
	import { formatDate } from '$lib/util/formatDate';
	import TagPill from './TagPill.svelte';

	export let post: PostWithMeta;

	const { metadata } = post;

	const { tags } = metadata;

	const dateString = formatDate(metadata.published);

	console.log({ post });
</script>

<!-- <a href={post.route}> -->
<div class="card" on:click={() => (location.href = post.route)}>
	<div class="horizontal">
		<h1>{metadata.title}</h1>
		<div class="pills">
			{#each Object.entries(tags) as [tag, data]}
				<TagPill name={tag} color={data.color} textColor={data.textColor} />
			{/each}
		</div>

		<div class="date">
			<p>{dateString}</p>
		</div>
	</div>
	<p>{metadata.description}</p>
</div>

<!-- </a> -->
<style lang="scss">
	.horizontal {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 1rem;

		@media screen and (max-width: $tablet-size) {
			flex-direction: column;
		}
	}

	.card {
		padding: 2rem;
		padding-left: 3rem;

		border-radius: 1rem;

		background-color: $gray-color;

		display: flex;
		flex-direction: column;
		gap: 1rem;

		transition: transform 0.1s ease-in-out;

		&:hover {
			transform: scale(1.05);

			/* border: 0.4rem solid $accent-color; */
		}

		h1 {
			font-size: 2rem;

			position: relative;

			&::before {
				content: '#';

				color: $accent-color;

				/* padding-right: 0.5rem; */

				position: absolute;

				left: -1.6rem;
			}
		}

		p {
			font-size: 1.6rem;

			/* padding-left: 1.5rem; */

			color: $disabled-color;
		}

		.pills {
			display: flex;
			gap: 1rem 0.5rem;
			flex-wrap: wrap;

			/* max-width: 30rem; */

			/* margin-left: 1rem; */

			height: fit-content;
		}

		.date {
			@media screen and (min-width: $tablet-size) {
				margin-left: auto;
			}
		}
	}
</style>
