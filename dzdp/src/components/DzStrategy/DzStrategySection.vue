<template>
  <section>
    <div class="header">
      <div class="headerContent">
        <router-link tag="h3" to="/Local">{{city}} <span></span></router-link>
        <div class="haoyou">
          <img src="../../assets/img/user-01.png" alt="">
          <img src="../../assets/img/user-01.png" alt="">
          <p>2个好友来过  ></p>
        </div>
      </div>
      <div class="info">综合1,449,471当地人数据推荐</div>
    </div>
    <dz-strategy-experience :DzStrategyData="DzStrategyData"></dz-strategy-experience>

    <!--/*必吃特色菜*/-->
    <div class="characteristic">
      <div class="titleHeader">
        <h3>必吃特色菜</h3>
        <p>更多 <i class="iconfont icon-youjiantou"></i></p>
      </div>
      <div class="tese" >
        <a class="teseBox" v-for="(t,index) in DzStrategyData.characteristic" :class="{ oranges:changeRed === index}" @click="oranges(index)">
          <div class="imgBox"><img :src="t.imgPic" alt=""></div>
          <p>{{t.nameTitle}}</p>
        </a>
      </div>
      <dz-strategy-tese :DzStrategyData="DzStrategyData.teseCon[changeRed]"></dz-strategy-tese>
    </div>

    <!--/*地道西安味*/-->
    <dz-strategy-taste-play :DzStrategyData="DzStrategyData.tastePlay"></dz-strategy-taste-play>

    <!--城市特色商圈-->
    <dz-strategy-city-circle :DzStrategyData="DzStrategyData.cityCirle"></dz-strategy-city-circle>

    <!--展示-->
    <dz-strategy-show :DzStrategyData="DzStrategyData.showList"></dz-strategy-show>



  </section>
</template>

<script>
    import DzStrategyExperience from "./DzStrategyExperience";
    import DzStrategyTese from "./DzStrategyTese";
    import DzStrategyTastePlay from "./DzStrategyTastePlay";
    import DzStrategyCityCircle from "./DzStrategyCityCircle";
    import DzStrategyShow from "./DzStrategyShow";
    export default {
        name: "DzStrategySection",
        components: {DzStrategyShow, DzStrategyCityCircle, DzStrategyTastePlay, DzStrategyTese, DzStrategyExperience},
        props:["DzStrategyData"],
        data(){
          return {
            changeRed:0
          }
        },
        computed:{
          city:function() {
            // 通过vuex的getters方法来获取state里面的数据
            return this.$store.getters.getCityFn;
          }
        },
        methods:{
          oranges:function(index){
            this.changeRed = index;
            console.log(this.changeRed);
          }
        }
    }
</script>

<style scoped>
  section {
    flex: 1;
    overflow-y: auto;
  }

  /*头部*/

  .header {
    width: 100%;
    height: 1.28rem;
    background: url("../../assets/img/bg-01.png") no-repeat top center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .headerContent {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerContent h3{
    color: #fff;
    font-size: 0.25rem;
    font-weight: normal;
    position: relative;
    margin-left: 0.2rem;
  }
  .headerContent span{
    width: 0;
    height: 0;
    border: 0.1rem solid transparent;
    border-top-color: #fff;
    position: absolute;
    right: -0.3rem;
    bottom: 0.01rem;
    margin-left: 0.1rem;
  }

  .haoyou {
    display: flex;
    padding: 0.1rem;
    background: #2f2e2e;
    opacity: 0.7;
    border-radius: 0.2rem 0 0 0.2rem;
  }
  .haoyou img{
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
  }
  .haoyou p{
    font-size: 0.14rem;
    color: #fff;
    margin-left: 0.15rem;
  }
  .info {
    color: #fff;
    font-size: 0.14rem;
    margin-left: 0.15rem;
  }


  /*必吃特色菜*/
  .characteristic{
    border-bottom: 0.1rem solid #f0f0f0;
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

  .tese {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .teseBox {
    text-align: center;
    margin-top: 0.1rem;

  }
  .imgBox{
    width:0.56rem;
    height:0.56rem;
    border-radius:50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .imgBox img{
    width:0.52rem;
    height:0.52rem;
    border-radius:50%;
  }
  .teseBox p{
    font-size: 0.15rem;
    margin-top: 0.05rem;
  }

  .oranges .imgBox{
    background: orange;
  }

</style>
