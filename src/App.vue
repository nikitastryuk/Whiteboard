<template>
  <div id="app">
    <whiteboard></whiteboard>
    
  </div>
</template>

<script>
import Whiteboard from "./components/WhiteBoard.vue";
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    "whiteboard": Whiteboard
  }
}
</script>

<style lang="scss">
canvas{
  height: 100%;
  width: 100%;
}
</style>
