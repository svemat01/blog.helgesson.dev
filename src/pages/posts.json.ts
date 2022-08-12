import { Post, postProcessPost } from "$utils/post";
import type { MDXInstance } from "astro";

export async function get() {
    const rawPosts = import.meta.glob<true, string, MDXInstance<Post>>(
        "../posts/**/*.mdx",
        { eager: true }
    );

    const posts = Object.values(rawPosts).map((post) =>
        postProcessPost(post.frontmatter, post.file)
    ).filter((post) => !post.draft).sort((a, b) => b.date.getTime() - a.date.getTime());

    return {
        body: JSON.stringify(posts),
    };
}
