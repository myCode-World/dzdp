<template>
  <div id="hairdressing">
    <haird-search></haird-search>
    <div class="big_box">
      <haird-navs :hairdNavsData="hairdNavsData"></haird-navs>
      <haird-swiper :hairdSwiperData="hairdSwiperData"></haird-swiper>
      <img src="../../../static/PartThreeImg/biaotu.jpg">
      <haird-welfare></haird-welfare>
      <haird-goods :goodListData="goodListData"></haird-goods>
    </div>
  </div>
</template>

<script>
  import '../../../static/css/index.css'
  import HairdSearch from '../../components/HairdRessing/HairdSearch'
  import HairdNavs from "../../components/HairdRessing/HairdNavs";
  import HairdSwiper from "../../components/HairdRessing/HairdSwiper";
  import HairdWelfare from "../../components/HairdRessing/HairdWelfare";
  import HairdGoods from "../../components/HairdRessing/HairdGoods";

  import goodListData from "../../data/HairdRessing/GoodsListData";
  import hairdNavsData from "../../data/HairdRessing/HairdNavsData";
  import hairdSwiperData from "../../data/HairdRessing/HairdSwiperDatas";
  export default {
    name: 'HairdRessing',
    components:{
      HairdGoods,
      HairdWelfare,
      HairdSwiper,
      HairdNavs,
      HairdSearch
    },
    data () {
      return {
        goodListData,
        hairdNavsData,
        hairdSwiperData
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #hairdressing{
    background-color: #f0f0f0;
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
  }
  .big_box{
    flex: 1;
    overflow-y: auto;
  }
  img{
    width: 100%;
    height: .94rem;
    margin:.1rem 0;
  }
</style>
