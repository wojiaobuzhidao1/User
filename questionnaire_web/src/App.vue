<template>
  <div>
    <MenuBar style="background: #1874CD; height: 40px"></MenuBar>

    <router-view style="top: 0;"></router-view>
    <go-top></go-top>
    <AboutUs></AboutUs>
  </div>
</template>



<script>
import MenuBar from "./components/MenuBar.vue";
import AboutUs from "./components/AboutUs.vue";
import GoTop from "./components/gotop/GoTop";

export default {
  name: "Index",
  components: { GoTop },
  data() {
    return {
      activeName: "first",
      backgroundDiv: {
        backgroundImage: "url(" + require("../src/assets/img/test2.jpg") + ")",
        backgroundRepeat: "repeat",
        backgroundSize: "100%"
      }
    };
  },

  methods: {},

  components: {
    MenuBar,
    AboutUs
  },

  mounted() {
    // this.init();
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f5f5f5;
  font-weight: 400;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  line-height: 1.5;
}
a {
  cursor: pointer;
  text-decoration: none;
  transition: none 86ms ease-out;
}
a:hover {
  color: #00ccff;
}
.me-area {
  background-color: #fff;
}
html {
  height: 100%;
}
body {
  min-height: 100%;
}
body {
  position: relative;
}

.me-pull-right {
  float: right;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>