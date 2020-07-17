<template>
  <div class="relative">
    <canvas id="whiteboard" resize v-bind:style="{backgroundImage: `url(${bgImg})` , background: bgColor }"></canvas>
    <mainPanel></mainPanel>
    <historyPanel></historyPanel>
    <bgPanel></bgPanel>
  </div>
</template>

<script>
import paper from "paper";
import MainPanel from "./panel/MainPanel";
import HistoryPanel from "./panel/HistoryPanel";
import bgPanel from "./panel/bgPanel";

export default {
  components: {
    mainPanel: MainPanel,
    historyPanel: HistoryPanel,
    bgPanel,
  },
  created() {
    paper.install(window);
  },
  mounted() {
    paper.setup("whiteboard");
  },
  computed: {
    bgColor: function() {
      return this.$store.getters.bgArgs.color;
    },
    bgImg: function() {
      return this.$store.getters.bgArgs.img;
    },
  },
};
</script>


<style lang="scss">
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
canvas {
  height: 100vh;
  width: 100%;
  background: #133337;
}

div.relative {
  position: relative;
}
</style>