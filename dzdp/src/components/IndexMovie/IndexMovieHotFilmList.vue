<template>
    <div class="hotFilmList">
      <div class="title">
        <p>热门电影</p>
        <a>查看全部<i class="iconfont icon-youjiantou"></i></a>
      </div>
      <ul class="filmList">
        <li v-for="n in IndexMovieData.filmList">
          <img :src="n.pic"/>
          <p>{{n.name}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieHotFilmList",
        props:["IndexMovieData"]
    }
</script>

<style scoped>
  .hotFilmList{
    display: flex;
    flex-direction: column;
    padding: 0 .1rem;
    border-bottom: 1px solid #ececec;
    background-color: white;
  }
  .title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    line-height: .37rem;
  }
  .title p{
    font-size: .13rem;
    color: #1a1a1a;
    margin-left: .04rem;
  }
  .title a{
    font-size: .11rem;
    color: #969696;
  }
  .title a .iconfont{
    font-size: .09rem;
    margin-left: .04rem;
  }
  .filmList{
    display: flex;
    overflow:auto;
  }
  .filmList li{
    width: .83rem;
    margin-right: .12rem;
  }
  .filmList::-webkit-scrollbar{
    display: none;
  }
  .filmList img{
    width: .83rem;
    height: 1.15rem;
  }
  .filmList p{
    font-size: .13rem;
    color: #000000;
    line-height: .36rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
