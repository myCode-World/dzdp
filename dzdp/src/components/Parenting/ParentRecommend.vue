<template>
    <div>
      <recommend-headers @qiehuan="ckll"></recommend-headers>
      <!--<recommend-con :recommendConData="recommendConData"></recommend-con>-->
      <!--<near-by></near-by>-->
      <div :is="flag" :recommendConData="recommendConData" :nearByData="nearByData">

      </div>
    </div>
</template>

<script>
    import RecommendHeaders from "./RecommendHeaders";
    import RecommendCon from "./RecommendCon";
    import NearBy from "./NearBy";
    export default {
      name: "ParentRecommend",
      components: {NearBy, RecommendCon, RecommendHeaders},
      props:["recommendConData","nearByData"],
      data(){
          return{flag:"RecommendCon"}
      },
      methods:{
         ckll(n){
           if(n == 0){
             this.flag = "RecommendCon";
           }else{
             this.flag = "NearBy";
           }
         }
      }
    }
</script>

<style scoped>

</style>
