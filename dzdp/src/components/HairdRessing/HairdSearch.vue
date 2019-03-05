<template>
    <div id="hairdsearch">
      <img src="../../../static/PartThreeImg/left_jt.jpg" @click="GoBack">
      <input type="text" placeholder="输入商户名、店铺">
    </div>
</template>

<script>
    export default {
        name: "HairdSearch",
        methods:{
          GoBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  #hairdsearch{
    height: .45rem;
    border-bottom:1px solid  #d7d7d7;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  #hairdsearch img{
    width: .13rem;
    height: .22rem;
    margin-right: .2rem;
  }
  #hairdsearch input{
    width: 2.83rem;
    height: .31rem;
    border-radius: .15rem;
    background-color: #eeeeee;
    outline: none;
    border:none;
    text-align: center;
    font-size: .15rem;
  }
</style>
