<script lang="ts">
	import { sleep, waitNextFrame } from '$lib/util';

	let particles: HTMLElement;

	async function boom() {
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

		let group: { shape: HTMLElement; x: number; y: number }[] = [];
		const num = Math.floor(Math.random() * 50) + 30;

		for (let i = 0; i < num; i++) {
			const randBG = Math.floor(Math.random() * colors.length);
			const getShape = Math.floor(Math.random() * shapes.length);
			const scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
			const x = Math.floor(Math.random() * 350) - 175;
			const y = Math.floor(Math.random() * 350) - 175;
			const sec = Math.floor(Math.random() * 1700) + 1000;
			const shape = createElement(
				'<svg class="explosion-button-shape">' + shapes[getShape] + '</svg>'
			);

			shape.style.cssText = `
				top: 0;
				left: 0;
				transform: translate(-50%, -50%) scale(0.${scale});
				transition: ${sec}ms;
				fill: ${colors[randBG]};
			`;

			particles.appendChild(shape);

			group.push({ shape: shape, x: x, y: y });
		}

		let ripples: { ripple: HTMLElement; scale: number }[] = [
			...new Array(Math.floor(Math.random() * 4) + 4).keys()
		].map(() => {
			const sec = Math.floor(Math.random() * 1700) + 1000;
			const scale = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
			const randBG = Math.floor(Math.random() * colors.length);
			const ripple = createElement('<div class="explosion-button-ripple" />');
			ripple.style.cssText = `
					transition: ${sec}ms;
					border-color: ${colors[randBG]};
				`;
			particles.appendChild(ripple);

			return {
				ripple,
				scale
			};
		});

		await waitNextFrame();
		await waitNextFrame();

		group.forEach(({ shape, x, y }) => {
			shape.style.cssText = `
					${shape.style.cssText}
					top: ${y}px;
					left: ${x}px;
					transform: translate(-50%, -50%) scale(0);
				`;
		});

		ripples.forEach(({ ripple, scale }) => {
			ripple.style.cssText = `
					${ripple.style.cssText}
					height: ${scale * 50}px;
					width: ${scale * 50}px;
					opacity: 0;
					transform: translate(-50%, -50%);
				`;
		});

		await sleep(2000);

		group.forEach(({ shape }) => shape.remove());
		ripples.forEach((obj) => obj.ripple.remove());
		group = [];
	}
</script>

<div class="wrapper">
	<div class="btn-contain">
		<button class="btn" on:click={boom}><slot /></button>
		<div class="btn-particles" bind:this={particles} />
	</div>
</div>

<style lang="scss">
	:global(.explosion-button-ripple) {
		position: absolute;
		top: 0;
		left: 0;
		width: 5px;
		height: 5px;
		border: 1px solid black;
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}

	:global(.explosion-button-shape) {
		position: absolute;
		width: 50px;
		height: 50px;
		transform: translate(-50%, -50%) scale(0.8);
	}

	.wrapper {
		overflow: visible;
	}

	.cir {
		position: absolute;
		z-index: 5;
		border-radius: 50%;
	}

	.btn-contain {
		position: relative;
		display: inline-block;
		width: auto;
	}

	.btn {
		z-index: 4;
	}

	.btn-particles {
		position: absolute;
		top: 50%;
		left: 50%;
		z-index: -1;
		overflow: visible;
	}
</style>
