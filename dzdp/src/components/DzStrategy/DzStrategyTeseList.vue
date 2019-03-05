<template>
  <div>
    <div class="listBox" v-if="DzStrategyData" v-for=" s in DzStrategyData">
      <div class="shops">
        <img class="shopsImg" :src="s.shopsImg" alt="">
        <div class="shopInfo">
          <h3>{{s.shopsName}}</h3>
          <div class="pingjia">
            <div class="star"><img src="../../../static/img/food/star.jpg"/></div>
            <p class="shoucan"><i class="iconfont icon-shoucang"></i>{{s.shopShouCan}}</p>
          </div>
          <div class="address">
            <p>{{s.addression}}</p>
            <span>{{s.distance}}</span>
          </div>

        </div>
      </div>
      <div class="tuijian">
        <p>推荐理由: <span>{{s.shopsTuijian}}</span></p>
      </div>
      <div class="rank">TOP {{s.shopsRank}}</div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DzStrategyTeseList",
        props:["DzStrategyData"],
    }
</script>

<style scoped>

  .listBox {
    background: #fff;
    display: flex;
    flex-direction: column;
    margin: 0.1rem 0.15rem 0rem;
    padding:0.1rem;
    border: 1px solid #eee;
    border-radius: 0.1rem;
    overflow: hidden;
    position: relative;
    top: -0.23rem;
  }

  .shops{
    display: flex;
    justify-content: flex-start;
  }
  .shopsImg{
    width: 0.69rem;
    height: 0.69rem;
    margin-right: 0.12rem;
    margin-bottom: 0.12rem;
  }

  .shopInfo {
    display: flex;
    flex-direction: column;
  }
  .shopInfo h3{
    font-size: 0.16rem;
  }

  .pingjia {
    width:100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .08rem 0;
  }
  .star img{
    width: 0.6rem;
    height: .12rem;
  }

  .shoucan{
    color: #000;
    font-size: 0.12rem;
  }
  .shoucan i{
    margin-right: 0.1rem;
  }

  .address {
    display: flex;
    align-items: center;
  }
  
  .address p{
    font-size:0.14rem;
    color: #7a7a7a;
    width: 50%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .address span{
    display: block;
    font-size:0.14rem;
    color: #7a7a7a;
  }
  .tuijian {
    border-top: 0.02rem solid #ededed;
  }
  .tuijian p{
    font-size:0.13rem;
    color: #232323;
    padding: 0.05rem 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .tuijian span{
    font-size:0.1rem;
    color: #7a7a7a;
    /*white-space: nowrap;*/
    /*text-overflow: ellipsis;*/
    /*overflow: hidden;*/
  }

  .rank{
    font-size: 0.14rem;
    color: #fff;
    width: auto;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.05rem;
    border-bottom-right-radius: 0.1rem;
    background: #d23818;
  }

</style>
