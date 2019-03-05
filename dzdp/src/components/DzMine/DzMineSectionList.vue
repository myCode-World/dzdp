<template>
  <ul class="listBox">
    <li class="list" v-for=" l in DzMineData">{{l.hitTxt}}
      <p>{{l.text}}<i class="iconfont icon-youjiantou"></i></p>

    </li>
  </ul>
</template>

<script>
    export default {
        name: "DzMineSectionList" ,
        props:["DzMineData"]
    }
</script>

<style scoped>
  .listBox {
    border-bottom: 0.1rem solid #f0f0f0;
  }
  .list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 0.15rem;
    padding:0.16rem 0;
    margin: 0 0.22rem;
    border-bottom: 1px solid #f1f1f1;
  }
  .list p{
    font-size: 0.12rem;
    color: #bababa;
  }


</style>
