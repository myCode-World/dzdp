<style>
@import "../../assets/css/partOneCss/mycar.css";

</style>
<template>
    <div class="pageFullScreen" id="xxxFullScreen">
      <vs-my-car-header></vs-my-car-header>
      <vs-my-car-sction></vs-my-car-sction>
    </div>
</template>
<script>
import VsMyCarHeader from '../../components/vsmycar/VsMyCarHeader'
import VsMyCarSction from '../../components/vsmycar/VSMyCarSction'
export default {
    name:"VsMyCar",
    components:{
     VsMyCarHeader,
     VsMyCarSction,
    }
  }
</script>
