<script lang="ts">
	import { Profiles, type Profile } from '$lib/data/profiles';

	export let name: keyof typeof Profiles;

	const profile = Profiles[name] as Profile | undefined;
</script>

{#if profile}
	<a href={profile.url}>
		<span class="profile">
			<img class="logo no-style" src={profile.logo} alt={profile.displayName} />
			<span class="profile-text">
				{profile.displayName}
			</span>
		</span>
	</a>
{:else}
	<span style="color: red"> USER NOT FOUND </span>
{/if}

<style lang="scss">
	span.profile {
		/* display: flex; */

		color: $accent-color;

		img.logo {
			max-width: 2rem;
			border-radius: 100%;
		}

		&:hover {
			filter: brightness(0.8);
		}
	}
</style>
