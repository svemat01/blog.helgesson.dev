<script lang="ts">
	import type { PostWithMeta } from '$lib/types/Post.type';
	import { formatDate } from '$lib/util/formatDate';
	import TagPill from './TagPill.svelte';

	export let post: PostWithMeta;

	const { metadata } = post;

	const { tags } = metadata;

	const dateString = formatDate(metadata.created);

	console.log({ post });
</script>

<div class="card">
	<div class="info">
		<a href={post.route}>
			<h1>{metadata.title}</h1>
		</a>
		<p>{metadata.description}</p>
	</div>
	<div class="pills">
		{#each Object.entries(tags) as [tag, data]}
			<TagPill name={tag} color={data.color} textColor={data.textColor} />
		{/each}
	</div>
	<div class="date">
		<p>{dateString}</p>
	</div>
</div>

<style lang="scss">
	.card {
		padding: 2rem;
		padding-left: 3rem;

		border-radius: 1rem;

		background-color: $gray-color;

		display: flex;
		gap: 1rem;

		h1 {
			font-size: 2rem;

			position: relative;

			&::before {
				content: '#';

				color: $accent-color;

				/* padding-right: 0.5rem; */

				position: absolute;

				left: -1.5rem;
			}
		}

		p {
			font-size: 1.6rem;

			/* padding-left: 1.5rem; */

			color: $disabled-color;
		}

		.info {
			/* flex-grow: 1; */
		}

		.pills {
			display: flex;
			gap: 1rem 0.5rem;
			flex-wrap: wrap;

			max-width: 30rem;

			height: fit-content;
		}

		.date {
			margin-left: auto;
		}
	}
</style>
