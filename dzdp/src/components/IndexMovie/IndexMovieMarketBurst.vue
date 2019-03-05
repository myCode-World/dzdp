<template>
  <div>
    <div class="burst" v-for="n in marketData.marketBurst">
      <div class="burstTitle">
        <p>{{n.title}}</p>
        <a><span>更多</span><i class="iconfont icon-youjiantou"></i></a>
      </div>
      <div class="burstGoodsList">
        <div class="burstGoodsbox">
          <h3>{{n.price1}}元</h3>
          <p>{{n.intro1}}</p>
          <img :src="n.pic1"/>
        </div>
        <div class="little">
          <div class="littleBox">
            <div>
              <h3>{{n.price2}}元</h3>
              <p>{{n.intro2}}</p>
            </div>
            <img :src="n.pic2"/>
          </div>
          <div class="littleBox">
            <div>
              <h3>{{n.price3}}元</h3>
              <p>{{n.intro3}}</p>
            </div>
            <img :src="n.pic3"/>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<script>
    export default {
        name: "IndexMovieMarketBurst",
        props:["marketData"]
    }
</script>

<style scoped>
  .burst{
    display: flex;
    flex-direction: column;
    background: white;
    margin-top: .08rem;
    border-bottom: 1px solid #dfdfdf;
  }
  .burstTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
  }
  .burstTitle p{
    font-size: .15rem;
    line-height: .41rem;
    margin-left: .11rem;
  }
  .burstTitle a{
    display: flex;
  }
  .burstTitle a span{
    font-size: .13rem;
    color:#878787;
  }
  .burstTitle a .iconfont{
    font-size: .16rem;
    color: #727272;
    margin-left: .1rem;
    margin-right: .12rem;
  }
  .burstGoodsList{
    display: flex;
    align-items: center;
  }
  .burstGoodsbox{
    display: flex;
    flex-direction: column;
    padding: 0 .1rem .11rem;
    border-right: 1px solid #dfdfdf;
  }
  .burstGoodsbox h3,.littleBox div h3{
    font-size: .15rem;
    line-height: .42rem;
  }
  .burstGoodsbox p,.littleBox div p{
    font-size: .13rem;
    font-weight: 700;
    color: #888888;
  }
  .burstGoodsbox img{
    width: 1.48rem;
    height: 1.48rem;
    margin-top: .14rem;
  }
  .little{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .littleBox{
    display: flex;
    justify-content: space-between;
    padding: 0 .1rem;
  }
  .littleBox:first-child{
    border-bottom: 1px solid #dfdfdf;

  }
  .littleBox div{
    width: 50%;
    display: flex;
    flex-direction: column;
  }
  .littleBox img{
    width: 1.05rem;
    height: 1.06rem;
  }
</style>
