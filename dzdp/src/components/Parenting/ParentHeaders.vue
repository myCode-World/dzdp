<template>
    <div id="parentheaders">
      <img src="../../../static/PartThreeImg/left_jt.jpg" @click="GoBack">
      <div>
         <img src="../../../static/PartThreeImg/touxiang.jpg">
         <p>补充宝宝信息</p>
         <img src="../../../static/PartThreeImg/right_small_jt.jpg">
      </div>
      <img src="../../../static/PartThreeImg/searchs.jpg">
    </div>
</template>

<script>
    export default {
        name: "ParentHeaders" ,
        methods:{
          GoBack(){
            this.$router.push("DzIndex")
          }
        }
    }
</script>

<style scoped>
  #parentheaders{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: .08rem .2rem;
    background-color: white;
    height:.52rem;
  }
  #parentheaders div{
    display: -webkit-flex;
    align-items: center;
  }
  #parentheaders div p{
    font-size: .16rem;
    margin-right: .12rem;
  }
  #parentheaders div img:first-child{
    width: .34rem;
    height: .33rem;
    margin-right: .12rem;
  }
  #parentheaders div img:last-child{
    width: .07rem;
    height: .12rem;
  }
  #parentheaders img:first-child{
    width:.13rem ;
    height: .22rem;
  }
  #parentheaders img:last-child{
    width:.22rem ;
    height:.24rem ;
  }
</style>
