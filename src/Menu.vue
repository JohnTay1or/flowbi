<template>
  <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">FlowBI</el-menu-item>
    <el-submenu index="2">
      <template slot="title">Visualization</template>
      <el-menu-item index="2-1">Map</el-menu-item>
      <el-menu-item index="2-2">Trend</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">Maintain Data</el-menu-item>
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
