<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Frame from '$lib/components/Frame.svelte';
    import Charcard from '$lib/components/Charcard.svelte';

    // 캐릭터 데이터 타입 정의
	interface CharacterData {
		release: number;
		icon: string;
		rank: string;
		baseType: string;
		damageType: string;
		en: string;
		kr: string;
		cn: string;
		jp: string;
		desc: string;
	}

    // JSON 구조에 맞게 객체 타입 설정 (키 값이 ID로 사용됨)
	let characters: Record<string, CharacterData> = {};

	async function fetchCharacters(): Promise<void> {
		try {
			const res = await fetch("https://api.hakush.in/hsr/data/character.json");
			if (!res.ok) {
				throw new Error(`Failed to fetch: ${res.status}`);
			}
			characters = await res.json();
		} catch (error) {
			console.error("Error fetching characters:", error);
		}
	}

	fetchCharacters();
</script>
<Navbar />
<Frame>
	<h1>Character</h1>
    <!-- 캐릭터 데이터를 배열로 변환하여 렌더링 -->
    {#if Object.keys(characters).length > 0}
        <ul class="charGrid">
            {#each Object.entries(characters) as [id, char]}
                <li>
                    <Charcard
                    id={id}
                    icon={char.icon} 
                    rank={char.rank}
                    baseType={char.baseType}
                    damageType={char.damageType} 
                    kr={char.kr} 
                    />
                </li>
            {/each}
        </ul>
    {:else}
        <p>Loading...</p>
    {/if}
	<a href="https://wiki.hoyolab.com/pc/hsr/aggregate/104">HoYoWiKi/lightcone</a>
</Frame>



<style>
	h1 {
		text-align: center;
		color: white;
	}
	a {
		position: relative;
		display: block;
		text-align: center;
		color: white;
	}
    .charGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
  	}
</style>