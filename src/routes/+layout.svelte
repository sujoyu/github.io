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
			margin: 0;
			padding: 0;
			width: 100%;
			max-width: 100%;
			overflow: hidden;
		}

		footer {
			border-top: 1px solid #ffffff88;
			background: #ffffff;
			padding: 1rem;
			text-align: center;
		}
	}
</style>
