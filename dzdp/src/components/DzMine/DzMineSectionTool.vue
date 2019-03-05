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
        name: "DzMineSectionTool",
        props:["DzMineData"]
    }
</script>

<style scoped>

  .listBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
  .toolList {
    text-align: center;
    width: 20%;
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
