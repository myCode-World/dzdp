<template>
    <div id="parentguide">
      <div class="guides" :style="pg.bgcolor" v-for="pg in parentGuideData.guidelist">
        <h3>{{pg.cardnames}}</h3>
        <p>{{pg.cardremark}}</p>
        <div><span v-if="pg.rushprice">{{pg.rushprice}}</span><img :src="pg.imgs" :style="pg.imgwidth_height"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ParentGuide",
        props:["parentGuideData"]
    }
</script>

<style scoped>
  #parentguide{
    display: -webkit-flex;
    background-color: white;
    box-sizing: border-box;
    padding: .08rem;
    justify-content: center;
  }
  .guides{
    display: -webkit-flex;
    box-sizing: border-box;
    flex-direction: column;
    border-radius:.1rem ;
    padding: 0 .1rem;
    align-items:flex-start;
    justify-content: space-between;
    margin-right: .05rem;
  }
  .guides:last-child{
    margin: 0;
  }
  .guides h3{
    font-size: .14rem;
    margin-top: .09rem;
  }
  .guides p{
    font-size: .12rem;
    color: #656a6c;
    margin-top: .06rem;
  }
  .guides span{
    color: white;
    border-radius: .1rem;
    font-size: .11rem;
    padding:.03rem .06rem ;
    background-color: #ff4b74;
    box-sizing: border-box;
    margin-right: .15rem;
  }
  .guides div{
    display: -webkit-flex;
    align-items: center;
  }
</style>
