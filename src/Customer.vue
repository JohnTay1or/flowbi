<template>
  <div id="customer">
    <el-button @click.native="getData">Data Button</el-button>
    <form>
      <span class="error" v-show="!message">
        You must enter a message
      </span>
      <textarea v-model="message"></textarea>
      <button type="submit" v-show="message">Send Message</button>
    </form>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    getData () {
      console.log('In get data')
    }
    /*startHacking () {
      /*var Connection = require('tedious').Connection;
      var Request = require('tedious').Request;
      // Create connection to database
      var config = {
        userName: 'your_username', // update me
        password: 'your_password', // update me
        server: 'your_server.database.windows.net', // update me
        options: {
          database: 'your_database' //update me
        }
      }
      var connection = new Connection(config);

      // Attempt to connect and execute queries if connection goes through
      connection.on('connect', function(err) {
        if (err) {
          console.log(err)
        }
        else{
          //queryDatabase()
          console.log('Success');
        }
});
    }*/
  }
}
</script>

<style>
  .gap {
    margin-top: 5px;
    margin-bottom: 5px;
  }
</style>
