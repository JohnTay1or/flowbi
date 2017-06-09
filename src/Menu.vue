<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">
      <router-link to="/">
        <div class="container">
          <img src="./assets/FlowBI Logo.png" class="image">
        </div>
      </router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">Visualization</template>
      <el-menu-item index="2-1"><a href="http://127.0.0.1:1337/">Map</a></el-menu-item>
      <!--<el-menu-item index="2-1"><router-link to="/visual">Map</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="/visual">Trend</router-link></el-menu-item>-->

    </el-submenu>
    <el-menu-item index="3"><router-link to="/customer">Maintain Data</router-link></el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.container {
    width: 100px;
    height: 60px;
    margin-top: 10px;
    margin-bottom: 10px;
}

/* resize images */
.container img {
    width: 100%;
    height: auto;
}
</style>
