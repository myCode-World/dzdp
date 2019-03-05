<style>
@import '../../assets/css/partOneCss/home.css';
</style>
<template>
    <div class="pageFullScreen" id="xxxFullScreen">
      <vs-home-header></vs-home-header>
      <vs-home-sction></vs-home-sction>
    </div>
</template>
<script>
import VsHomeHeader from '../../components/vshome/VsHomeHeader'
import VsHomeSction from '../../components/vshome/VsHomeSction'
export default {
   data() {
      return {
      }
   },
   components:{
     VsHomeHeader,
     VsHomeSction,
   },
   activated() {
   }
}
</script>
