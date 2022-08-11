import { getSlugFromFile } from './helpers';

export type Post = {
    title: string;
    description: string;
    author: string;
    date: Date;
    tags: string[];
    draft: boolean;
    slug: string;
};

export const postProcessPost = (post: Post, file: string): Post => {
    post.slug = getSlugFromFile(file);

    // HACK: For some reason, Astro transform our dates into string so let's check for that and return a proper date
    if (typeof post.date === "string") {
        post.date = new Date(post.date);
    }

    return post;
};
