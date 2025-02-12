<script>
	import { is } from 'drizzle-orm';
	import { isOpen } from '$lib/stores';
	function toggleNavbar() {
		isOpen.update(value => !value);
	}
</script>

<div class="navbar {$isOpen ? '' : 'collapsedNavbar'}">
	<button class="toggleBtn" on:click={toggleNavbar}>
		{$isOpen ? 'X' : '☰'}
	</button>
	<a class="logoA {$isOpen ? '' : 'collapsedLogoA'}" href="/"><img src="/logo.png" alt="Starrail Logo" /></a>
	<ul class="menuLi">
		<li class="menuEle {$isOpen ? '' : 'collapsedMenuEle'}"><a href="/"><button class="eleABtn"><img class="eleABtnImg" src="/navbar/home.png" alt="home"><h1 class="eleABtnH1 {$isOpen ? '' : 'collapsedEleABtnH1'}">Home</h1></button></a></li>
		<li class="menuEle {$isOpen ? '' : 'collapsedMenuEle'}"><a href="/char"><button class="eleABtn"><img class="eleABtnImg" src="/navbar/char.png" alt="char"><h1 class="eleABtnH1 {$isOpen ? '' : 'collapsedEleABtnH1'}">Character</h1></button></a></li>
		<li class="menuEle {$isOpen ? '' : 'collapsedMenuEle'}"><a href="/lightcone"><button class="eleABtn"><img class="eleABtnImg" src="/navbar/lightcone.png" alt="lightcone"><h1 class="eleABtnH1 {$isOpen ? '' : 'collapsedEleABtnH1'}">Lightcone</h1></button></a></li>
		<li class="menuEle {$isOpen ? '' : 'collapsedMenuEle'}"><a href="/relic"><button class="eleABtn"><img class="eleABtnImg" src="/navbar/relic.png" alt="relic"><h1 class="eleABtnH1 {$isOpen ? '' : 'collapsedEleABtnH1'}">Relic</h1></button></a></li>
	</ul>
</div>

<style>
	.navbar {
		position: fixed;
		width: 13vw;
		height: 100vh;
		display: block;
		justify-content: center;
		top: 0;
		overflow-y: auto;
		scrollbar-width: none;
		background: #010131;

		transition: transform 0.3s ease;
		transform: translateX(0);
	}.collapsedNavbar {
		transform: translateX(-80%);
	}

	.toggleBtn {
		position: absolute;
		width: 10%;
		height: 4%;
		top: 1%;
		right: 5%;
		/* background: transparent; */
		background-color: transparent;
		color: white;
		z-index: 1;
		font-size: 1vw;
	}

	.logoA{
		display: block;
		margin: 0 auto;
		width: 11vw;
		height: 20vh;
		visibility: visible;
		opacity: 1;
		transition: opacity 0.3s ease;
	}.collapsedLogoA{
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s 0.3s, opacity 0.3s ease;
	}

	.menuLi{
		display: block;
	}

	.menuEle{
		display: flex;
		margin: 0.5vh 0;	/* 위 아래 간격 */
		transition: transform 0.3s ease;
	}.collapsedMenuEle{
		transform: translateX(9.7vw) translateY(-13vh);
	}

	.eleABtn{
		display: flex;
		align-items: center; /* 내부 요소들을 상하 중앙 정렬 */
		width: 13vw;
		left: 10vw;
		gap: 1vw;
		padding: 0.5vh 0;	/* 버튼 내부 위아래 여백 추가 */
		transition: transform 0.2s ease, background-color 0.2s ease;
	}.eleABtn:hover{	/* 커서 올릴시 */
		transform: scale(1.05); /* 크기 살짝 확대 */
    	background-color: rgb(90, 120, 120, 0.5); /* 배경색 조금 밝게 */		
	}

	.eleABtnImg{
		width: 2vw;
		transition: transform 0.3s ease;
		margin-left: 1vw;
	}

	.eleABtnH1{
		font-size: 1vw;
		color: white;
		visibility: visible;
	}.collapsedEleABtnH1{
		visibility: hidden;
	}
</style>
