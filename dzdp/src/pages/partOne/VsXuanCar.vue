<style>
@import "../../assets/css/partOneCss/xuancar.css";

</style>
 
<template>
    <div class="pageFullScreen" id="xxxFullScreen">
      <vs-xuan-car-header></vs-xuan-car-header>
      <vs-xuan-car-sction></vs-xuan-car-sction>
    </div>
</template>
<script>
import VsXuanCarHeader from '../../components/vsxuancar/VsXuanCarHeader'
import VsXuanCarSction from '../../components/vsxuancar/VsXuanCarSction'
export default {
   components:{
    VsXuanCarHeader,
    VsXuanCarSction,
   }
}
</script>
