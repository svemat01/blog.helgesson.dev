<script lang="ts">
	export let title: string | undefined = '';
</script>

<header>
	<nav>
		<a href="/"><h1><span>~/</span>{title}</h1></a>

		<h2><a href="https://helgesson.dev">Helgesson.dev</a></h2>
	</nav>

	<hr class="solid" />
</header>

<style lang="scss">
	header {
		display: flex;
		flex-direction: column;

		/* width: min(100% - 5rem, 1000px);

		margin-inline: auto; */
		margin-top: 5rem;

		overflow-wrap: anywhere;

		nav {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			padding-inline: 1rem;

			h1 {
				font-size: 3rem;
				font-weight: 600;
				text-align: center;

				position: relative;

				span {
					content: '~/';
					color: $accent-color;

					font-size: 3.6rem;

					padding-right: 0.2rem;
				}

				&:hover {
					text-decoration: underline;
					filter: brightness(0.8);
				}
			}

			h2 {
				font-size: 2.5rem;
				color: $light-color;

				&:hover {
					text-decoration: underline;
					filter: brightness(0.8);
				}

				@media screen and (max-width: $tablet-size) {
					display: none;
				}
			}
		}

		hr.solid {
			border: 0;
			margin-top: 0.5rem;
			border-top: 0.4rem solid $accent-color;
			padding-top: 2rem;
		}
	}
</style>
