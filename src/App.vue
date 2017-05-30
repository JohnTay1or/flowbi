<template>
  <div id="app">
    <app-menu></app-menu>
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
    <el-button>Default Button</el-button>
    <el-button type="primary">Primary Button</el-button>
    <el-button type="text">Text Button</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Use FlowBI today!'
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
