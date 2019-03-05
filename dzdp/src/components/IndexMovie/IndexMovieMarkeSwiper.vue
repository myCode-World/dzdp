<template>
  <div id="marketSwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in marketData.marketSwiper"><img :src="n.pic"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import "../../../node_modules/swiper/dist/css/swiper.css";
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"

  export default {
    name: "IndexMovieMarketSwiper",
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
    props:["marketData"]
  }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: 2.3rem;
  }
  #marketSwiper{
    width: 100%;
    height: 2.3rem;
  }

  #marketSwiper .swiper-pagination{
    bottom: -24px;
  }

</style>
<style>
  #marketSwiper .swiper-pagination-bullet{
    background-color: #dbdbdb;
  }
  #marketSwiper .swiper-pagination-bullet-active{
    background-color: #06c1ae;
  }
  #marketSwiper .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 10px;
  }
</style>
