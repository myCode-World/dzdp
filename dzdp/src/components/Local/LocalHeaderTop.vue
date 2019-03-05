<template>
  <div class="headerTop">
    <a href="javascript:;" @click="GoBack"><img src="../../../static/assets/img/cuo.png" alt=""></a>
    <a href="javascript:;" class="seach">
      <img src="../../../static/assets/img/seach.png" alt="">
      <span>输入城市名或拼音查询</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "LocalHeaderTop",
        methods:{
          GoBack(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  .headerTop{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:.08rem;
  }
  .headerTop a img{
    width:.2rem;
    height:.2rem;
  }
  .seach{
    display:flex;
    align-items: center;
    justify-content: center;
    width:3.04rem;
    height:.36rem;
    border-radius:.15rem;
    background:#e8e8e8;
  }
  .seach span{
    font-size:.14rem;
    color:#9c9c9c;
    margin-left:.05rem;
  }
</style>
