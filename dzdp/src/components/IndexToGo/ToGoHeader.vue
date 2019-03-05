<template>
    <div class="header">
      <i class="iconfont icon-ico_leftarrow" @click="GoBack"></i>
      <a>
        <i class="iconfont icon-sousuo1"></i>
        <p>请输入菜品或商户名</p>
      </a>
    </div>
</template>

<script>
    export default {
        name: "ToGoHeader",
        methods:{
          GoBack(){
            this.$router.push("/DzIndex")
          }
        }
    }
</script>

<style scoped>
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .08rem .16rem;
    background-color: white;
  }
  .header .iconfont{
    font-size: .2rem;
    color: #090909;
  }
  .header a{
    width: 84%;
    display: flex;
    padding: 0 .1rem;
    line-height: .29rem;
    background-color: #e8e8e8;
    border-radius: .29rem;
  }
  .header a .iconfont{
    font-size: .17rem;
    color: #979797;
  }
  .header a p{
    margin-left: .05rem;
    font-size: .12rem;
    color: #a9a8af;
  }
</style>
