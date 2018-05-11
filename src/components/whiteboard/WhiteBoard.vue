<template>
	<div>
		<canvas id="whiteboard" resize></canvas>
		<toolbox></toolbox>
	</div>
</template>

<script>
	import paper from 'paper';
	import ToolBox from './ToolBox.vue';
	export default {
		components: {
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