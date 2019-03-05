<template>
  <div id="headers">
    <img src="../../../static/PartThreeImg/left_jt.jpg" @click="actions">
    <div>
      <img src="../../../static/PartThreeImg/fenxiang.jpg">
      <img src="../../../static/PartThreeImg/shoucang.jpg">
      <img src="../../../static/PartThreeImg/zhankai.jpg">
    </div>
  </div>
</template>

<script>
    export default {
        name: "DetailsHeaders",
        methods:{
          actions(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  #headers{
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .21rem;
    height: .47rem;
    background-color: white;
  }
  #headers>img {
    width: .15rem;
    height: .22rem;
  }
  #headers div{
    display: -webkit-flex;
    align-items: center;
  }
  #headers div img{
    width: .21rem;
    height: .2rem;
    margin-left: .21rem;
  }
</style>
