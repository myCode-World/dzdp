<template>
    <div class="content">
      <index-food-swiper :IndexFoodData="IndexFoodData"></index-food-swiper>
      <div class="foodClass">
        <img src="../../../static/img/food/1.jpg">
        <img src="../../../static/img/food/2.jpg">
        <img src="../../../static/img/food/3.jpg">
      </div>
      <index-food-recommend-list :IndexFoodData="IndexFoodData"></index-food-recommend-list>
      <index-food-custom-list></index-food-custom-list>
      <index-food-shop-list :IndexFoodData="IndexFoodData"></index-food-shop-list>
    </div>
</template>

<script>
    import IndexFoodSwiper from "./IndexFoodSwiper"
    import IndexFoodRecommendList from "./IndexFoodRecommendList"
    import IndexFoodCustomList from "./IndexFoodCustomList"
    import IndexFoodShopList from "./IndexFoodShopList"

    export default {
        name: "IndexFoodContent",
        components:{
          IndexFoodSwiper,
          IndexFoodRecommendList,
          IndexFoodCustomList,
          IndexFoodShopList
        },
        props:["IndexFoodData"]
    }
</script>

<style scoped>
  .content{
    background-color: #f0f0f0;
  }
  .foodClass{
    display: flex;
    justify-content: center;
    padding-top: .1rem;
    background-color: white;
  }
  .foodClass img{
    width: 1.13rem;
    height: .63rem;
    border-radius: .06rem;
    box-shadow: 0 3px 4px 1px #eee;
  }
  .foodClass img:nth-child(2){
    margin: 0 .06rem;
  }
</style>
