import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCollectHeadings from "@astrojs/mdx/rehypeCollectHeadings"

import remarkSectionize from "remark-sectionize";

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "src/styles/variables.scss" as *;',
                },
            },
        },
    },

    markdown: {
        shikiConfig: {
            theme: "github-dark-dimmed",
        },

        rehypePlugins: [[rehypeAutolinkHeadings, {behavior: 'wrap'}]],
    },

    integrations: [
        mdx({
            rehypePlugins: [rehypeAutolinkHeadings],
            remarkPlugins: { extends: [remarkSectionize] },
        }),
    ],
});
