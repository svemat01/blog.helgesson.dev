<script lang="ts" context="module">
	import Link from '$lib/components/Link.svelte';
	export { Link as a };
</script>

<script lang="ts">
	import '$lib/styles/blog.scss';

	import Header from '$lib/components/Header.svelte';
	import Wrapper from '$lib/components/Wrapper.svelte';
	import Main from '$lib/components/Main.svelte';

	import { page } from '$app/stores';
	import BlogTitle from '$lib/components/BlogTitle.svelte';
	import { formatDate } from '$lib/util/formatDate';
	import BaseHead from '$lib/components/BaseHead.svelte';

	export let title;
	export let description;
	export let published;
	export let banner;

	export let tags;

	const date = formatDate(published);

	const routeSplit = $page.routeId.split('/');

	const route = routeSplit[routeSplit.length - 1];

	if (!title || !description || !published) {
		throw new Error('Blog post must have title, description and published date');
	}
</script>

<BaseHead {title} {description} permalink={$page.routeId} imageUrl={banner} />

<Wrapper>
	<Header title={route} />

	<BlogTitle {date} {title} {tags} />

	<Main class="blog">
		<slot />
	</Main>
</Wrapper>
