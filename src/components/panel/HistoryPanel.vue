<template>
  <div class="historyPanel">
    <panelToolIcon @click.native="undo" icon="undo"/>
    <panelToolIcon @click.native="redo" icon="redo"/>
  </div>
</template>

<script>
import PanelToolIcon from "./PanelToolIcon";
import history from "../../tools/history.js";
export default {
  components: {
    panelToolIcon: PanelToolIcon
  },
  methods: {
    undo() {
      history.undo();
    },
    redo() {
      history.redo();
    }
  }
};
</script>


<style lang="scss">
.historyPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 170px;
  left: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 8px rgba(0, 0, 0, 0.4);
}
</style>