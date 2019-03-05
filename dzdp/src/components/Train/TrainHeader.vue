<template>
  <div class="trainHeader">
    <img src="../../../static/assets/img/back.png" alt="" @click="GoBack">
    <span>学习培训</span>
  </div>
</template>

<script>
    export default {
        name: "TrainHeader",
        methods:{
          GoBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .trainHeader{
    display: flex;
    align-items: center;
    width:100%;
    height:.52rem;
    background:white;
    font-size:.17rem;
    border-bottom:2px solid #ececec;
  }
  .trainHeader img{
    width:.25rem;
    height:.25rem;
    margin-left:.1rem;
    margin-right:1.15rem;
  }
</style>
