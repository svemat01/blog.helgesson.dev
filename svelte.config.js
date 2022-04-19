import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/lib/styles/variables.scss" as *;'
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter(),

        prerender: {
            // This can be false if you're using a fallback (i.e. SPA mode)
            default: true
        },

		vite: {
			resolve: {
				alias: {
					$components: path.resolve('./src/lib/components'),
					$static: path.resolve('./static')
				}
			},

			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/lib/styles/variables.scss" as *;'
					}
				}
			}
		}
	}
};

export default config;
