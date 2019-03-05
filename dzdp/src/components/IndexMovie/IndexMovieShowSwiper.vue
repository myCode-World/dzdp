<template>
  <div id="showSwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in IndexMovieData.showSwiper"><img :src="n.pic"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import "../../../node_modules/swiper/dist/css/swiper.css";
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"

  export default {
    name: "IndexMovieShowSwiper",
    mounted(){
      setTimeout(() => {
        let mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          loop: true, // 循环模式选项
          autoplay: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      }, 100)
    },
    props:["IndexMovieData"]
  }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: 1rem;
  }
  #showSwiper{
    width: 100%;
    height: 1rem;
  }

  #showSwiper .swiper-pagination{
    left: 120px;
    bottom: -24px;
  }

</style>
<style>
  #showSwiper .swiper-pagination-bullet{
    width: .16rem;
    height: .03rem;
    border-radius: .03rem;
    background-color:white;
    opacity: .5;
  }
  #showSwiper .swiper-pagination-bullet-active{
    background-color: white;
    opacity: 1;
  }
  #showSwiper .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 .1rem;
  }
</style>
