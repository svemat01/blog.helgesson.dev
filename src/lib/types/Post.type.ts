type Credits = { role: string, name: string }[];

export type TagType = {
    [key: string]: {
        color: string;
        textColor?: string;
    },
}

export type Post = {
    title: string,
    description?: string,
    author: string,
    tags?: TagType,
    credits?: Credits,
    created: Date,
    modified: Date,
    hidden: boolean
}

export type PostWithMeta = {
    route: string,
    metadata: Post,
};