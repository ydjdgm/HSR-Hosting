<script lang="ts">
	import Navbar from "$lib/components/Navbar.svelte";
	import Frame from "$lib/components/Frame.svelte";
	import Charcard from "$lib/components/Charcard.svelte";
	import { onMount } from "svelte";
	import type { ApiResponse } from "$lib/types";

	let res_json: ApiResponse = { retcode:0, message:"ok", data: { list: [], total: "65" } };

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
			res_json = await res.json();
			console.log("characters:", res_json.data.list[1]);
		} catch (error) {
			console.error("Error fetching characters:", error);
		}
	});
</script>

<Navbar />
<Frame>
	<h1>Character</h1>
	{#if res_json.data.list.length > 0}
	<ul class="charGrid">
		{#each Object.entries(res_json.data.list) as [id, char]}
			<li>
				<Charcard
					{id}
					icon={char.icon_url}
					rank={char.filter_values.character_rarity?.values[0]}
					baseType={char.filter_values.character_paths?.values[0]}
					damageType={char.filter_values.character_combat_type?.values[0]}
					kr={char.name}
				/>
			</li>
		{/each}
	</ul>
	{:else}
		<p>Loading...</p>
	{/if}
	<a href="https://wiki.hoyolab.com/pc/hsr/aggregate/104"
		>HoYoWiKi/lightcone</a
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
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 20px;
		padding: 20px;
	}
</style>
