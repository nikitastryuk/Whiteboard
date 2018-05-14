<template>
	<div>
		<canvas id="whiteboard" resize></canvas>
		<toolbox></toolbox>
		<historybox></historybox>
	</div>
</template>

<script>
	import paper from 'paper';
	import ToolBox from './toolPanel/ToolBox.vue';
	import HistoryBox from './historyPanel/HistoryBox.vue';
	export default {
		components: {
			"historybox": HistoryBox,
			"toolbox": ToolBox
		},
		created() {
			paper.install(window);
		},
		mounted() {
			paper.setup('whiteboard');
		}
	}
</script>


<style lang="scss">
	canvas {
		height: 100%;
		width: 100%;
		background: lightblue;
	}
</style>