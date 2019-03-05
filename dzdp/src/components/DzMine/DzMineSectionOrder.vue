<template>
  <div class="listBox">
    <div class="toolList" v-for="d in DzMineData">
      <img :src="d.listImg" alt="">
      <p>{{d.listTitle}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DzMineSectionOrder",
        props:["DzMineData"]
    }
</script>

<style scoped>
  .listBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0.15rem;
    padding: 0.1rem 0;
    border-radius: 0.15rem;
    border: 1px solid #eee;
  }
  .toolList {
    text-align: center;
    width: 25%;
    margin: 0.1rem 0;
  }
  .toolList p{
    color: #282828;
    font-size: 0.13rem;
  }
  .toolList img{
    width: 0.3rem;
    height: 0.3rem;
    margin: 0 auto;
  }
</style>
