<template>
    <div class="cinemaShop">
      <ul class="cinemaShopList" v-for="n in IndexMovieData.cinemaShop">
        <li><p>{{n.name}}</p><span>{{n.away}}</span></li>
        <li>
          <p>￥{{n.price}}<span>起</span></p>
          <span v-if="n.tui" :class="n.tui">退</span>
          <span v-if="n.gai" :class="n.gai">改签</span>
          <span v-if="n.xiao" :class="n.xiao">小食</span>
          <span v-if="n.hui" :class="n.hui">会员卡</span>
          <span v-if="n.du" :class="n.du">杜比全景声厅</span>
          <span v-if="n.lin" :class="n.lin">DTS:X临境音厅</span>
        </li>
        <li v-if="n.discount">
          <span :class="n.discount">惠</span>
          <p>{{n.discont}}</p>
        </li>
        <li v-if="n.cu">
          <span :class="n.cu">促</span>
          <p>{{n.cucont}}</p>
        </li>
        <li v-if="n.ka">
          <span :class="n.ka">卡</span>
          <p>{{n.kacont}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieCinemaShopList",
        props:["IndexMovieData"]
    }
</script>

<style scoped>
  .cinemaShop{
    background-color: white;
    padding: 0 .14rem;
  }
  .cinemaShopList{
    padding: .12rem 0;
    border-bottom: 1px solid #eee;
  }
  .cinemaShopList li{
    display: flex;
    align-items: center;
    line-height: .2rem;
  }
  .cinemaShopList li:first-child{
    justify-content: space-between;
  }
  .cinemaShopList li:first-child p{
    font-size: .15rem;
    color: #0b0b0b;
  }
  .cinemaShopList li:first-child span{
    font-size: .1rem;
    color:#929292;
  }
  .cinemaShopList li:nth-child(2) p{
    font-size: .13rem;
    color:#ff4b0f;
    margin-right: .04rem;
  }
  .cinemaShopList li:nth-child(2) p span{
    font-size: .1rem;
    border:0;
    color:#ff4b0f;
  }
  .cinemaShopList li:nth-child(2) span{
    font-size: .08rem;
    line-height: .12rem;
    padding: 0 .02rem;
    margin-right: .03rem;
    color:#54ad00;
    border:1px solid #54ad00;
    border-radius: .02rem;
  }
  .cinemaShopList li:nth-child(2) .xiao,.cinemaShopList li:nth-child(2) .hui{
    border-color: #fea622;
    color: #fea622;
  }
  .cinemaShopList li:nth-child(3) span,.cinemaShopList li:nth-child(4) span,.cinemaShopList li:nth-child(5) span{
    padding: 0 .02rem;
    line-height: .16rem;
    border-radius: .03rem;
    font-size: .09rem;
    color:white;
  }
  .cinemaShopList li:nth-child(3) p,.cinemaShopList li:nth-child(4) p,.cinemaShopList li:nth-child(5) p{
    font-size: .1rem;
    color: #929292;
    margin-left: .07rem;
  }
  .discount{
    background-color: #fe9900;
  }
  .cu{
    background-color: #ff7978;
  }
  .ka{
    background-color: #a779e0;
  }
</style>
