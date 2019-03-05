<template>
    <div class="train">
      <train-header></train-header>
      <train-content :classifyOne="trainData.classifyOne" :classify="trainData.classify" :ulsDatas="trainData.ulsDatas" :detailsData="trainData.detailsData" :lisData="trainData.lisData" :trainData="trainData.trainData" :ulsData="trainData.ulsData" :rankingListUls="trainData.rankingListUls"></train-content>
    </div>
</template>

<script>
    import trainData from "../../data/Train"
    import TrainHeader from "../../components/Train/TrainHeader";
    import TrainContent from "../../components/Train/TrainContent";
    export default {
      name: "Train",
      data(){
        return {
          trainData
        }
      },
      components: {TrainContent, TrainHeader}
    }
</script>

<style scoped>
  body {
    background: #eeeeee;
  }
  .train{
    display: flex;
    width: 100%;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
</style>
