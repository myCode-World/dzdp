<template>
  <div class="rankingList">
    <h5>排行榜</h5>
    <ul class="rankingListUls">
      <li v-for="n in rankingListUls">
        <a href="#">
          <img :src="n.pic" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TrainContentRankingList",
      props:["rankingListUls"],
    }
</script>

<style scoped>
  /*rankingList*/
  .rankingList{
    width:100%;
    background:#ffffff;
    margin-bottom:.1rem;
  }
  .rankingList h5{
    font-size:.16rem;
    font-weight:100;
    padding-top:.13rem;
    margin-left:.16rem;
    margin-bottom:.2rem;
  }
  .rankingListUls{
    display: flex;
    overflow: auto;
    padding-bottom:.2rem;
  }
  .rankingListUls::-webkit-scrollbar {
    display: none;
  }
  .rankingListUls li a img{
    width:1.28rem;
    height:.75rem;
    margin-left:.1rem;
    margin-right:.1rem;
  }


</style>
