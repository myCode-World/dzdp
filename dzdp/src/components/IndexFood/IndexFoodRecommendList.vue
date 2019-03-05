<template>
    <div class="foodParty">
      <p class="title">美食人气聚集地</p>
      <div class="sitesList">
        <div class="sitesBox" v-for="n in IndexFoodData.sites">
          <img :src="n.pic"/>
          <p>
            <span>{{n.name}}</span>
            <span>{{n.long}}</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexFoodRecommendList",
        props:["IndexFoodData"]
    }
</script>

<style scoped>
  .foodParty{
    display: flex;
    flex-direction: column;
    padding: .1rem 0;
    background-color: white;
  }
  .title{
    font-size: .13rem;
    color: #000000;
    margin-bottom: .1rem;
    margin-left: .1rem;
  }
  .sitesList{
    display: flex;
    overflow: auto;
    padding-bottom: .07rem;
  }
  .sitesList::-webkit-scrollbar{
    display: none;
  }
  .sitesList .sitesBox:nth-child(1){
    margin-left: .1rem;
  }
  .sitesBox{
    width: 1.34rem;
    box-shadow: 0 3px 3px 3px #eee;
    border-radius: .06rem;
    margin:0 .04rem;
  }
  .sitesBox img{
    width: 1.34rem;
    height: .76rem;
  }
  .sitesBox p{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .08rem .06rem;
  }
  .sitesBox p span:first-child{
    font-size: .14rem;
    font-weight: 700;
  }
  .sitesBox p span:last-child{
    font-size: .09rem;
  }
</style>
