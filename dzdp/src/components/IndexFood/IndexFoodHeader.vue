<template>
    <div class="header">
        <i class="iconfont icon-ico_leftarrow" @click="GoBack"></i>
        <a class="search">
          <i class="iconfont icon-sousuo1"></i>
          <p>在美食频道内搜索</p>
        </a>
        <a class="map">
          <i class="iconfont icon-ditu"></i>
          <p>地图</p>
        </a>
    </div>
</template>

<script>
    export default {
        name: "IndexFoodHeader",
        methods:{
          GoBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  .header{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    padding: .09rem 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .iconfont{
    font-size: .21rem;
    color: white;
    margin-left: .09rem;
  }
  .search{
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: .24rem;
    padding: .07rem ;
    width: 2.85rem;
  }
  .search .iconfont{
    font-size: .14rem;
    color: #c8c8c8;
    margin-right: .05rem;
    margin-left: 0;
  }
  .search p{
    font-size: .11rem;
    color: #c8c8c8;
  }
  .map{
    display: flex;
    flex-direction: column;
    margin-right: .09rem;
  }
  .map .iconfont{
    font-size: .2rem;
    color: white;
    margin-left: 0;
  }
  .map p{
    font-size: .09rem;
    color: white;
  }
</style>
