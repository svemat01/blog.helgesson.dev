export type Link =
	| 'github'
	| 'linkedin'
	| 'instagram'
	| 'twitter'
	| 'youtube'
	| 'email'
	| 'website';

export type Profile = {
	displayName: string;
	description: string;
	logo: string;
	url: string;

	// links: Partial<Record<Link, string>>
};

export const Profiles: {
	[k: string]: Profile;
} = {
	luc: {
		displayName: 'Luc Van Kampen',
		description: 'The one and only',
		logo: 'https://avatars.githubusercontent.com/u/10339043?v=4',
		url: 'https://luc.contact/'
	},
	antony: {
		displayName: 'Antonio F. Š',
		description: 'The Svelte Helper',
		logo: 'https://media.antony.red/logoTransparent.png',
		url: 'https://antony.wiki/'
	}
};
