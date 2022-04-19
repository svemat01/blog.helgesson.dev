import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import remarkGfm from "remark-gfm"
import remarkSectionize from "remark-sectionize"

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: '/src/lib/layouts/blogpost.svelte',

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		remarkGfm,
		remarkSectionize
	],
	rehypePlugins: []
});

export default config;
