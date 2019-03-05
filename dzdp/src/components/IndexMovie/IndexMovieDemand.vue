<template>
    <div class="pages">
      <div class="search">
        <a>
          <i class="iconfont icon-sousuo1"></i>
          <span>搜索可点播影片</span>
        </a>
      </div>
      <index-movie-demand-list :demandData="demandData"></index-movie-demand-list>
      <div class="depot">
        <p>点播影片库</p>
        <p><span>全部</span><i class="iconfont icon-youjiantou"></i></p>
      </div>
      <index-movie-personal-cinema :demandData="demandData"></index-movie-personal-cinema>
    </div>
</template>

<script>
    import IndexMovieDemandList from "./IndexMovieDemandList"
    import IndexMoviePersonalCinema from "./IndexMoviePersonalCinema"
    import demandData from "../../data/IndexMovie/IndexMovieData"

    export default {
        name: "IndexMovieDemand",
        components:{
          IndexMovieDemandList,
          IndexMoviePersonalCinema
        },
        data(){
          return{
            demandData
          }
        }
    }
</script>

<style scoped>
  .pages{
    background-color: #f0efed;
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
  .depot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 .18rem;
    background-color: white;
    margin-top: .11rem;
    margin-bottom: .12rem;
  }
  .depot p{
    line-height: .58rem;
    font-size: .15rem;
    font-weight: 700;
    color:#272727;
  }
  .depot p:last-child span{
    font-size: .14rem;
    font-weight: normal;
    color: #6c6c6c;
  }
  .depot p:last-child .iconfont{
    font-size: .14rem;
    color: #949494;
    margin-left: .12rem;
  }
</style>
