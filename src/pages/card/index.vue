<template>
  <div class="table">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" width="120px"></el-table-column>
      <el-table-column prop="company" label="公司"></el-table-column>
      <el-table-column prop="position" label="职位"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="180px"></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'tableData'
      ])
    }
  }
</script>

<style>
  .table {
    width: 1400px;
    margin: 30px auto;
  }
</style>
