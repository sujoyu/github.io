<script lang="ts">
	let element: HTMLDivElement;
	let isInView = false;
</script>

<div bind:this={element} class:animate={isInView}><slot /></div>
<button on:click={() => (isInView = !isInView)}>クリックしてね</button>

<style lang="scss">
	div {
		filter: blur(12px) brightness(400%);

		&.animate {
			animation: glow 0.4s linear 0s normal both;

			@keyframes glow {
				from {
					filter: blur(12px) brightness(400%);
				}
				to {
					filter: blur(0) brightness(100%);
				}
			}
		}
	}

	button {
		margin-top: 1rem;
	}
</style>
