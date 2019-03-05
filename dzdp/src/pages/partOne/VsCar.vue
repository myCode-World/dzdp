<style>
@import "../../assets/css/partOneCss/car.css";


</style>
<template>
    <div class="pageFullScreen">
     <Vs-Car-Header></Vs-Car-Header>
     <vs-car-sction  @ee='show'></vs-car-sction>
     <div :is="flag"></div>
    </div>
</template>
<script>
 import VsCarHeader from "../../components/vscar/VsCarHeader"
 import VsCarSction from "../../components/vscar/VsCarSction"
 import VsCarTc from "../../components/vscar/VsCarTc"
 import VsCarMrxc from "../../components/vscar/VsCarMrxc"
 import VsCarWxby from "../../components/vscar/VsCarWxby"
 import VsCarD4S from "../../components/vscar/VsCarD4S"
 import VsCarGzty from "../../components/vscar/VsCarGzty"
export default {
     components: {
     VsCarHeader,
     VsCarSction,
     VsCarTc,
     VsCarMrxc,
     VsCarWxby,
     VsCarD4S,
     VsCarGzty,
   },
   data() {
      return {
          flag:"VsCarTc"
      }
   },
   methods:{
       show(n){
         if(n === "VsCarTc"){
            this.flag = "VsCarTc"
         }else if(n==='VsCarMrxc'){
           this.flag = "VsCarMrxc"
         }else if(n==='VsCarWxby'){
            this.flag = 'VsCarWxby'
         }else if(n==='VsCarD4S'){
            this.flag = 'VsCarD4S'
         }else{
            this.flag = 'VsCarGzty'
         }
       }
   }
  
}
</script>
