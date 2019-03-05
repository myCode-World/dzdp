<template>
    <div class="content">
      <index-movie-swiper :IndexMovieData="IndexMovieData"></index-movie-swiper>
      <index-movie-hot-film-list :IndexMovieData="IndexMovieData"></index-movie-hot-film-list>
      <index-movie-cinema-list></index-movie-cinema-list>
      <index-movie-cinema-shop-list :IndexMovieData="IndexMovieData"></index-movie-cinema-shop-list>
    </div>
</template>

<script>
  import IndexMovieSwiper from "./IndexMovieSwiper"
  import IndexMovieHotFilmList from "./IndexMovieHotFilmList"
  import IndexMovieCinemaList from "./IndexMovieCinemaList"
  import IndexMovieCinemaShopList from "./IndexMovieCinemaShopList"

  import IndexMovieData from "../../data/IndexMovie/IndexMovieData"

    export default {
        name: "IndexMovieListFilm",
        components:{
          IndexMovieSwiper,
          IndexMovieHotFilmList,
          IndexMovieCinemaList,
          IndexMovieCinemaShopList
        },
        data(){
          return{
            IndexMovieData
          }
        }
    }
</script>

<style scoped>
  .content{
    background-color: #f7f7f7;
  }
</style>
