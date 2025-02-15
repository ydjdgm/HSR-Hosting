<script>
    export let entry_page_id;
    export let icon_url;
    export let character_rarity;
    export let character_paths_icon;
    export let character_combat_type_icon;
    export let name;

    let rarityNum = character_rarity === "★5" ? 5 : 4;
</script>

<div class="charCard">
    <img class="img"src={icon_url} alt=icon />
    <div class = "info">
        <h2 class = "name">{name}</h2>
        <div class="type_path_icons">
            <img src="{character_combat_type_icon}" alt=character_combat_type_icon>
            <img src={character_paths_icon} alt=character_paths_icon>
        </div>
        <div class="rarityIcons">
            {#each Array(rarityNum) as _}
                <img src="https://wiki.hoyolab.com/_nuxt/img/level_star.7cc9f11.png" alt=rarityNum>
            {/each}
        </div>
    </div>
    <img class="path" src={character_paths_icon} alt="path">
</div>

<style>
    .charCard {
        background: #1a1a2e;
        padding: 15px;
        border-radius: 10px;
        width: 100%;
        color: white;
        position: relative;
        display: flex;
        overflow: hidden;
    }.charCard .img {
        width: 100px;
        height: 120px;
        border-radius: 5px;
        background-color: #b88261;
        object-fit: cover;
    }.charCard .info{
        display: grid;
        margin-left: 15px;
        width: 100%;
    }.info div{
        margin-top: -25px;
    }
    .charCard .name{
        text-align: left;
        font-size: medium;
    }.charCard .type_path_icons {
    display: flex;
    gap: 5px;
    }.charCard img{
        width: 30px;
        height: 30px;
    }
    .charCard .rarityIcons {
        display: flex;
    }.rarityIcons img {
        width: 20px;
        height: 20px;
    }
    .path{
        position: absolute;
        opacity: 0.3;
        transform: scale(3);
        right: 0;
        top: 10%;
    }
</style>