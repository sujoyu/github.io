<script>
	import ExplotionButton from '$lib/components/animations/ExplotionButton.svelte';
	import GlowEffect from '$lib/components/animations/GlowEffect.svelte';
	import LoadingSpinner from '$lib/components/animations/LoadingSpinner.svelte';
	import MenuHumburger from '$lib/components/animations/MenuHumburger.svelte';
	import Container from '$lib/components/Container.svelte';

	let index = 1;

	let effects = false;
</script>

<Container><h1>モトキのポートフォリオ</h1></Container>

<Container>
	<ul class="list">
		<li>
			SNSアカウント: <a href="https://twitter.com/hypermotoki" target="_blank" rel="noreferrer"
				>Twitter@hypermotoki</a
			>
		</li>
		<li>
			<a href="https://konotan.sujoyu.com/home" target="_blank" rel="noreferrer">この短冊に願いを</a
			>
			<p>シンプルな縦書きマインドマップツールです</p>
		</li>
	</ul>
</Container>

<Container>
	<ul class="list">
		<li>
			<a href="#effects" on:click={() => (effects = !effects)}>エフェクトたち</a>
			<p>JS, CSSで作ったエフェクトたち</p>
		</li>
	</ul>
</Container>

<Container id="effects">
	{#if effects}
		<ul>
			<li>
				{((index = 1) + '').padStart(2, '0')}.
				<div class="title">クリックエフェクト</div>
				<div class="testing-area"><ExplotionButton>クリックしてね</ExplotionButton></div>
			</li>
			<li>
				{(++index + '').padStart(2, '0')}.
				<div class="title">ローディングスピナー</div>
				<div class="testing-area"><div class="center-margin"><LoadingSpinner /></div></div>
			</li>
			<li>
				{(++index + '').padStart(2, '0')}.
				<div class="title">ハンバーガーメニュー</div>
				<div class="testing-area"><div class="center-margin"><MenuHumburger /></div></div>
			</li>
			<li>
				{(++index + '').padStart(2, '0')}.
				<div class="title">出現エフェクト</div>
				<div class="testing-area">
					<div class="center-margin">
						<GlowEffect><div style="background: gray; width: 2rem; height: 2rem;" /></GlowEffect>
					</div>
				</div>
			</li>
			<li />
		</ul>
	{/if}
</Container>

<style lang="scss">
	h1 {
		margin: 2rem 1rem;
		font-size: 20px;
		font-weight: 300;
		background: antiquewhite;
		line-height: 0.9;
		padding: 0 4px;
		width: fit-content;
	}

	ul {
		li {
			font-size: 14px;
			margin: 1rem 0;
			.title {
				display: inline-block;
				font-size: 16px;
				background: antiquewhite;
				line-height: 0.9;
				padding: 0 4px;
			}
			.testing-area {
				margin: 2rem 0;
				display: flex;
				justify-content: center;
			}
		}

		&.list {
			li {
				position: relative;
				padding-left: 22px;
				&::before {
					content: '';
					position: absolute;
					top: 4px;
					left: 0;
					display: block;
					width: 14px;
					height: 14px;
					margin-right: 8px;
					background: white;
				}
			}
		}
	}
</style>
