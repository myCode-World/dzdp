<template>
  <div class="nav">
    <div class="GPSDing">
      <img src="../../../static/assets/img/ding.png" alt="">
      <h5>西安</h5>
      <span>GPS定位</span>
    </div>
    <div class="history" >
      <p>历史访问城市</p>
      <ul class="cityUl">
        <li v-for="k in cityArr"><a href="#">{{k.city}}</a></li>
      </ul>
    </div>
    <mt-index-list class="noScroll">
      <mt-index-section :index="n.code" v-for="(n,index) in localData.allCity" :key="index">
        <mt-cell class="citys" :title="c" v-for="(c,count) in n.cityList" :key="count" @click.native="sentAdd(c,index,count)"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
    import Vue from 'vue'
    import { IndexList, IndexSection } from 'mint-ui';
    Vue.component(IndexList.name, IndexList);
    Vue.component(IndexSection.name, IndexSection);

    export default {
        name: "LocalContentLeftBoxNav",
        props:["localData"],
        data(){
          return {
            cityName:"",
            cityArr:this.localData.historyCity
          }
        },
        methods:{
          sentAdd(c,index,count){
            this.cityName=c;
            this.$emit("reciveAdd",c);
            this.localData.historyCity[2].city=this.localData.historyCity[1].city;
            this.localData.historyCity[1].city=this.localData.historyCity[0].city;
            this.localData.historyCity[0].city=c;

            // 调用vuex的ations设置城市的值
            this.$store.dispatch("setCityName", this.localData.allCity[index].cityList[count]);

            //返回到首页
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  .nav{
    background:white;
    margin-bottom:.1rem;
  }
  .GPSDing{
    margin-left:.16rem;
    margin-right:.23rem;
    height:.56rem;
    display: flex;
    align-items: center;
    border-bottom:1px solid #f5f5f5;

  }
  .GPSDing img{
    width:.15rem;
    height:.15rem;

  }
  .GPSDing h5{
    margin-left:.08rem;
    margin-right:.1rem;
    font-size:.18rem;
  }
  .GPSDing span{
    font-size:.13rem;
    color:#898989;
  }
  .history{
    margin-left:.16rem;
    margin-right:.22rem;
  }
  .history p{
    margin-top:.15rem;
    margin-bottom:.15rem;
    font-size:.13rem;
    color:#b6b6b6;
  }
  .cityUl li{
    width:1.05rem;
    height:.39rem;
    font-size:.14rem;
    line-height:.39rem;
    text-align:center;
    border:1px solid #ebebeb;
    border-radius: 5px;
    float:left;
  }
  .cityUl{
    display: flex;
    justify-content: space-between;
  }
  .city .cityUl li{
    margin-bottom:.08rem;
  }
  .city .cityUl:last-child{
    padding-bottom:.06rem;
  }
</style>
<style>
  .noScroll{
    overflow: visible;
  }
  .mint-indexlist {
    flex: 1;
    height: 100%;
    overflow: visible;
  }
  .mt-index-section{
    overflow: visible;
  }
  .mint-indexsection-index{
    font-size: 0.16rem;
    color:#2d2d2d;
  }
  .mint-indexlist-navitem {
    padding: 1px  4px;
  }

  .mint-indexlist-nav{
    border: 0;

    /*解决滑动警告报错*/
    touch-action: none;
  }
  .mint-indexlist-content{
    margin-right: 30px!important;
  }
</style>
