<template>
  <div class="togoPage">
    <to-go-header></to-go-header>
    <div class="routerCont">
      <ul class="togoList">
        <li v-for="n in togoData.togoList">
          <img :src="n.img"/>
          <p>{{n.name}}</p>
        </li>
      </ul>
      <div class="togoSwiper"><togo-swiper :togoData="togoData"></togo-swiper></div>
      <div class="discount">
        <p class="title">优惠</p>
        <ul class="discountBox">
          <li><img src="../../../static/img/togo/discount1.jpg"/></li>
          <li>
            <img src="../../../static/img/togo/discount2.jpg"/>
            <p>匠心晚餐</p>
            <span>套餐5折起</span>
          </li>
          <li>
            <img src="../../../static/img/togo/discount3.jpg"/>
            <p>领饭点食力</p>
            <span>喂养袋鼠</span>
          </li>
        </ul>
      </div>
      <togo-meal :togoData="togoData"></togo-meal>
      <togo-shop-list :togoData="togoData"></togo-shop-list>
    </div>
  </div>
</template>

<script>
    import ToGoHeader from "./ToGoHeader"
    import togoSwiper from "./togoSwiper"
    import togoMeal from "./togoMeal"
    import togoShopList from './togoShopList'
    import togoData from "../../data/IndexTogo"

    export default {
        name: "ToGo",
        components:{
          ToGoHeader,
          togoSwiper,
          togoMeal,
          togoShopList
        },
        data(){
          return{
            togoData
          }
        }
    }
</script>

<style scoped>
  .togoPage{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .routerCont{
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .togoList{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: white;
    padding-bottom: .22rem;
  }
  .togoList li{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .14rem;
  }
  .togoList li img{
    width: .43rem;
    height: .43rem;
  }
  .togoList li p{
    font-size: .11rem;
    color:#4d4d4d;
    margin-top: .07rem;
  }
  .togoSwiper{
    display: flex;
    justify-content: center;
    padding: .07rem 0;
  }
  .discount{
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: .14rem .1rem;
  }
  .title{
    font-size: .14rem;
  }
  .discountBox{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: .07rem;
  }
  .discountBox li:first-child img{
    width: 1.43rem;
    height: 1.15rem;
  }
  .discountBox li:nth-child(2),.discountBox li:nth-child(3){
    width: .96rem;
    height: 1.15rem;
    position: relative;
  }
  .discountBox li:nth-child(2) img,.discountBox li:nth-child(3) img{
    width: .96rem;
    height: 1.15rem;
  }
  .discountBox li:nth-child(2) p,.discountBox li:nth-child(3) p{
    font-size: .12rem;
    color: #4c4c4b;
    position: absolute;
    top:.13rem;
    left: .07rem;
  }
  .discountBox li:nth-child(2) span,.discountBox li:nth-child(3) span{
    position: absolute;
    top:.31rem;
    left: .06rem;
    font-size: .1rem;
    color: #f22f29;
  }
  .discountBox li:nth-child(3) span{
    color: #fa7a24;
  }
</style>
