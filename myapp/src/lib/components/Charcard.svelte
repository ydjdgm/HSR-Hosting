<script>
    export let id;
    export let icon;
    export let rank;
    export let baseType;
    export let damageType;
    export let kr;
</script>

<div class="charCard">
    <img class="charImg"src={icon} alt={icon} />
    <h2>{kr}</h2>
    <div class="icons">
        <img class="combatTypeIcon"src="{damageType}" alt={damageType}>
        <img class="pathIcon"src={baseType} alt={baseType}>
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