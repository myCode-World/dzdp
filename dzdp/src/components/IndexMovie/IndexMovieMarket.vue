<template>
    <div class="marketBox">
      <div class="search">
        <a>
          <i class="iconfont icon-sousuo1"></i>
          <span>搜索商品</span>
        </a>
      </div>
      <index-movie-market-swiper :marketData="marketData"></index-movie-market-swiper>
      <index-movie-market-list :marketData="marketData"></index-movie-market-list>
      <div class="love">
        <img src="../../../static/img/movie/love.jpg"/>
        <p>情人节周边和电影更搭哦~</p>
      </div>
      <div class="love">
        <img src="../../../static/img/movie/love2.jpg"/>
        <p>暖冬必备神器~<img src="../../../static/img/movie/snow.jpg" ></p>
      </div>
      <index-movie-market-burst :marketData="marketData"></index-movie-market-burst>
      <index-movie-market-shop :marketData="marketData"></index-movie-market-shop>
    </div>
</template>

<script>
    import IndexMovieMarketSwiper from "./IndexMovieMarkeSwiper"
    import IndexMovieMarketList from "./IndexMovieMarketList"
    import IndexMovieMarketBurst from  "./IndexMovieMarketBurst"
    import IndexMovieMarketShop from "./IndexMovieMarketShop"
    import marketData from "../../data/IndexMovie/IndexMovieData"

    export default {
        name: "IndexMovieMarket",
        components:{
          IndexMovieMarketSwiper,
          IndexMovieMarketList,
          IndexMovieMarketBurst,
          IndexMovieMarketShop
        },
        data(){
          return{
            marketData
          }
        }
    }
</script>

<style scoped>
  .marketBox{
    background-color: #f4f4f4;
  }
  .search{
    padding: .1rem .17rem;
    border-bottom: 1px solid #d1d1d1;
    display: flex;
    background-color: white;
  }
  .search a{
    width: 100%;
    border:1px solid #d1d1d1;
    border-radius: .32rem;
    font-size: .15rem;
    color: #7c7c7c;
    text-align: center;
    line-height: .3rem;
  }
  .love{
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e3e3e3;
    background: white;
    margin-top: .14rem;
  }
  .love img{
    width: 100%;
    height: 1.83rem;
  }
  .love p{
    font-size: .17rem;
    color: #222222;
    font-weight: 700;
    line-height: .49rem;
    margin-left: .11rem;
  }
  .love p img{
    display: inline-block;
    width: .17rem;
    height: .19rem;
  }
</style>
