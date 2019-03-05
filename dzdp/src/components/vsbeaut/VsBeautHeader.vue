<style>


</style>
<template>
<div class="header">
    <div class="beaut-header">
      <div class="left-box" @click="goBack">
        <img src="../../../static/imgs/car-header-fanhun.jpg" alt="">
      </div>
      <p>
        <span class="beaut-header-span-1">商户</span>
         <router-link to="/VsBeautKuan" tag='span' class='beaut-header-span-2' @click.native='shuaxin'>
        美甲款式
         </router-link>
      </p>
      <div class="img-box">
        <img class="map" src="../../../static/imgs/map.jpg" alt="">
        <img src="../../../static/imgs/bigjing.jpg" alt="">
      </div>
    </div>
    <vs-beaut-bar></vs-beaut-bar>
</div>
</template>
<script>
import VsBeautBar from "./VsBeautBar"
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   methods:{
     shuaxin(){
        this.$router.go(0);
     },
     goBack(){
       this.$router.go(-1);
     }
   } ,
   components: {
         VsBeautBar,
   }
}
</script>
