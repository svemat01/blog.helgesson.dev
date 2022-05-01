<script context="module" lang="ts">
	import type { Post, PostWithMeta } from '$lib/types/Post.type';

	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const posts: PostWithMeta[] = await fetch('/posts.json').then((res) => res.clone().json());

		return { props: { posts } };
	};
</script>

<script lang="ts">
	import BaseHead from '$lib/components/BaseHead.svelte';
	import Header from '$lib/components/Header.svelte';
	import Main from '$lib/components/Main.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import PostListContainer from '$lib/components/PostListContainer.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';

	export let posts: PostWithMeta[];

	const tags = posts.reduce((tags, post) => {
		Object.keys(post.metadata.tags).forEach((tag) => {
			tags[tag] = post.metadata.tags[tag];
		});

		return tags;
	}, {} as Post['tags']);
</script>

<BaseHead title="Jakob Helgesson's Devblog" permalink="https://blog.helgesson.dev" />

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
