<script lang="ts">
	import { sleep, waitNextFrame } from '$lib/util';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	let particles: HTMLElement;
	let container: HTMLElement;

	onMount(() => {
		let count = 0;
		async function boom(time: number, delta: number) {
			count += delta;
			if (count > 50) {
				count %= 50;
				const elementParent = document.createElement('div');
				function createElement(html: string): HTMLElement {
					elementParent.innerHTML = html;
					return elementParent.childNodes[0] as HTMLElement;
				}

				const colors = ['#FFD100', '#FF9300', '#FF7FA4'];
				const shapes = [
					'<polygon class="star" points="21,0,28.053423027509677,11.29179606750063,40.97218684219823,14.510643118126104,32.412678195541844,24.70820393249937,33.34349029814194,37.989356881873896,21,33,8.656509701858067,37.989356881873896,9.587321804458158,24.70820393249937,1.0278131578017735,14.510643118126108,13.94657697249032,11.291796067500632"></polygon>',
					'<polygon class="other-star" points="18,0,22.242640687119284,13.757359312880714,36,18,22.242640687119284,22.242640687119284,18.000000000000004,36,13.757359312880716,22.242640687119284,0,18.000000000000004,13.757359312880714,13.757359312880716"></polygon>',
					'<polygon class="diamond" points="18,0,27.192388155425117,8.80761184457488,36,18,27.19238815542512,27.192388155425117,18.000000000000004,36,8.807611844574883,27.19238815542512,0,18.000000000000004,8.80761184457488,8.807611844574884"></polygon>'
				];

				let group: { shape: HTMLElement; x: number; y: number; color: string }[] = [];
				const num = Math.floor(Math.random() * 2) + 1;

				for (let i = 0; i < num; i++) {
					const randBG = Math.floor(Math.random() * colors.length);
					const getShape = Math.floor(Math.random() * shapes.length);
					const scale = Math.floor(Math.random() * (8 - 4 + 1)) + 2;
					let x = Math.floor(Math.random() * 100) - 50;
					let y = Math.floor(Math.random() * 100) - 50;
					const sec = Math.floor(Math.random() * 1700) + 500;
					const shape = createElement(
						'<svg class="explosion-button-shape2">' + shapes[getShape] + '</svg>'
					);

					if (!particles) return;

					const particleRect = particles.getBoundingClientRect();
					const containerRect = container.getBoundingClientRect();

					x += particleRect.left - containerRect.left;
					y += particleRect.top - containerRect.top;

					shape.style.cssText = `
						top: ${particleRect.top - containerRect.top};
						left: ${particleRect.left - containerRect.left};
						transform: translate(-50%, -50%) scale(0.${scale});
						transition: ${sec}ms ease-out;
						fill: #ffffff;
					`;

					container.appendChild(shape);

					group.push({ shape: shape, x: x, y: y, color: colors[randBG] });
				}

				await waitNextFrame();
				await waitNextFrame();

				group.forEach(({ shape, x, y, color }) => {
					shape.style.cssText = `
							${shape.style.cssText}
							top: ${y}px;
							left: ${x - 300}px;
							transform: translate(-50%, -50%) scale(0);
							fill: ${color};
						`;
				});

				sleep(2000).then(() => {
					group.forEach(({ shape }) => shape.remove());
					group = [];
				});
			}
			const nextTime = await waitNextFrame();

			boom(nextTime, nextTime - time);
		}

		boom(0, 0);
	});
</script>

<div class="background" in:fade={{ duration: 1000 }} out:fade={{ duration: 1000 }}>
	<div class="btn-contain">
		<div class="btn-particles-container" bind:this={container} />
		<div class="reverse-rotate">
			<div class="btn-particles" bind:this={particles} />
		</div>
	</div>
</div>

<style lang="scss">
	:global(.explosion-button-shape2) {
		position: absolute;
		width: 50px;
		height: 50px;
		transform: translate(-50%, -50%) scale(0.8);
	}
	/* 
	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #888f;
		z-index: 10;
	} */

	.btn-contain {
		position: relative;
		width: 96px;
		height: 96px;
		overflow: visible;
	}

	.btn:active,
	.btn:hover,
	.btn:focus {
		outline: none !important;
		color: white;
	}

	.btn-particles-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 0;
		z-index: 1;
		overflow: visible;
	}

	.reverse-rotate {
		position: absolute;
		top: 0;
		left: 0;
		animation: 5s linear 0s infinite rotation;
		width: 100%;
		height: 100%;
	}

	.btn-particles {
		position: absolute;
		top: 2px;
		left: 50%;
		width: 0;
		height: 0;
		overflow: visible;

		&::before {
			content: '';
			display: block;
			position: absolute;
			top: -23px;
			left: -23px;
			width: 46px;
			height: 46px;
			background: center/cover no-repeat radial-gradient(#ffff 10%, transparent 40%);
		}
	}

	.btn:active {
		transform: scale(0.9) translate(-2.5%, -2.5%);
	}

	@keyframes rotation {
		from {
			// transform: rotate(0);
			transform: rotate(-360deg);
		}

		to {
			transform: rotate(0);

			// transform: rotate(-360deg);
		}
	}
</style>
