<template>
    <div class="page">
      <shopping-car-head></shopping-car-head>
      <shopping-car-content></shopping-car-content>
    </div>
</template>

<script>
    import "../../assets/css/iconfont.css"
    import shoppingCarHead from "../../components/IndexToGoShoppingCar/shoppingCarHead"
    import shoppingCarContent from "../../components/IndexToGoShoppingCar/shoppingCarContent"

    export default {
        name: "IndexToGoShoppingCar",
        components:{
          shoppingCarHead,
          shoppingCarContent
        }
    }
</script>

<style scoped>
  .page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
