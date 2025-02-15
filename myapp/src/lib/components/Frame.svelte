<script>
	import { isOpen } from "$lib/stores";
</script>

<div class="frame {$isOpen ? '' : 'collapsedFrame'}">
	<slot></slot>
</div>

<style>
	.frame {
		margin-left: 13vw;
		width: 87vw;
		height: 100vh;
		overflow-y: auto;
		background-color: rgb(1, 24, 24);
		transition:
			margin-left 0.3s ease,
			width 0.3s ease;
	}
	.collapsedFrame {
		margin-left: calc(13vw - (4 / 5 * 13vw));
		width: calc(87vw + (4 / 5 * 13vw));
	}

	/* Apple like scrollbar */
	.frame::-webkit-scrollbar {
		width: 14px;
	}.frame::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid rgb(1, 24, 24);
	}

</style>
