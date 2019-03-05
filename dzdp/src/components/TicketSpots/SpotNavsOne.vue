<template>
  <div id="spotnavs_one">
    <ul>
      <li v-for="o in klists"><img :src="o.imgs">{{o.titles}}</li>
      <li @click="opens" v-if="flag===1"><img src="../../../static/PartThreeImg/spot_navs10.jpg">展开更多</li>
      <li @click="opens" v-if="flag===0"><img src="../../../static/PartThreeImg/spot_navs19.jpg">收起全部</li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "SpotNavsOne",
      props:["SpotNavsData"],
      data(){
          return{
            klists:"",
            flag:0
          }
      },
      mounted(){
        this.opens();
      },
      methods:{
        opens(){
          if (this.flag === 0) {
            this.klists = this.SpotNavsData.navsonelist;
            this.flag = 1;
          }else{
            this.klists = this.SpotNavsData.navstwolist;
            this.flag = 0;
          }

        }
      }
    }
</script>

<style scoped>
  #spotnavs_one{
    background-color: white;
    box-sizing: border-box;
    padding-bottom: .18rem;
  }
  ul{
    display: -webkit-flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-around;
  }
  li{
    width: 20%;
    display: -webkit-flex;
    font-size: .11rem;
    flex-direction: column;
    align-items: center;
    margin-top:.15rem;
  }
  li img{
    width:.45rem ;
    height:.45rem ;
    margin-bottom: .06rem;
  }
</style>
