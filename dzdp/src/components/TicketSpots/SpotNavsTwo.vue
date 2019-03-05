<template>
  <div id="spotnavs_two">
    <ul>
      <li v-for="s in SpotNavsData.navstwolist"><img :src="s.imgs">{{s.titles}}</li>
      <li><img src="../../../static/PartThreeImg/spot_navs19.jpg">收起全部</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "SpotNavsTwo",
      props:["SpotNavsData"]
      // methods:{
      //     opens(n){
      //       this.$emit("recake",n)
      //     }
      // }
    }
</script>

<style scoped>
  #spotnavs_two{
    background-color: white;
    box-sizing: border-box;
    padding-bottom: .18rem;
  }
  ul{
  display: -webkit-flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding-left: .1rem;
  align-items: center;
  }
  li{
  display: -webkit-flex;
  font-size: .11rem;
  flex-direction: column;
  align-items: center;
  margin-right: .1rem;
  margin-left: .1rem;
  margin-top:.15rem;
  }
  li img{
  width:.45rem ;
  height:.45rem ;
  margin-bottom: .06rem;
  }
</style>
