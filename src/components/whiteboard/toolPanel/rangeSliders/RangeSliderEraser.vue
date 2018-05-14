<template>
    <vue-slider :lazy="true" :min="1" :dotSize="12" :height="3" :interval="3" :processStyle="{'background': 'black'}" :bgStyle="{'backgroundColor': '#e6e9f0'}"
        :sliderStyle="{'backgroundColor': 'black', 'boxShadow': 'unset'}" tooltip="never" :max="16" :width="'168px'" v-model="eraserSize">
    </vue-slider>
</template>

<script>
    import vueSlider from 'vue-slider-component';
    export default {
        data() {
            return {
                eraserSize: this.$store.getters.eraserArgs.size,
            }
        },
        watch: {
            eraserSize: function (size) {
                this.setEraserSize(size);
            }
        },
        components: {
            vueSlider
        },
        methods: {
            setEraserSize(size) {
                this.$store.dispatch('setEraserSize', size);
            }
        }
    }
</script>