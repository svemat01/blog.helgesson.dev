import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkSectionize from "remark-sectionize";
import remarkEmoji from "remark-emoji";
import { remarkReadingTime } from "./src/utils/remark-reading-time.mjs";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
    site: "https://blog.helgesson.dev",

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
        rehypePlugins: [
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap",
                },
            ],
        ],
    },
    integrations: [
        mdx({
            rehypePlugins: [rehypeAutolinkHeadings],
            remarkPlugins: {
                extends: [remarkSectionize, remarkEmoji, remarkReadingTime],
            },
        }),
        sitemap(),
    ],
});
