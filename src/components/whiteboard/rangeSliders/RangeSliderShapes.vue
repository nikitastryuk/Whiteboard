<template>
    <vue-slider :lazy="true" :min="1" :dotSize="12" :height="3" :interval="3" :processStyle="{'background': 'black'}" :bgStyle="{'backgroundColor': '#e6e9f0'}"
        :sliderStyle="{'backgroundColor': 'black', 'boxShadow': 'unset'}" tooltip="never" :max="16" :width="'168px'" v-model="shapeSize">
    </vue-slider>
</template>

<script>
    import vueSlider from 'vue-slider-component';
    export default {
        data() {
            return {
                shapeSize: this.$store.getters.shapeArgs.size,
            }
        },
        watch: {
            shapeSize: function (size) {
                this.setShapeSize(size);
            }
        },
        components: {
            vueSlider
        },
        methods: {
            setShapeSize(size) {
                this.$store.dispatch('setShapeSize', size);
            }
        }
    }
</script>