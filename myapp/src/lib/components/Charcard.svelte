<script>
    export let id;
    export let kr;
    export let rarity;
    export let type;
    export let path;
</script>

<div class="charCard">
    <img class="charImg"src="headerIcon/{id}.png" alt={id} />
    <h2>{kr}</h2>
    <div class="icons">
        <img class="combatTypeIcon"src="type/{type}.png" alt={type}>
        <img class="pathIcon"src="path/{path}.png" alt={path}>
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