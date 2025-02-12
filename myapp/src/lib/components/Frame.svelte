<script>
    import { isOpen } from '$lib/stores';
</script>

<div class="frame {$isOpen?'':'collapsedFrame'}">
    <slot></slot>
</div>

<style>
	.frame{
		margin-left: 13vw;
		width: 87vw;
		height: 100vh;
		overflow-y: auto;
		background-color: rgb(1, 24, 24);
		transition: margin-left 0.3s ease, width 0.3s ease;
	}.collapsedFrame{
		margin-left: calc(13vw - (4/5 * 13vw));
		width: calc(87vw + (4/5 * 13vw));
	}
</style>