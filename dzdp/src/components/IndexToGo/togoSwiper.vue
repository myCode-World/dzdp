<template>
  <div id="filmSwiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="n in togoData.togoSwiper"><img :src="n.pic"/></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import "../../../node_modules/swiper/dist/css/swiper.css";
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"

  export default {
    name: "togoSwiper",
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
    props:["togoData"]
  }
</script>

<style scoped>
  .swiper-slide img{
    width: 100%;
    height: .77rem;
  }
  #filmSwiper{
    width: 96%;
    height: .77rem;
  }

  #filmSwiper .swiper-pagination{
    bottom: -24px;
  }

</style>
<style>
  /*#filmSwiper .swiper-pagination-bullet{*/
    /*width: .1rem;*/
    /*height: .02rem;*/
    /*border-radius: .02rem;*/
  /*}*/
  #filmSwiper .swiper-pagination-bullet-active{
    background-color: white;
  }
  #filmSwiper .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 10px;
  }
</style>
