<style>
  @import "../../assets/css/partOneCss/beaut.css";
  .pageFullScreen{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .beautyCont{
    flex: 1;
    overflow: auto;
  }
</style>
<template>
    <div class="pageFullScreen" id="xxxFullScreen">
       <vs-beaut-header></vs-beaut-header>
        <div class="beautyCont">
          <vs-beaut-sction></vs-beaut-sction>
          <vs-beaut-footer></vs-beaut-footer>
        </div>
    </div>
</template>
<script>
import VsBeautHeader from "../../components/vsbeaut/VsBeautHeader"
import VsBeautSction from "../../components/vsbeaut/VsBeautSction"
import VsBeautFooter from "../../components/vsbeaut/VsBeautFooter"
export default {
   data() {
      return {
      }
   },
    components :{
       VsBeautHeader,
       VsBeautSction,
       VsBeautFooter,
   },
   activated() {
   }
}
</script>
