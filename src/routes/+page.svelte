<script>
	import ExplotionButton from '$lib/components/animations/ExplotionButton.svelte';
	import GlowEffect from '$lib/components/animations/GlowEffect.svelte';
	import LoadingSpinner from '$lib/components/animations/LoadingSpinner.svelte';
	import MenuHumburger from '$lib/components/animations/MenuHumburger.svelte';
	import Container from '$lib/components/Container.svelte';

	let index = 1;
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
			<img src="/imgs/konotan.png" alt="サムネ" />
		</li>
		<li>
			<a href="https://nmnmokk.games/" target="_blank" rel="noreferrer">ねむねむおかき</a>
			<p>
				インディーゲーム制作サークルにてプログラマー担当をしています。<br
				/>サークルのWebサイトも制作しました。
			</p>
			<img src="/imgs/nmnmokk.png" alt="サムネ" />
		</li>
	</ul>
</Container>

<Container>
	<ul class="list">
		<li>
			<a href="#effects">エフェクトたち</a>
			<p>JS, CSSで作ったエフェクトたち</p>
		</li>
	</ul>
</Container>

<Container id="effects">
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
</Container>

<Container>
	<ul class="list">
		<li>
			<a href="#skills">スキルセット</a>
			<p>持ってるスキル</p>
		</li>
	</ul>
</Container>

<Container id="skills">
	<ul class="skills">
		<li>
			<div class="title">ウェブデザイン</div>
		</li>
		<li>
			<div class="title">業務経験のある言語（フレームワーク）</div>
			<ul>
				<li>TypeScript(Vue, React, Next, Nuxt)</li>
				<li>JavaScript</li>
				<li>Scala(Play Framework)</li>
				<li>Kotlin(Android)</li>
				<li>Swift(iOS)</li>
				<li>Java(Spring Boot)</li>
				<li>PHP</li>
			</ul>
		</li>
		<li>
			<div class="title">趣味で使った言語（フレームワーク）</div>
			<ul>
				<li>TypeScript(Svelte, SvelteKit)</li>
				<li>JavaScript(NativeScript)</li>
				<li>Scala(libGDX)</li>
				<li>Dart(Flutter)</li>
			</ul>
		</li>
		<li>
			<div class="title">業務経験のあるOS, ミドルウェア</div>
			<ul>
				<li>MySQL</li>
				<li>PostgreSQL</li>
				<li>Hasura</li>
				<li>Scientific Linux</li>
				<li>Oracle DB</li>
			</ul>
		</li>
		<li>
			<div class="title">業務経験のあるIaaS</div>
			<ul>
				<li>AWS(ちょっとだけ)</li>
				<li>GCP(ちょっとだけ)</li>
			</ul>
		</li>
		<li>
			<div class="title">所持資格</div>
			<ul>
				<li>DBスペシャリスト</li>
				<li>応用情報</li>
				<li>基本情報</li>
				<li>OCJ-P</li>
				<li>Oracle Silver</li>
			</ul>
		</li>
	</ul>
</Container>

<style lang="scss">
	h1 {
		margin: 2rem 1rem;
		font-size: 20px;
		font-weight: 300;
		background: white;
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
				background: white;
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
					top: 6px;
					left: 0;
					display: block;
					width: 14px;
					height: 14px;
					margin-right: 8px;
					background: white;
				}

				a {
					font-weight: bold;
					font-size: 1rem;
				}

				img {
					position: relative;
					display: block;
					margin: 0.5rem auto;
					width: 256px;
					border: 1px solid #24726b;
				}
			}
		}

		&.skills {
			ul > li {
				position: relative;
				padding-left: 22px;
				&::before {
					content: '';
					position: absolute;
					top: 9px;
					left: 0;
					display: block;
					width: 4px;
					height: 4px;
					margin-right: 0;
					background: white;
				}
			}
		}
	}
</style>
