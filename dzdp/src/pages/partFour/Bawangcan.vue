<template>
    <div class="dinner">
      <bawangcan-header></bawangcan-header>
      <bawangcan-content :dinnerData="dinner.dinnerData" :detailsData="dinner.detailsData" :vipData="dinner.vipData"></bawangcan-content>
    </div>
</template>

<script>
    import dinner from "../../data/dinner"
    import BawangcanHeader from "../../components/Bawangcan/BawangcanHeader";
    import BawangcanContent from "../../components/Bawangcan/BawangcanContent";
    export default {
        name: "Bawangcan",
      data(){
          return {
            dinner
          }
      },
      components: {BawangcanContent, BawangcanHeader}
    }
</script>

<style scoped>

</style>
