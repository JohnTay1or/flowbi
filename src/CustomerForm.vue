<template>
  <el-card class="box-card">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Name">
        <el-input v-model="formInline.CustomerName" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="Active">
        <el-select v-model="formInline.Active" placeholder="Active">
          <el-option label="Yes" value="Y"></el-option>
          <el-option label="No" value="N"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Save</el-button>
      </el-form-item>
    </el-form>
</el-card>
</template>

<script>
  export default {
    data() {
      return {
        formInline: {
          CustomerName: '',
          Active: 'Yes'
        }
      }
    },
    methods: {
      onSubmit() {
        //console.log('submit!');
        var httpdata = {
          "CustomerName": this.formInline.CustomerName,
          "Active": this.formInline.Active
        }
        this.$http.post('customers', httpdata)
          .then(response => {
            Event.$emit('customerAdded')
          }, error => {
            console.log(error)
          })
        this.formInline.CustomerName = ''
        //this.formInline.Active = ''
      }
    }/*,
    created: function () {
      console.log('this.formInline.CustomerName');
      console.log(this.formInline.CustomerName);
    }*/
  }
</script>
