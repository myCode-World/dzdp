<template>
    <div>
      <good-shops></good-shops>
      <goods-shops-navs></goods-shops-navs>
      <goods-list :goodListData="goodListData"></goods-list>
    </div>
</template>

<script>
    import GoodShops from "./GoodShops";
    import GoodsShopsNavs from "./GoodsShopsNavs";
    import GoodsList from "./GoodsList";
    export default {
        name: "HairdGoods",
      components: {GoodsList, GoodsShopsNavs, GoodShops},
      props:["goodListData"]
    }
</script>

<style scoped>

</style>
