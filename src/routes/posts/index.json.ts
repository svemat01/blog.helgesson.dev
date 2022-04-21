import { parse } from "path";
import { dev } from "$app/env";

import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
    const allPosts = import.meta.glob("./*.md");

    const resolved = await Promise.all(
        Object.entries(allPosts)
            .map(([path, resolver]) => resolver().then(post => ({
                route: `/posts/${parse(path).name}`,
                metadata: post.metadata,
            })))
    )

    console.log({ resolved });

    return { body: dev ? resolved : resolved.filter(it => !it.metadata.hidden) }
}