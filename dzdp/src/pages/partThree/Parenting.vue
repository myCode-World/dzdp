<template>
  <div class="parenting">
    <parent-headers></parent-headers>
    <div class="contents">
      <parent-navs :parentsNavsData="parentsNavsData"></parent-navs>
      <parent-guide :parentGuideData="parentGuideData"></parent-guide>
      <parent-recommend :recommendConData="recommendConData" :nearByData="nearByData"></parent-recommend>
    </div>
  </div>
</template>

<script>
    import "../../../static/css/index.css";
    import ParentHeaders from "../../components/Parenting/ParentHeaders";
    import ParentNavs from "../../components/Parenting/ParentNavs";

    import parentsNavsData from "../../data/Parenting/ParentsNavsData";
    import ParentGuide from "../../components/Parenting/ParentGuide";
    import parentGuideData from "../../data/Parenting/ParentGuideData";
    import ParentRecommend from "../../components/Parenting/ParentRecommend";
    import recommendConData from "../../data/Parenting/RecommendCon";
    import nearByData from "../../data/Parenting/NearByData";
    export default {
        name: "Parenting",
      components: {ParentRecommend, ParentGuide, ParentNavs, ParentHeaders},
      data(){
          return{
            parentsNavsData,
            parentGuideData,
            recommendConData,
            nearByData
          }
      }
    }
</script>

<style scoped>
  .parenting{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  /*parent-headers{*/
    /*height: .52rem;*/
  /*}*/
  .contents{
    flex: 1;
    overflow-y: auto;
  }
</style>
