<template>
    <!--ToolBox -->
    <div class="toolbox">
        <div class="tools">
            <div @click="hideEraserSettings(); isToolSettingsOpened=!isToolSettingsOpened;" :class="{ active : tool === 'pencil' || tool === 'brush' }" class="tool">
                <font-awesome-icon :style="{'color' : toolColor}" :icon="activeTool" />
            </div>
            <div @click="hideToolSettings(); isEraserSettingsOpened=!isEraserSettingsOpened;"  :class="{ active : tool === 'eraser'}" class="tool">
                <font-awesome-icon  @click="select('eraser')" icon="eraser" />
            </div>
            <div class="tool">
                <font-awesome-icon icon="circle" />
            </div>
            <div class="tool">
                <font-awesome-icon icon="font" />
            </div>
            <div class="tool">
                <font-awesome-icon icon="upload" />
            </div>
        </div>
        <!--Tool settings-->
        <div v-if="isToolSettingsOpened"  class="toolSettings">
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
    </div>
</template>

<script>
    import colorPalette from '../../assets/colorPalette';
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
    import RangeSliderTools from './RangeSliderTools.vue';
    import RangeSliderEraser from './RangeSliderEraser.vue';
    export default {
        data() {
            return {
                isToolSettingsOpened: false,
                isEraserSettingsOpened: false,
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
            tool: function () {
                return this.$store.getters.tool
            },
            toolColor: function () {
                return this.$store.getters.toolArgs.color
            },
            toolSize: function () {
                return  this.$store.getters.toolArgs.size
            }
        },
        components: {
            FontAwesomeIcon,
            RangeSliderTools,
            RangeSliderEraser
        },
        methods: {
            hideToolSettings() {
                this.isToolSettingsOpened = false;
            },
            hideEraserSettings() {
                this.isEraserSettingsOpened = false;
            },
            setToolColor(color) {
                this.$store.dispatch('setToolColor', color);
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
        top: 1%;
        left: 1%;
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
        .eraserSettings {
            background-color: #fff;
            padding: 10px 5px;
            border-radius: 5px;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, .12);
            border: 1px solid #e6e9f0;
            .svg-inline--fa {
                cursor: pointer;
            }
        }
        .svg-inline--fa {
            font-size: 20px;
        }
    } //Toolbox end
    //Tool select 
    .eraserSettings{
        width: 180px;
        margin-left: 5px;
        margin-top: 70px;
        height: min-content;
        p{
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
                margin: 5px;
                &:not(.active):hover {
                    background: #e6e9f0;
                    border-radius: 5px;
                }
            }
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
        p{
            margin: 0px 0px 2px 4px;
            font-size: 12px;
        }
    } //Tool select end 
    .active {
        background: lightgray;
        border-radius: 5px;
    }
</style>