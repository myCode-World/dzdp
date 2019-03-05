<template>
  <div class="introBox">
    <div class="intro">
      <img :src="DzStrategyData.conPic" alt="">
      <h3>{{DzStrategyData.nameHead}}</h3>
      <p>{{DzStrategyData.introTxt}}</p>
    </div>
    <dz-strategy-tese-list :DzStrategyData="DzStrategyData.shops"></dz-strategy-tese-list>
    <div class="lookMore">点击查看更多{{DzStrategyData.nameHead}}  <i class="iconfont icon-youjiantou"></i></div>
  </div>

</template>

<script>
    import DzStrategyTeseList from "./DzStrategyTeseList";
    export default {
        name: "DzStrategyTese",
        components: {DzStrategyTeseList},
        props:["DzStrategyData"],
    }
</script>

<style scoped>
  .introBox {
    margin: 0.15rem;
    position: relative;
  }
  .intro {
    border-radius: 0.1rem 0.1rem 0 0;
    overflow: hidden;
  }
  .intro h3{
    font-size: 0.22rem;
    position: absolute;
    top: 0.1rem;
    left: 0.15rem;
  }
  .intro p{
    font-size: 0.15rem;
    position: absolute;
    top: 0.5rem;
    left: 0.2rem;
    width: 60%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:3;
    overflow: hidden;

  }
  .intro img{
    width: 100%;
    height:1.6rem;
  }

  .lookMore {
    text-align: center;
    color: #777777;
    font-size: 0.12rem;
  }
  .lookMore i{
    font-size: 0.12rem;
  }

</style>
