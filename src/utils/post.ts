import { getSlugFromFile } from "./helpers";

import Ajv, { JSONSchemaType } from "ajv";
import { inspect } from "util";

const ajv = new Ajv({
    allowDate: true,
});

export type Post = {
    title: string;
    description: string;
    author: string;
    date: Date;
    tags: string[];
    draft: boolean;
    slug: string;
    minutesRead: string;
};

const postSchema: JSONSchemaType<Omit<Post, "date"> & { date: object }> = {
    type: "object",
    properties: {
        title: { type: "string" },
        description: { type: "string" },
        author: { type: "string" },
        date: { type: "object" },
        tags: { type: "array", items: { type: "string" } },
        draft: { type: "boolean" },
        slug: { type: "string" },
        minutesRead: { type: "string" },
    },
    required: [
        "title",
        "description",
        "author",
        "date",
        "tags",
        "draft",
        "slug",
    ],
    additionalProperties: false,
};

const validatePost = ajv.compile(postSchema);

export const postProcessPost = (post: Post, file: string): Post => {
    post.slug = getSlugFromFile(file);

    // HACK: For some reason, Astro transform our dates into string so let's check for that and return a proper date
    if (typeof post.date === "string") {
        post.date = new Date(post.date);
    }

    const tempPost = post;
    // tempPost.date = post.date.toString();
    if (!validatePost(tempPost)) {
        throw new Error(
            `Invalid post (${post.slug}.mdx): \n\n${validatePost.errors
                ?.map((error) => JSON.stringify(error, null, 2))
                .join("\n")}`
        );
    }

    return post;
};
