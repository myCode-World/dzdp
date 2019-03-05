<template>
    <div id="spotnavs">
      <spot-navs-one :SpotNavsData="SpotNavsData"></spot-navs-one>
    </div>
</template>

<script>
    import SpotNavsOne from "./SpotNavsOne";
    export default {
        name: "SpotNavs",
      components: { SpotNavsOne},
      props:["SpotNavsData"],
      data(){
          return{flag:"SpotNavsOne"}
      }
      // methods:{
      //     dales(n){
      //       if(n=="SpotNavsOne"){
      //         this.flag="SpotNavsOne";
      //       }else{
      //         this.flag="SpotNavsTwo"
      //       }
      //     }
      // }
    }
</script>

<style scoped>

</style>
