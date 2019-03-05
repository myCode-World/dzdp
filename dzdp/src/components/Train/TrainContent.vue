<template>
  <div class="content">
    <train-content-seach></train-content-seach>
    <train-content-nav :ulsDatas="ulsDatas" :trainData="trainData"></train-content-nav>
    <train-content-section :classify="classify" :classifyOne="classifyOne"></train-content-section>
    <train-content-relax></train-content-relax>
    <train-content-ranking-list :rankingListUls="rankingListUls"></train-content-ranking-list>
    <train-content-course-list :lisData="lisData" :detailsData="detailsData" ></train-content-course-list>
  </div>
</template>

<script>
    import TrainContentSeach from "./TrainContentSeach";
    import TrainContentNav from "./TrainContentNav";
    import TrainContentSection from "./TrainContentSection";
    import TrainContentRelax from "./TrainContentRelax";
    import TrainContentRankingList from "./TrainContentRankingList";
    import TrainContentCourseList from "./TrainContentCourseList";
    export default {
        name: "TrainContent",
      props:["classifyOne","trainData","rankingListUls","lisData","detailsData","ulsDatas","classify"],
      components: {
        TrainContentCourseList,
        TrainContentRankingList, TrainContentRelax, TrainContentSection, TrainContentNav, TrainContentSeach}
    }
</script>

<style scoped>
  /*content*/
  .content{
    width: 100%;
    background: #eeeeee;
    flex: 1;
    overflow-x:hidden ;
    overflow-y: auto;
  }
</style>
