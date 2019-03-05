<template>
    <div class="myself">
      <div class="selfHead">
        <img class="header" src="../../../static/img/togo/myselfHead.jpg"/>
        <div class="number">
          <h4>Super_4323015</h4>
          <span>132****4568</span>
        </div>
        <img class="back" src="../../../static/img/togo/back.jpg"/>
      </div>
      <ul class="myselfList">
        <li v-for="n in togoData.myselfList">
          <img :src="n.pic"/>
          <p>{{n.name}}</p>
        </li>
      </ul>
      <div class="selfBanner"><img src="../../../static/img/togo/selfBanner.jpg"/></div>
      <ul class="quanList">
        <li v-for="i in togoData.quanList">
          <p>
            <img :src="i.pic"/>
            <span>{{i.name}}</span>
          </p>
          <p>
            <span v-if="i.nums">{{i.nums}}张可用</span>
            <i class="iconfont icon-youjiantou"></i>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    import togoData from "../../data/IndexTogo"

    export default {
        name: "MySelf",
      data(){
        return{
          togoData
        }
      }
    }
</script>

<style scoped>
  .myself{
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 0 .19rem;
  }
  .selfHead{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .selfHead .header{
    width: .58rem;
    height: .58rem;
    border-radius: 50%;
  }
  .number{
    display: flex;
    flex-direction: column;
    color: #111111;
    justify-content: space-around;
  }
  .number h4{
    font-size: .2rem;
  }
  .number span{
    font-size: .1rem;
  }
  .back{
    width: 1.12rem;
    height: .95rem;
  }
  .myselfList{
    display: flex;
    justify-content: space-around;
    padding: .15rem 0;
  }
  .myselfList li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .myselfList li img{
    width: .3rem;
    height: .3rem;
  }
  .myselfList li p{
    font-size: .12rem;
    color: #060606;
  }
  .selfBanner img{
    width: 3.37rem;
    height: .5rem;
  }
  .quanList{
    display: flex;
    flex-direction: column;
  }
  .quanList li{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f5f5f5;
  }
  .quanList li p{
    display: flex;
    align-items: center;
  }
  .quanList li p img{
    width: .18rem;
    height: .18rem;
    margin-right: .14rem;
  }
  .quanList li p span{
    font-size: .12rem;
    color: #010101;
    line-height: .47rem;
  }
  .quanList li p:last-child span{
    font-size: .11rem;
    color: #878787;
  }
  .quanList li p:last-child i{
    font-size: .13rem;
    color: #b6b6b6;
    margin-left: .07rem;
  }
</style>
