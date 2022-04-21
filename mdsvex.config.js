import { defineMDSveXConfig as defineConfig } from 'mdsvex';

import remarkGfm from 'remark-gfm';
import remarkSectionize from 'remark-sectionize';
import remarkContainers from 'remark-containers';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	layout: '/src/lib/layouts/blogpost.svelte',

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [
		remarkGfm,
		remarkSectionize,
		[
			remarkContainers,
			{
				default: true,
				custom: [
					{
						type: 'warning',
						element: 'div',
						transform: function (node, config, tokenize) {
							console.log({config});
							node.data.hProperties = {
								className: `remark-container warning ${config}` 
							};
							node.children.unshift({
								type: 'p',
								data: {
									hName: 'p',
									hProperties: {
										className: 'title'
									}
								},
								children: tokenize('WARNING')
							});
						}
					},
					{
						type: 'tip',
						element: 'div',
						transform: function (node, config, tokenize) {
							node.data.hProperties = {
								className: `remark-container tip ${config}` 
							};
							node.children.unshift({
								type: 'p',
								data: {
									hName: 'p',
									hProperties: {
										className: 'title'
									}
								},
								children: tokenize('TIP')
							});
						}
					}
				]
			}
		]
	],

	rehypePlugins: []
});

export default config;
