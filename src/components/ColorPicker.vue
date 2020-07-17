<template>
  <div class="colorPicker">
    <div
      @click="selectColor(color)"
      class="color"
      :style="{'background-color' : color}"
      v-for="(color, i) in colors"
      :key="i"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["colors", "onSelectColor"],
  methods: {
    selectColor: function(color) {
      this.onSelectColor(color);
    }
  }
};
</script>


<style>
.colorPicker {
  display: flex;
  flex-wrap: wrap;

}
.color {
  width: 15px;
  height: 15px;
}
</style>