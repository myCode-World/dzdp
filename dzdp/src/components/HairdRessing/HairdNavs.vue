<template>
  <div id="hairdnavs">
    <ul>
      <li v-for="n in hairdNavsData.navslist"><img :src="n.imgs">{{n.titles}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "HairdNavs",
        props:["hairdNavsData"]
    }
</script>

<style scoped>
#hairdnavs{
  border-bottom: 1px solid #ededed;
  background-color: white;
  box-sizing: border-box;
  padding-bottom: .18rem;
}
ul{
display: -webkit-flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 0 .25rem;
  justify-content: space-between;
  align-items: center;
}
li{
  display: -webkit-flex;
  font-size: .14rem;
  flex-direction: column;
  align-items: center;
  margin-right: .13rem;
  margin-left: .13rem;
  margin-top:.15rem;
}
li img{
  width:.47rem ;
  height:.47rem ;
}
</style>
