<template>
    <div id="hairdswiper">
      <img id="lirenjpg" src="../../../static/PartThreeImg/liren.jpg">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="n in hairdSwiperData.swiperlist"><span>{{n.titles}}</span><span>{{n.shopsname}}</span></div>
        </div>
      </div>
      <img id="liren_yjt" src="../../../static/PartThreeImg/liren_yjt.jpg">
    </div>
</template>

<script>
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"
    export default {
        name: "HairdSwiper",
        props:["hairdSwiperData"],
         mounted() {
           var mySwiper = new Swiper ('.swiper-container', {
             direction: 'horizontal', // 垂直切换选项
             loop: true, // 循环模式选项
             autoplay:true,
           })
         }
    }
</script>

<style scoped>
  @import "../../../node_modules/swiper/dist/css/swiper.css";
  #hairdswiper{
    height: .62rem;
    background-color: white;
    display: -webkit-flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 .13rem;
  }
  #lirenjpg{
    width: .39rem;
    height: .39rem;
    border-right: 1px solid #e4e4e4;
    padding-right: .12rem;
  }
  #liren_yjt{
    width: .08rem;
    height: .15rem;
  }
  .swiper-container{
    /*width: 1.5rem;*/
  }
  .swiper-slide{
    align-items: center;
    display: -webkit-flex;
    flex-direction: column;
  }
  .swiper-slide span{
    font-size: .15rem;
  }
</style>
