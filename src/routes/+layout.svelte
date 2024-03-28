<div class="wrapper">
	<header />
	<main>
		<slot />
	</main>
	<footer>©️ motoki</footer>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		min-height: 100vh;

		main {
			flex: 1;
			padding: 1rem 0;
			width: 100vw;
			max-width: 100vw;
			overflow: hidden;
		}

		footer {
			border-top: 1px solid #ffffff22;
			background: #ffffff22;
			padding: 1rem;
			text-align: center;
		}
	}
</style>
