<script lang="ts">
	import { Profiles, type Profile } from '$lib/data/profiles';

	export let name: keyof typeof Profiles;

	const profile = Profiles[name] as Profile | undefined;
</script>

{#if profile}
	<span class="profile">
		<img class="logo" src={profile.logo} alt={profile.displayName} />
		<span class="profile-text">
			{profile.displayName}
		</span>
	</span>
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
	}
</style>
