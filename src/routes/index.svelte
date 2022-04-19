<script context="module" lang="ts">
	import type { Post, PostWithMeta } from '$lib/types/Post.type';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const posts: PostWithMeta[] = await fetch('/posts.json').then((res) => res.clone().json());
		
		posts
			// .sort((a, b) => a.metadata.title.localeCompare(b.metadata.title))
			.sort(
				(a, b) => new Date(b.metadata.created).getTime() - new Date(a.metadata.created).getTime()
			);

		return { props: { posts } };
	};
</script>

<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import PostListContainer from '$lib/components/PostListContainer.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';

	export let posts: PostWithMeta[];

	const tags = posts.reduce(
		(tags, post) => {
			Object.keys(post.metadata.tags).forEach((tag) => {
				tags[tag] = post.metadata.tags[tag];
			});

			console.log({meta: post.metadata});

			return tags;
		},
		{} as Post['tags']
	);

	console.log({ tags });
</script>

<Wrapper>
	<Header />

	<Main>
		<PostListContainer>
			{#each posts as post}
				<PostCard {post} />
			{/each}
		</PostListContainer>
	</Main>
</Wrapper>
