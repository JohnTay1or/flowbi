<template>
    <el-dialog title="Customer Details" :visible.sync="dialogFormVisible">
    <el-form :model="form">
      <el-form-item v-show="false" label="ID" :label-width="formLabelWidth">
        <el-input v-model="form.id" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Name" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="Active" :label-width="formLabelWidth">
        <el-select v-model="form.active" placeholder="Active">
          <el-option label="Yes" value="Y"></el-option>
          <el-option label="No" value="N"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">Cancel</el-button>
      <el-button type="primary" @click="SaveEdits()">Confirm</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data() {
      return {
        dialogFormVisible: false,
        form: {
          id: '',
          name: '',
          Active: ''
        },
        formLabelWidth: '120px'
      };
    },
    methods: {
      SaveEdits() {
        var httpdata = {
          "CustomerName": this.form.name,
          "Active": this.form.active
        }
        if (this.form.id) {
          this.$http.put('customers/' + this.form.id, httpdata)
            .then(response => {
              Event.$emit('customerAdded')
              this.dialogFormVisible = false
            }, error => {
              console.log(error)
            })
        } else {
          this.$http.post('customers', httpdata)
            .then(response => {
              Event.$emit('customerAdded')
              this.dialogFormVisible = false
            }, error => {
              console.log(error)
            })
        }
      }
    },
    created: function () {
      //Event.$on('customerAdded', () => alert('Handling it differently'));
      Event.$on('customerEdit', (row) => {
        //console.log(row)
        this.dialogFormVisible = true
        this.form.id = row.CustomerId
        this.form.name = row.CustomerName
        this.form.active = row.Active
        //console.log(arg1);
        //console.log(arg2);
      })
    }
  };
</script>
