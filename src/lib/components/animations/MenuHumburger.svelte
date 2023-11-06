<script lang="ts">
	import { sleep, waitNextFrame } from '$lib/util';
	import { tick } from 'svelte';

	let opened = false;
	let closed = true;
	let resetAnimation = false;

	const onClick = async () => {
		opened = !opened;
		if (!opened) {
			sleep(500).then(() => {
				closed = true;
			});
		} else {
			closed = false;
		}
		resetAnimation = true;
		await tick();
		await waitNextFrame();
		resetAnimation = false;
	};
</script>

<div class="wrapper">
	<button class="humburger" class:opened on:click={onClick}>
		<div class:reset-animation={resetAnimation} />
		<div class:reset-animation={resetAnimation} />
		<div class:reset-animation={resetAnimation} />
	</button>
</div>

<style lang="scss">
	.wrapper {
		$transition-time: 0.5s;
		$delay-time: 0.2s;
		position: relative;
		z-index: 1;

		.humburger {
			display: block;
			height: auto;
			border: 0;
			background: transparent;

			div {
				width: 1.5rem;
				height: 2px;
				background: black;
				border-radius: 2px;

				&.reset-animation {
					animation: none !important;
				}

				& + div {
					margin-top: 6px;
				}

				&:nth-of-type(1) {
					animation: 0.5s ease 0s reverse forwards humburger-transition;
				}
				&:nth-of-type(2) {
					transition: 0.25s all 0.25s;
					opacity: 1;
				}
				&:nth-of-type(3) {
					animation: 0.5s ease 0s reverse forwards humburger-transition-bottom;
				}
			}

			&.opened {
				div {
					&:nth-of-type(1) {
						animation: 0.5s ease 0s normal forwards humburger-transition;
					}
					&:nth-of-type(2) {
						opacity: 0;
					}
					&:nth-of-type(3) {
						animation: 0.5s ease 0s normal forwards humburger-transition-bottom;
					}
				}
			}

			$x-mark-margin: 6px + 2px;

			@keyframes humburger-transition {
				0% {
					border-radius: 2px;
					transform: translateY(0) rotate(0) scaleY(1);
				}
				45% {
					border-radius: 52%;
					transform: translateY($x-mark-margin) rotate(0) scaleY(12);
				}
				55% {
					border-radius: 52%;
					transform: translateY($x-mark-margin) rotate(45deg) scaleY(12);
				}
				100% {
					border-radius: 2px;
					transform: translateY($x-mark-margin) rotate(45deg) scaleY(1);
				}
			}

			@keyframes humburger-transition-bottom {
				0% {
					border-radius: 2px;
					transform: translateY(0) rotate(0) scaleY(1);
				}
				45% {
					border-radius: 52%;
					transform: translateY(-$x-mark-margin) rotate(0) scaleY(12);
				}
				55% {
					border-radius: 52%;
					transform: translateY(-$x-mark-margin) rotate(-45deg) scaleY(12);
				}
				100% {
					border-radius: 2px;
					transform: translateY(-$x-mark-margin) rotate(-45deg) scaleY(1);
				}
			}
		}
	}
</style>
