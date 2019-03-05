<template>
    <div class="showPage">
      <index-movie-show-swiper :IndexMovieData="IndexMovieData"></index-movie-show-swiper>
      <ul class="showClassList">
        <li v-for="n in IndexMovieData.showClassList">
          <img :src="n.pic"/>
          <p>{{n.name}}</p>
        </li>
      </ul>
      <div class="banner"><img src="../../../static/img/movie/showBanner.jpg"/></div>
      <div class="discoverBox">
        <p>- 发现精彩 -</p>
        <div class="imgBox">
          <img src="../../../static/img/movie/seeShow1.jpg"/>
          <img src="../../../static/img/movie/seeShow2.jpg"/>
        </div>
      </div>
      <div class="discoverBox">
        <p>- 热门场馆 -</p>
        <div class="hotBox">
          <div class="online" v-for="n in IndexMovieData.discoverBoxData">
            <h3>{{n.name}}</h3>
            <a><span>2场在线演出</span><i class="iconfont icon-youjiantou"></i></a>
            <div class="onlinePic">
              <div><img :src="n.pic1"/><p>{{n.pic1name}}</p></div>
              <div><img :src="n.pic2"/><p>{{n.pic2name}}</p></div>
            </div>
          </div>
        </div>
      </div>
      <index-movie-show-for-you :IndexMovieData="IndexMovieData"></index-movie-show-for-you>
    </div>
</template>

<script>
    import IndexMovieShowSwiper from "./IndexMovieShowSwiper"
    import IndexMovieShowForYou from "./IndexMovieShowForYou"
    import IndexMovieData from "../../data/IndexMovie/IndexMovieData"

    export default {
        name: "IndexMovieShow",
        components:{
          IndexMovieShowSwiper,
          IndexMovieShowForYou
          },
        data(){
            return{
              IndexMovieData
            }
        }
    }
</script>

<style scoped>
  .showPage{
    background-color: #f0f0f0;
  }
  .showClassList{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: white;
  }
  .showClassList li{
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .15rem;
    margin-bottom: .09rem;
  }
  .showClassList li img{
    width: .51rem;
    height: .51rem;
  }
  .showClassList li p{
    font-size: .15rem;
    color:#313131;
  }
  .banner{
    background-color: white;
    padding: .26rem .13rem;
  }
  .banner img{
    width: 3.5rem;
    height: .68rem;
  }
  .discoverBox{
    display: flex;
    flex-direction: column;
    margin-top: .13rem;
    background-color: white;
    padding-bottom: .26rem;
  }
  .discoverBox p{
    width: 100%;
    text-align: center;
    font-size: .18rem;
    color: #303030;
    font-weight: 800;
    line-height: .5rem;
  }
  .imgBox,.hotBox{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .imgBox img{
    width: 1.7rem;
    height: .99rem;
    border-radius: .04rem;
  }
  .imgBox img:first-child{
    margin-right: .05rem;
  }
  .online{
    width: 38%;
    background-color: #f7f7f7;
    padding: .1rem .12rem;

  }
  .online:first-child{
    margin-right: .1rem;
  }
  .online h3{
    font-size: .19rem;
    color: #343434;
  }
  .online a{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: .33rem;
  }
  .online a span{
    font-size: .15rem;
    color:#888888;
  }
  .onlinePic{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .onlinePic img{
    width: .69rem;
    border-radius: .04rem;
  }
  .onlinePic div p{
    font-size: .15rem;
    color:#3d3d3d;
    line-height: .19rem;
    width: .69rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin-top: .08rem;
  }
</style>
