<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Frame from "$lib/components/Frame.svelte";
	import Charcard from "$lib/components/Charcard.svelte";
	import { onMount } from "svelte";
	import type { ApiResponse, CharacterData, Character } from "$lib/types";

	let res_json_data_list: Character[] = [];

	onMount(async () => {
		try {
			const res = await fetch("api/char", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({}),
			});
			if (!res.ok) {
				throw new Error(`Failed to fetch: ${res.status}`);
			}
			console.log("api call success");
			res_json_data_list = await res.json();
			console.log("characters:", res_json_data_list[1]);
		} catch (error) {
			console.error("Error fetching characters:", error);
		}
	});
</script>

<Navbar />
<Frame>
	<h1>Character</h1>
	{#if res_json_data_list.length > 0}
	<ul class="charGrid">
		{#each Object.entries(res_json_data_list) as [entry_page_id, char]}
			<li>
				<Charcard
					{entry_page_id}
					icon_url={char.icon_url}
					character_rarity={char.filter_values.character_rarity?.values[0]}
					character_paths_icon={char.filter_values.character_paths?.value_types[0].icon}
					character_combat_type_icon={char.filter_values.character_combat_type?.value_types[0].icon}
					name={char.name}
				/>
			</li>
		{/each}
	</ul>
	{:else}
		<p>Loading...</p>
	{/if}
	<a href="https://wiki.hoyolab.com/pc/hsr/aggregate/104"
		>HoYoWiKi/char</a
	>
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
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 20px;
		padding: 20px;
	}
</style>
