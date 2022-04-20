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

	export let title;
	export let created;

	export let tags;

	const date = formatDate(created);

	const routeSplit = $page.routeId.split('/');

	const route = routeSplit[routeSplit.length - 1];
</script>

<Wrapper>
	<Header title={route} />

	<BlogTitle {date} {title} {tags} />

	<Main class="blog">
		<slot />
	</Main>
</Wrapper>

<style lang="scss">
</style>
