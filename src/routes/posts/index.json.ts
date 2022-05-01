import { parse } from 'path';
import { dev } from '$app/env';

import type { RequestHandler } from '@sveltejs/kit';
import type { Post } from '$lib/types/Post.type';

export const get: RequestHandler = async () => {
	const allPosts = import.meta.glob('./*.md');

	const resolved = (await Promise.all(
		Object.entries(allPosts).map(([path, resolver]) =>
			resolver().then((post) => ({
				route: `/posts/${parse(path).name}`,
				metadata: post.metadata as Post
			}))
		)
	)).map((post) => {
		post.metadata.published = new Date(post.metadata.published).getTime();
		post.metadata.modified = new Date(post.metadata.modified).getTime();

		return post;
	});
	
	resolved.sort((a, b) => b.metadata.published - a.metadata.published);

	return { body: dev ? resolved : resolved.filter((it) => !it.metadata.hidden) };
};
