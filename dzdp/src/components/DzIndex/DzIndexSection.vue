<template>
  <section>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><dz-index-nav :IndexData="IndexData.navList1"></dz-index-nav></div>
        <div class="swiper-slide"><dz-index-nav :IndexData="IndexData.navList2"></dz-index-nav></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <dz-index-must :IndexData="IndexData.mustList"></dz-index-must>
    <dz-index-link :IndexData="IndexData.linkList"></dz-index-link>
    <dz-index-classify :IndexData="IndexData"></dz-index-classify>
  </section>
</template>

<script>
  import Swiper from "../../../node_modules/swiper/dist/js/swiper"
  import "../../../node_modules/swiper/dist/css/swiper.css"
  import DzIndexNav from "./DzIndexNav";
  import DzIndexMust from "./DzIndexMust";
  import DzIndexLink from "./DzIndexLink";
  import DzIndexClassify from "@/components/DzIndex/DzIndexClassify";
  export default {
        name: "DzIndexSection",
        props:["IndexData"],
        components:{DzIndexClassify, DzIndexLink, DzIndexMust, DzIndexNav},
        mounted(){
        setTimeout(()=>{
          let mySwiper = new Swiper('.swiper-container',{
            direction:'horizontal',
            autoHeight:true,
            pagination:{
              el:'.swiper-pagination'
            }
          })
        },100)
      }
    }
</script>

<style scoped>

  section {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom:-0.35rem;
    left: 0;
    width: 100%;
    padding-bottom: 0.1rem;
    z-index: -1!important;
  }

</style>
