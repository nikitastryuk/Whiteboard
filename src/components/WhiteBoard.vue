<template>
	<div id="whiteboard">
		<canvas id="myCanvas" resize></canvas>
		<div class="history d-flex">
			<font-awesome-icon icon="undo" />
			<div class="splitter"></div>
			<font-awesome-icon icon="redo" />
		</div>
		<div class="d-flex sidebar">
		<div class="d-flex tools flex-column align-items-center">
			<font-awesome-icon class="m-3" icon="pencil-alt" />
			<font-awesome-icon class="m-3" icon="eraser" />
			<font-awesome-icon class="m-3" icon="circle" />
			<font-awesome-icon class="m-3" icon="font" />
			<font-awesome-icon class="m-3" icon="upload" />
		</div>
		<div class=" ml-4 d-flex flex-column pencilWindow">
		<p>Thickness</p>
	<vue-slider :min="1" :dotSize="12" :height="3" :interval="1" :processStyle= "{'background': 'black'}" :bgStyle="{'backgroundColor': '#e6e9f0'}" :sliderStyle="{'backgroundColor': 'black', 'boxShadow': 'unset'}"  tooltip="never" :max="5" :width="'150px'" v-model="value"></vue-slider>
		<ul class="color-container">
        <li @click="selectColor(c)" v-for="(c, i) in colors" :key="i">{{c}}</li>
      </ul>
		</div>
		</div>
	</div>
</template>

<script>
	import paper from 'paper';
	import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
	import vueSlider from 'vue-slider-component';
	export default {
		name: 'whiteboard',
		components: {
			FontAwesomeIcon,
			vueSlider
		},
		methods: {
			selectColor(color) {
				
			
				paper.setup('myCanvas');
				// Create a simple drawing tool:
				var tool = new Tool();
				var path;

				// Define a mousedown and mousedrag handler
				tool.onMouseDown = function (event) {
					path = new Path();
					console.log(color);
					path.strokeColor = color;
					path.strokeWidth = 10;
					path.add(event.point);
				}

				tool.onMouseDrag = function (event) {
					path.add(event.point);
				
			}
			}	
		},
		data() {
			return {
				value:1,
				colors: [
        '#7841CC',
        '#FFD54F',
        '#00C6C2',
        '#FF0000',
        '#EC008C',
        '#6DCFF6',
        '#FBAF5D',
        '#39B54A',
        '#448CCB'
      ]
			}
		},
		created() {
			paper.install(window);
			
		}
	}
</script>















<style lang="scss">
	.svg-inline--fa {
		font-size: 20px;
	}

	canvas {
		height: 100%;
		width: 100%;
		background: lightgray;

	}

	.sidebar {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: 1%;
		z-index: 100;
		.tools, .pencilWindow{
		
		background-color: #fff;
		padding: 10px 0;
		border-radius: 5px;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .12);
		border: 1px solid #e6e9f0;
		.svg-inline--fa {
			cursor: pointer;
		}
	}
	}

	.history {
		position: absolute;
		top: 1%;
		left: 1%;
		z-index: 100;
		background-color: #fff;
		padding: 10px 0;
		border-radius: 5px;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .12);
		border: 1px solid #e6e9f0;
		svg {
			margin: 0px 10px;
		}
		.splitter {
			width: 1px;
			height: 20px;
			background-color: rgba(0, 0, 0, .2);
		}
	}





</style>