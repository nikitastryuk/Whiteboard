<template>
    <vue-slider :lazy="true" :min="1" :dotSize="12" :height="3" :interval="1" :processStyle="{'background': 'black'}" :bgStyle="{'backgroundColor': '#e6e9f0'}"
        :sliderStyle="{'backgroundColor': 'black', 'boxShadow': 'unset'}" tooltip="never" :max="5" :width="'168px'" v-model="toolSize">
    </vue-slider>
</template>

<script>
    import vueSlider from 'vue-slider-component';
    export default {
        data() {
            return {
                toolSize: this.$store.getters.toolArgs.size,
            }
        },
        watch: {
            toolSize: function (size) {
                this.setToolSize(size);
            }
        },
        components: {
            vueSlider
        },
        methods: {
            setToolSize(size) {
                this.$store.dispatch('setToolSize', size);
            }
        }
    }
</script>