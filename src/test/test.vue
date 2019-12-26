<template>
  <el-button type="primary" style="width:48%;" @click="test">重 置</el-button>
</template>

<script>
  import axios from "../request/apis";
    export default {
        name: "test",
        methods: {
          test: function () {
            let data = {
              username: 's',
              password: 'ffsf'
            };
            /*axios.login(data).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })*/
            this.$api.getAll().then(res => {
              console.log(res)
            })
          }
        }
    }
</script>

<style scoped>

</style>
