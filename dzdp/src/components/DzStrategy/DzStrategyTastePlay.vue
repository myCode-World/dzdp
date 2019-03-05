<template>
  <!--/*地道西安味*/-->
  <div>
    <div class="taste" v-for="t in DzStrategyData">
      <div class="titleHeader">
        <h3>{{t.titleHeader}}</h3>
        <p>更多 <i class="iconfont icon-youjiantou"></i></p>
      </div>
      <div class="tasteBox">
        <div class="tasteList" v-for="m in t.tasteList">
          <img :src="m.tasteListImg" alt="">
          <div class="tasteCon">
            <div class="tasteTitle">{{m.tasteTitle}}</div>
            <ul class="tasteRank">
              <li v-for="n in m.tasteRank">{{n.rankTxt}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "DzStrategyTastePlay",
        props:["DzStrategyData"]
    }
</script>

<style scoped>
  /*地道西安味*/
  .taste {
    width: 100%;
    padding-bottom: 0.16rem;
    border-bottom: 0.1rem solid #f0f0f0;
  }
  .tasteBox {
    display: -webkit-box;
    overflow-x:scroll;
  }
  .tasteBox::-webkit-scrollbar{
    display: none;
  }

  .taste .titleHeader{
    margin-top:0.15rem;
    margin-bottom:0.15rem;
  }

  .titleHeader {
    display: flex;
    justify-content: space-between;
    margin:0 0.1rem ;
  }
  .titleHeader h3{
    font-size: 0.18rem;
  }
  .titleHeader p{
    color: #656565;
    font-size: 0.14rem;
  }

  .tasteList {
    position: relative;
    width:1.56rem;
    height: auto;
    margin: 0 0.05rem;
  }
  .tasteList img{
    width: 100%;
  }

  .tasteCon .tasteTitle{
    position: absolute;
    top:0.6rem;
    left: 0.16rem;
  }

  .tasteTitle {
    font-size: 0.16rem;
    color: #fff;
    margin-bottom: 0.3rem;
  }
  .tasteCon .tasteRank{
    position: absolute;
    top:1.1rem;
    left: 0.16rem;
  }

  .tasteRank li{
    color: #fff;
    font-size: 0.12rem;
    padding: 0.05rem  0rem;
  }
</style>
