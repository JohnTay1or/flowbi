<template>
  <div class="gap">
    <el-row>
      <el-button @click.native="startHacking">Visual Button</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    startHacking () {
      var embedConfiguration = {
        type: 'report',
        accessToken: 'eyJ0eXAiO...Qron7qYpY9MI',
        id: '5dac7a4a-4452-46b3-99f6-a25915e0fe55',
        embedUrl: 'https://embedded.powerbi.com/appTokenReportEmbed'
      };
      console.log(embedConfiguration);
      //var models = window['powerbi-client'].models;
      //var permissions = models.Permissions.All;
      //console.log('Hi Again');
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
  .gap {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
