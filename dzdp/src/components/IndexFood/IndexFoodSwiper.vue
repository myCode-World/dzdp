<template>
  <div id="banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in IndexFoodData.foodSwiper"><img :src="n.pic"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import "../../../node_modules/swiper/dist/css/swiper.css";
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"

    export default {
        name: "IndexFoodSwiper",
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
        props:["IndexFoodData"]
    }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: 1.39rem;
  }
  #banner{
    width: 100%;
    height: 1.6rem;
  }
  .swiper-slide img{
    width: 3.75rem;
    height: 1.6rem;
  }
  #banner .swiper-pagination{
    bottom: -18px;
  }
</style>
<style>
  .swiper-pagination-bullet-active{
  background-color: white;
  }
  #banner .swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 10px;
  }
</style>
