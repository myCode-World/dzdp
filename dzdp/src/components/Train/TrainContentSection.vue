<template>
  <div class="section">
    <train-content-section-imgs></train-content-section-imgs>
    <train-content-section-classify :classify="classify" :classifyOne="classifyOne"></train-content-section-classify>
  </div>
</template>

<script>
    import TrainContentSectionImgs from "./TrainContentSectionImgs";
    import TrainContentSectionClassify from "./TrainContentSectionClassify";
    export default {
        name: "TrainContentSection",
      props:["classify","classifyOne"],
      components: {TrainContentSectionClassify, TrainContentSectionImgs}
    }
</script>

<style scoped>


</style>
