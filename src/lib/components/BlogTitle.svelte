<script lang="ts">
	export let title: string;
	export let date;
</script>

<div class="blogTitle">
	<div class="text">
		<h1>{title}</h1>
		<p>{date}</p>
	</div>

	<hr />
</div>

<style lang="scss">
	.blogTitle {
		margin-inline: 1rem;

		.text {
			margin-inline: 1rem;

            h1 {
                font-size: 2.1rem;
            }

            p {
                margin-top: 0.5rem;
                margin-left: 1rem;

                font-size: 1.2rem;

                color: $disabled-color;
            }
		}

        hr {
            margin-top: 0.5rem;
            margin-bottom: 1.76rem;
        }
	}
</style>
