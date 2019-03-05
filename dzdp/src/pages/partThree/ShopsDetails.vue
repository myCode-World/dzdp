<template>
  <div id="shopsdetails">
    <details-headers></details-headers>
    <div id="details_cont">
      <details-info :DetailsInfoData="DetailsInfoData"></details-info>
      <details-list :DetailsListData="DetailsListData"></details-list>
    </div>
    <details-footers></details-footers>
  </div>
</template>

<script>
    import DetailsInfo from "../../components/ShopsDetalis/DetailsInfo";
    import DetailsList from "../../components/ShopsDetalis/DetailsList";
    import DetailsHeaders from "../../components/ShopsDetalis/DetailsHeaders";
    import DetailsFooters from "../../components/ShopsDetalis/DetailsFooters";
    import DetailsListData from "../../data/ShopsDetalis/DetailsListData";
    import DetailsInfoData from "../../data/ShopsDetalis/DetailsInfoData";
    export default {
        name: "ShopsDetails",
      components: {DetailsFooters, DetailsHeaders, DetailsList, DetailsInfo},
      data(){
          return{
            DetailsListData,
            DetailsInfoData
          }
      }
    }
</script>

<style scoped>
  #shopsdetails{
    background-color: #f5f5f5;
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
  }
  #details_cont{
    flex: 1;
    overflow: auto;
  }
</style>
