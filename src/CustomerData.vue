<template>
  <el-card class="box-card">
    <!--<i class="el-icon-plus gap"></i>-->
    <h4>Customers</h4>
    <el-button
      @click.native.prevent="addRow()"
      type="text"
      size="small"
      class="gap">
      Add
    </el-button>
    <div>
      <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%">
        <!--<el-table-column
          type="index"
          width="50">
        </el-table-column>
        <el-table-column
          v-show="false"
          property="CustomerId"
          label="ID"
          width="120">
        </el-table-column>-->
        <el-table-column
          property="CustomerName"
          label="Name"
          style="width: 40%">
        </el-table-column>
        <el-table-column
          property="Active"
          label="Active"
          style="width: 20%">
        </el-table-column>
        <!--<el-table-column
          v-show="false"
          property="Enabled"
          label="Enabled"
          width="120">
        </el-table-column>-->
        <el-table-column
          label="Operations"
          style="width: 40%">
          <template scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              Remove
            </el-button>
            <el-button
              @click.native.prevent="editRow(scope.$index, tableData)"
              type="text"
              size="small">
              Edit
            </el-button>
            <el-button v-if="tableData[scope.$index].enabled"
              @click.native.prevent="disableRow(scope.$index, tableData)"
              type="text"
              size="small">
              Disable
            </el-button>
            <el-button v-if="!tableData[scope.$index].enabled"
              @click.native.prevent="enableRow(scope.$index, tableData)"
              type="text"
              size="small">
              Enable
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--<div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">Select second row</el-button>
        <el-button @click="setCurrent()">Clear selection</el-button>
      </div>-->
    </div>
    <!--<el-button@click="fetchData" size="small">Get Data</el-button>-->
  </el-card>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        currentRow: null
      }
    },
    methods: {
      setCurrent(row) {
        this.$refs.singleTable.setCurrentRow(row);
      },
      handleCurrentChange(val) {
        this.currentRow = val;
      },
      deleteRow(index, rows) {
        this.$http.delete('customers/' + rows[index].CustomerId)
          .then(response => {
            //console.log(response);
          }, error => {
            console.log(error);
          })
        rows.splice(index, 1);
      },
      disableRow(index, rows) {
        //console.log('disableRow');
        var httpdata = {
          "Active": "N"
        }
        this.$http.put('customers/' + rows[index].CustomerId, httpdata)
          .then(response => {
            //console.log(response);
            this.fetchData()
          }, error => {
            console.log(error);
          })
        //rows.splice(index, 1);
      },
      enableRow(index, rows) {
        //console.log('disableRow');
        var httpdata = {
          "Active": "Y"
        }
        this.$http.put('customers/' + rows[index].CustomerId, httpdata)
          .then(response => {
            //console.log(response);
            this.fetchData()
          }, error => {
            console.log(error);
          })
        //rows.splice(index, 1);
      },
      editRow(index, rows) {
        //console.log(rows);
        Event.$emit('customerEdit', rows[index])
      },
      addRow() {
        Event.$emit('customerEdit', {CustomerId: '', CustomerName: '', Active: 'Y'})
      },
      fetchData() {
        //console.log('In fetch data');
        this.$http.get('customers')
          .then(response => {
            return response.json();
          })
          .then(data => {
            //console.log(data);
            data.forEach(function (row) {
              if (row.Active === 'Y') {
                row.enabled = true;
              } else {
                row.enabled = false;
              }
            })
            this.tableData = data;
          })
      }
    },
    created: function () {
      this.fetchData();
      //Event.$on('customerAdded', () => alert('Handling it differently'));
      Event.$on('customerAdded', () => this.fetchData())
    }
  }
</script>

<style>
  .gap {
    margin-bottom: 15px;
  }
</style>
