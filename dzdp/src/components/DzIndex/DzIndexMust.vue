<template>
  <div class="mustList">
    <div class="mustBox" v-for=" m in IndexData">
      <img class="bgImg" :src="m.mustImg" alt="">
      <div class="mustBoxshadow">
        <div class="mustTilte">{{m.musttitle}}</div>
        <h4>{{m.mustcontent}}</h4>
        <p>{{m.musttext}}</p>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DzIndexMust",
        props:["IndexData"]
    }
</script>

<style scoped>
  /*必推*/

  .mustList {
    display: flex;
    justify-content: center;
    margin: 0.1rem;
  }
  .bgImg{
    width: 100%;
  }
  .mustBox {
    margin: 0 0.05rem;
    position: relative;
    box-shadow:0 3px 5px 2px #eee;
  }
  .mustBoxshadow{
    position: absolute;
    top: 0.15rem;
    left: 0;
    padding-left:0.1rem;
  }


  .mustBox .mustTilte{
    width: auto;
    color: #fff;
    font-size: 0.14rem;
    background: #2f2e2e;
    text-align: center;
  }
  .mustBox h4{
    color: #1b1b1b;
    font-size: 0.14rem;
    margin: 0.05rem 0;
  }
  .mustBox p{
    color: #464342;
    font-size: 0.12rem;
  }
</style>
