<template>
    <div class="carHead">
      <i class="iconfont icon-ico_leftarrow" @click="GoBack"></i>
      <a>
        <i class="iconfont icon-sousuo1"></i>
        <span>请输入商品名</span>
      </a>
      <p>
        <i class="iconfont icon-sousuo1"></i>
        <i class="iconfont icon-shoucang"></i>
        <i class="iconfont icon-fenxiang"></i>
      </p>
    </div>
</template>

<script>
    export default {
        name: "shoppingCarHead",
        methods:{
          GoBack(){
            this.$router.push("/IndexToGo")
          }
        }
    }
</script>

<style scoped>
  .carHead{
    width: 100%;
    height: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .carHead .iconfont{
    font-size: .22rem;
    color: white;
  }
  .carHead .iconfont:first-child{
    margin-left: .12rem;
  }
  .carHead a{
    display: none;
    width: 2.4rem;
    padding: 0 .05rem;
    line-height: .27rem;
    background-color: #e1e1e1;
    font-size: .12rem;
    color: #aaaaab;
    border-radius: .27rem;
  }
  .carHead a .iconfont{
    font-size: .14rem;
    color: #aaaaab;
    margin-right: .05rem;
  }
  .carHead p{
    display: flex;
    align-items: center;
    margin-right: .16rem;
  }
  .carHead p i{
    margin-left: .15rem;
  }
</style>
