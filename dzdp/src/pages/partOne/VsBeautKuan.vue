<style>
  @import "../../assets/css/partOneCss/beautkuan.css";
  .pageFullScreen{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
<template>
    <div class="pageFullScreen">
      <vs-beaut-kuan-header></vs-beaut-kuan-header>
      <vs-beaut-kuan-sction></vs-beaut-kuan-sction>
    </div>
</template>
<script>
import VsBeautKuanHeader from '../../components/vsbeautkuan/VsBeautKuanHeader'
import VsBeautKuanSction from '../../components/vsbeautkuan/VsBeautKuanSction'
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   components:{
      VsBeautKuanHeader,
      VsBeautKuanSction,
   }
}
</script>
