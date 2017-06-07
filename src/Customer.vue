<template>
  <div>
    <!--<customerform></customerform>-->
    <customerdata></customerdata>
    <customeredit></customeredit>
  </div>
</template>

<script>
  import CustomerData from './CustomerData.vue'
  import CustomerForm from './CustomerForm.vue'
  import CustomerEdit from './CustomerEdit.vue'
  export default {
    components: {
      customerdata: CustomerData,
      customerform: CustomerForm,
      customeredit: CustomerEdit
    }
  }
</script>
