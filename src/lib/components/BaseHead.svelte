<script lang="ts">
    export let title: string;
    export let description: string | undefined = undefined;
    export let permalink: string;
    export let imageUrl: string = "https://blog.helgesson.dev/banner.png"

	const endDescription = `Jakob Helgesson | Super Stack Developer @ 17 Years of age
	📃: jakobhelgesson.com
	📋: blog.helgesson.dev
	✉️: jakob@helgesson.dev`

	const desc = description ? `${description}\n===\n${endDescription}` : endDescription;
</script>


<svelte:head>
	<!-- Global Metadata -->
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width" />

	<!-- Primary Meta Tags -->
	<title>{title}</title>
	<meta name="title" content={title} />
	<meta name="description" content={desc} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={permalink} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={desc} />
	<meta property="og:image" content={imageUrl} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={permalink} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={desc} />
	<meta property="twitter:image" content={imageUrl} />
</svelte:head>
