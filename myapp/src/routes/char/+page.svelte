<script lang="ts">
    import Navbar from '$lib/components/Navbar.svelte';
    import Frame from '$lib/components/Frame.svelte';
    import Charcard from '$lib/components/Charcard.svelte';
</script>

<Navbar />
<Frame>
	<h1>Character</h1>
	<a href="https://wiki.hoyolab.com/pc/hsr/aggregate/104">HoYoWiKi/char</a>
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