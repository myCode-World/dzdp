<template>
    <div class="shopList">
      <div class="shopBox" v-for="n in IndexFoodData.shopBox">
        <img class="shopPic" :src="n.shopPic"/>
        <div class="shopDetail">
          <ul class="shopActive">
            <li>
              <p>{{n.shopName}}</p>
              <span v-if="n.buy" :class="n.buy">买</span>
              <span v-if="n.book" :class="n.book">订</span>
              <span v-if="n.wai" :class="n.wai">外</span>
              <span v-if="n.rowls" :class="n.rowls">排</span>
              <span v-if="n.short" :class="n.short">促</span>
            </li>
            <li>
              <div class="levelBox">
                <img src="../../../static/img/food/star.jpg"/>
                <span class="see">{{n.nums}}条 ￥{{n.price}}/人</span>
              </div>
              <span class="spring">春节营业</span>
            </li>
            <li>
              <span>{{n.lei}} {{n.site}}</span>
              <span>{{n.long}}km</span>
            </li>
            <li><p>{{n.special}}</p></li>
          </ul>
          <div class="shopPrice">
            <p class="discount">
              <span>券</span>
              <span>{{n.discount}}折</span>
              <span>{{n.cash}}代{{n.money}}元</span>
            </p>
            <p class="volume">
              <span>半年销量{{n.counts}}</span>
              <i class="iconfont icon-youjiantou"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexFoodShopList",
        props:["IndexFoodData"]
    }
</script>

<style scoped>
  .shopList{
    display: flex;
    flex-direction: column;
  }
  .shopBox{
    padding: .1rem;
    display: flex;
    background-color: white;
    margin-bottom: .05rem;
  }
  .shopPic{
    height: .9rem;
    margin-right: .1rem;
    border:1px solid #e8e8e8;
  }
  .shopDetail{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .shopActive{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #f0f0f0;
  }
  .shopActive li{
    display: flex;
    align-items: center;
    margin-bottom: .07rem;
  }
  .shopActive li:first-child{
    font-size:.15rem;
    font-weight: 700;
  }
  .shopActive li:first-child span{
    width: .16rem;
    /*height: .16rem;*/
    font-size: .09rem;
    font-weight: 200;
    color: white;
    border-radius: .02rem;
    text-align: center;
    margin-left: .06rem;
    line-height: .16rem;
  }
  .buy{
    margin-left: .09rem;
    background-color: #ff7000;
  }
  .book{
    background-color: #7ec157;
  }
  .out{
    background-color: #6cc7c8;
  }
  .row{
    background-color: #c39bfe;
  }
  .short{
    background-color: #ffba5b;
  }

  .shopActive li:nth-child(2){
    justify-content: space-between;
  }
  .levelBox{
    display: flex;
    align-items: center;
  }
  .shopActive li:nth-child(2) img{
    width: .63rem;
    height: .12rem;
    margin-right: .05rem;
  }
  .see{
    font-size: .12rem;
  }
  .spring{
    width: .48rem;
    height: .16rem;
    background-color: #ff6634;
    color: white;
    font-size: .1rem;
    text-align: center;
  }
  .shopActive li:nth-child(3){
    font-size: .12rem;
    color: #646464;
    justify-content: space-between;
  }
  .shopActive li:nth-child(3) span:last-child{
    color:#555555;
  }
  .shopActive li:last-child p{
    padding: 0 .06rem;
    line-height: .17rem;
    background-color: #feefea;
    font-size: .11rem;
    color: #e4582a;
  }
  .shopPrice{
    padding: .1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .shopPrice p{
    font-size: .12rem;
  }
  .discount span:first-child{
    padding: .02rem .03rem;
    background-color: #fea932;
    font-size: .09rem;
    color: white;
    margin-right: .05rem;
  }
  .discount span:last-child{
    color: #5a5a5a;
    margin-left: .05rem;
  }
  .volume{
    color: #797979;
  }
  .volume .iconfont{
    color: #afafaf;
    font-size: .11rem;
  }
</style>
