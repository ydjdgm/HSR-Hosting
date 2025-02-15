<script>
    export let entry_page_id;
    export let icon_url;
    export let character_rarity;
    export let character_paths_icon;
    export let character_combat_type_icon;
    export let name;
</script>

<div class="charCard">
    <img class="charImg"src={icon_url} alt={icon_url} />
    <h2>{name}</h2>
    <div class="icons">
        <img class="combatTypeIcon"src="{character_combat_type_icon}" alt={character_combat_type_icon}>
        <img class="pathIcon"src={character_paths_icon} alt={character_paths_icon}>
    </div>
</div>

<style>
    .charCard {
        background: #1a1a2e;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        width: 200px;
        color: white;
        position: relative; /* 내부 아이콘의 절대 위치 기준 */
        gap: 10px;
    }.charCard .charImg {
        width: 100%;
        border-radius: 5px;
    }.charCard .icons {
    position: relative; /* 내부 아이콘 배치를 위해 */
    }.charCard .combatTypeIcon {
    position: absolute;
    bottom: 170px;
    left: -10px;
    width: 30px;
    height: 30px;
    }.charCard .pathIcon {
    position: absolute;
    bottom: 170px;
    right: -10px;
    width: 30px;
    height: 30px;
    }
</style>