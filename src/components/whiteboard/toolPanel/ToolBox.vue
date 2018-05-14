<template>
    <!--ToolBox -->
    <div class="toolbox">
        <div class="tools">
            <div @click="hideEraserSettings(); hideShapesSettings(); isToolSettingsOpened=!isToolSettingsOpened;" :class="{ active : tool === 'pencil' || tool === 'brush' }"
                class="tool">
                <font-awesome-icon :style="{'color' : toolColor}" :icon="activeTool" />
            </div>
            <div @click="hideToolSettings(); hideShapesSettings(); select('eraser'); isEraserSettingsOpened=!isEraserSettingsOpened;" :class="{ active : tool === 'eraser'}"
                class="tool">
                <font-awesome-icon  style="color:lightblue" icon="eraser" />
            </div>
            <div @click="hideToolSettings(); hideEraserSettings(); isShapesSettingsOpened=!isShapesSettingsOpened;" :style="{'color' : shapeColor}"
                :class="{ active : tool === 'circle'  || tool === 'square'  || tool === 'triangle'  || tool === 'line'}" class="tool">
                <font-awesome-icon :icon="activeShape" />
            </div>
            <div class="tool">
                <font-awesome-icon icon="font" />
            </div>
        </div>
        <!--Tool settings-->
        <div v-if="isToolSettingsOpened" class="toolSettings">
            <div class="toolsList">
                <div @click="select('pencil')" :style="{'color' : toolColor}" :class="{ active : tool === 'pencil'} ">
                    <font-awesome-icon icon="pencil-alt" />
                </div>
                <div @click="select('brush')" :style="{'color' : toolColor}" :class="{ active : tool === 'brush'}">
                    <font-awesome-icon icon="paint-brush" />
                </div>
            </div>
            <p>Thickness</p>
            <rangeSliderTools></rangeSliderTools>
            <div class="colorPallete">
                <div @click="setToolColor(color)" class="color" :style="{'background-color' : color}" v-for="(color, i) in colors" :key="i"></div>
            </div>
        </div>
        <!--Eraser settings-->
        <div v-if="isEraserSettingsOpened" class="eraserSettings">
            <p>Eraser size</p>
            <rangeSliderEraser></rangeSliderEraser>
        </div>
        <!--Shapes settings-->
        <div v-if="isShapesSettingsOpened" class="shapesSettings">
            <div class="shapesList">
                <div class="shape" @click="select('circle')" :style="{'color' : shapeColor}" :class="{ active : tool === 'circle'}">
                    <font-awesome-icon icon="circle" />
                </div>
                <div @click="select('square')" :style="{'color' : shapeColor}" :class="{ active : tool === 'square'}" class="shape">
                    <font-awesome-icon icon="square" />
                </div>
                <div @click="select('triangle')" :style="{'color' : shapeColor}" :class="{ active : tool === 'triangle'}" class="shape">
                    <font-awesome-icon icon="exclamation-triangle" />
                </div>
                <div @click="select('line')" :style="{'color' : shapeColor}" :class="{ active : tool === 'line'}" class="shape">
                    <font-awesome-icon icon="window-minimize" />
                </div>
            </div>
            <p>Thickness</p>
            <rangeSliderShapes></rangeSliderShapes>
            <div class="colorPallete">
                <div @click="setShapeColor(color)" class="color" :style="{'background-color' : color}" v-for="(color, i) in colors" :key="i"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import colorPalette from '../../../assets/colorPalette';
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import RangeSliderTools from './rangeSliders/RangeSliderTools.vue';
    import RangeSliderEraser from './rangeSliders/RangeSliderEraser.vue';
    import RangeSliderShapes from './rangeSliders/RangeSliderShapes.vue';
    export default {
        data() {
            return {
                isToolSettingsOpened: false,
                isEraserSettingsOpened: false,
                isShapesSettingsOpened: false,
                colors: colorPalette
            }
        },
        computed: {
            activeTool: function () {
                if (this.tool === 'pencil') {
                    return 'pencil-alt';
                } else if (this.tool === 'brush') {
                    return 'paint-brush';
                } else {
                    return 'pencil-alt';
                }
            },
            activeShape: function () {
                if (this.tool === 'cricle') {
                    return 'circle';
                } else if (this.tool === 'square') {
                    return 'square';
                } else if (this.tool === 'triangle') {
                    return 'exclamation-triangle';
                } else if (this.tool === 'line') {
                    return 'window-minimize';
                } else {
                    return 'circle';
                }
            },
            tool: function () {
                return this.$store.getters.tool
            },
            toolColor: function () {
                return this.$store.getters.toolArgs.color
            },
            shapeColor: function () {
                return this.$store.getters.shapeArgs.color
            },
            toolSize: function () {
                return this.$store.getters.toolArgs.size
            }
        },
        components: {
            FontAwesomeIcon,
            RangeSliderTools,
            RangeSliderEraser,
            RangeSliderShapes
        },
        methods: {
            hideToolSettings() {
                this.isToolSettingsOpened = false;
            },
            hideEraserSettings() {
                this.isEraserSettingsOpened = false;
            },
            hideShapesSettings() {
                this.isShapesSettingsOpened = false;
            },
            setToolColor(color) {
                this.$store.dispatch('setToolColor', color);
            },
            setShapeColor(color) {
                this.$store.dispatch('setShapeColor', color);
            },
            select(tool) {
                this.$store.dispatch('setWhiteboardTool', tool);
            }
        },
        mounted() {
            this.$store.dispatch('setWhiteboardTool', 'pencil');

        }
    }
</script>


<style lang="scss">
    //Toolbox
    .toolbox {
        display: flex;
        position: absolute;
        top: 10px;
        left: 10px;
        .tools {
            display: flex;
            align-items: center;
            flex-direction: column;
            height: min-content;
            .tool {
                padding: 10px;
                margin: 5px;
                &:not(.active):hover {
                    background: #e6e9f0;
                    border-radius: 5px;
                }
            }
        }
        .tools,
        .toolSettings,
        .eraserSettings,
        .shapesSettings {
            background-color: #fff;
            padding: 10px 5px;
            border-radius: 5px;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .12);
            border: 1px solid #e6e9f0;
        }
    } //Toolbox end
    //Tool select 
    .eraserSettings {
        width: 180px;
        margin-left: 5px;
        margin-top: 65px;
        height: min-content;
        p {
            margin: 0px 0px 2px 4px;
            font-size: 12px;
        }
    }

    .shapesSettings {
        width: 180px;
        margin-left: 5px;
        margin-top: 113px;
        height: min-content;
        .shapesList {
            display: flex;
            justify-content: space-around;
            .shape {
                padding: 10px;
                &:not(.active):hover {
                    background: #e6e9f0;
                    border-radius: 5px;
                }
            }
        }
        p {
            margin: 0px 0px 2px 4px;
            font-size: 12px;
        }
    }

    .toolSettings {
        width: 180px;
        margin-left: 5px;
        height: min-content;
        .toolsList {
            display: flex;
            div {
                padding: 10px;
                margin-top: 5px;
                &:not(.active):hover {
                    background: #e6e9f0;
                    border-radius: 5px;
                }
            }
        }
        p {
            margin: 0px 0px 2px 4px;
            font-size: 12px;
        }
    } //Tool select end 
    //Shared
    .active {
        background: #e1e8f0;
        border-radius: 5px;
    }

    .colorPallete {
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        .color {
            width: 30px;
            height: 30px;
            margin: 5px;
            border-radius: 15px;
            transition: opacity .2s;
            border: 1px solid rgba(0, 0, 0, .1);
            &:not(.active):hover {
                cursor: pointer;
                border: 1px solid rgba(0, 0, 0, .5);
            }
        }
    }

    .svg-inline--fa {
        font-size: 20px;
        cursor: pointer;
        height: 20px;
        width: 20px;
    } //Shared end
</style>