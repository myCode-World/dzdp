<template>
    <div class="cityCircle">
      <div class="titleHeader">
        <h3>城市特色商圈</h3>
        <p>更多 <i class="iconfont icon-youjiantou"></i></p>
      </div>
      
      <div class="cityList" v-for=" c in DzStrategyData">
        <img :src="c.imgPic" alt="">
        <div class="contxt">
          <h4 class="circleName">民乐园</h4>
          <div class="sign">
            <p>当地小吃聚集</p>
            <p>内含明胜古迹</p>
          </div>
          <ul class="tips">
            <li><span>·</span>永兴坊聚集了许多西安特色小吃</li>
            <li><span>·</span>步行街是情侣休闲娱乐的好去处</li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DzStrategyCityCircle",
        props:["DzStrategyData"]
    }
</script>

<style scoped>
  .cityCircle {
    width: 100%;
    padding-bottom: 0.16rem;
    border-bottom: 0.1rem solid #f0f0f0;
  }
  .cityCircle .titleHeader{
    margin-top:0.15rem;
    margin-bottom:0.15rem;
  }
  .titleHeader {
    display: flex;
    justify-content: space-between;
    margin:0 0.1rem ;
  }
  .titleHeader h3{
    font-size: 0.18rem;
  }
  .titleHeader p{
    color: #656565;
    font-size: 0.14rem;
  }
  .cityList {
    display: flex;
    padding: 0.1rem;
    margin: 0 0.1rem;
    border: 2px solid #eee;
    border-radius: 0.1rem;
  }
  .cityList img{
    width: 0.68rem;
    height: 0.68rem;
    margin-right: 0.15rem;
  }
  .circleName {
    color: #000;
    font-size: 0.2rem;
  }
  .sign{
    display: flex;
  }
  .sign p{
    color: #000;
    font-size: 0.16rem;
    border: 1px solid #eee;
    padding: 0.05rem;
    margin: 0 0.05rem;
  }
  .tips li{
    font-size: 0.14rem;
  }
  .tips span{
    font-size: 0.2rem;
    margin: 0 0.1rem;
  }

</style>
