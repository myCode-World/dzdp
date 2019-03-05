<template>
    <div class="logoList">
      <div class="logoBox" v-for="n in marketData.marketList">
        <img :src="n.pic"/>
        <p>{{n.name}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieMarketList",
        props:["marketData"]
    }
</script>

<style scoped>
  .logoList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: .23rem;
    border-bottom: 1px solid #e2e2e2;
    background-color: white;
  }
  .logoBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin-top: .2rem;
  }
  .logoBox img{
    width: .44rem;
    height: .44rem;
  }
  .logoBox p{
    font-size: .12rem;
    font-weight: 700;
    color:#525252;
    margin-top: .09rem;
  }
</style>
