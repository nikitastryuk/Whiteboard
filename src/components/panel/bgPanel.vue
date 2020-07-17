<template>
<div class="bgPanel">
	<div class="actionsPanel">
	  <panelToolIcon
	    @click.native="toggleToolSettings"
	    :toolColor="bgColor"
	    icon="adjust"
	  />
    <panelToolIcon
      @click.native="toggleBG"
      toolColor="#133337"
      icon="image"
    />

	</div>

	<div class="actionSettingsPanel">
	  <panelToolSettings v-if="isToolSettingsOpened">
        <colorPicker
          :onSelectColor="setColor"
          
          slot="settingsColorPicker"
          :colors="bgcolors"
          style="width:270px;"
        />
    </panelToolSettings>
    <panelToolSettings v-if="isBgOpened">
      <div slot="settingsColorPicker">
        <label for="avatar">Choose a picture:</label>

        <input type="file"
         @change="onFileChange"
         accept="image/png, image/jpeg">
        <button @click="setImage" style="margin-top:5px;">SetImage</button>
      </div>
    </panelToolSettings>

  </div>
</div>
</template>

<script>
import PanelToolIcon from "./PanelToolIcon";
import ColorPicker from "./../ColorPicker";
import colorPalette from "../../config/colorPalette.js";
import PanelToolSettings from "./PanelToolSettings";

export default {
	props: ['bgcolor'],
	components : {
	    panelToolIcon: PanelToolIcon,
    	panelToolSettings: PanelToolSettings,
    	colorPicker: ColorPicker,
    	     	
    },
    data() {
    	return {
   			isToolSettingsOpened: false,
		    bgcolors: colorPalette,
		    isBgOpened: false,
        image:''
    	}
    },
    methods : {
    	toggleToolSettings() {
	      this.isToolSettingsOpened = !this.isToolSettingsOpened;
        this.isBgOpened = false;
    	},
      toggleBG() {
        this.isBgOpened = !this.isBgOpened;
        this.isToolSettingsOpened = false;
      },
    	setColor(color) {
	      this.$store.dispatch("setbgColor", color);
        this.$store.dispatch("setEraserColor", color);
        this.removeImage();
	    },
      setImage() {
        this.$store.dispatch("setbgImg",this.image);
        this.toggleBG();
      },

      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.image = e.target.result;
        };
        reader.readAsDataURL(file);

      },
      removeImage: function () {
        this.image = ''
        this.$store.dispatch("setbgImg",this.image);
      },
    },
    computed: {
    	bgColor: function() {
	      return this.$store.getters.bgArgs.color;
	    },
    }
}
</script>
<style>
.bgPanel {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 150px;
  left: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 30px 8px rgba(0, 0, 0, 0.4);
}
</style>