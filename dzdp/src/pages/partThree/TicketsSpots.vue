<template>
    <div id="tickets_spots">
      <spot-headers></spot-headers>
      <spot-navs :SpotNavsData="SpotNavsData"></spot-navs>
      <spot-option :SpotOptionData="SpotOptionData"></spot-option>
      <popular-recom :PopularData="PopularData"></popular-recom>
      <best-for-you :BestForData="BestForData"></best-for-you>
    </div>
</template>

<script>
    import SpotHeaders from "../../components/TicketSpots/SpotHeaders";
    import SpotNavs from "../../components/TicketSpots/SpotNavs";
    import SpotNavsData from "../../data/TicketSpots/SpotNavsData";
    import SpotOption from "../../components/TicketSpots/SpotOption";
    import SpotOptionData from "../../data/TicketSpots/SpotOptionData";
    import PopularRecom from "../../components/TicketSpots/PopularRecom";
    import PopularData from "../../data/TicketSpots/PopularData";
    import BestForYou from "../../components/TicketSpots/BestForYou";
    import BestForData from "../../data/TicketSpots/BestForData";
    export default {
        name: "TicketsSpots",
      components: {BestForYou, PopularRecom, SpotOption, SpotNavs, SpotHeaders},
      data(){
          return{
            SpotNavsData,
            SpotOptionData,
            PopularData,
            BestForData
          }
      }
    }
</script>

<style scoped>
   #tickets_spots{

   }
</style>
