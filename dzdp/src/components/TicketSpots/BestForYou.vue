<template>
    <div id="bestforyou">
      <best-for-you-header></best-for-you-header>
      <best-for-you-con :BestForData="BestForData"></best-for-you-con>
    </div>
</template>

<script>
    import BestForYouHeader from "./BestForYouHeader";
    import BestForYouCon from "./BestForYouCon";
    export default {
      name: "BestForYou",
      components: {BestForYouCon, BestForYouHeader},
      props:["BestForData"]
    }
</script>

<style scoped>
  #bestforyou{
    background-color: #f6f6f6;
  }
</style>
