<template>
    <div id="spotoption">
      <div class="opts" v-for="sod in SpotOptionData.opts">
        <div><h3>{{sod.titles}}</h3><span>{{sod.remarks}}</span></div>
        <img :src="sod.imgs">
      </div>
    </div>
</template>

<script>
    export default {
      name: "SpotOption",
      props:["SpotOptionData"]
    }
</script>

<style scoped>
#spotoption{
  display: -webkit-flex;
  box-sizing: border-box;
  justify-content: space-around;
  align-items: center;
  padding: .15rem;
}
  .opts{
    display: -webkit-flex;
    align-items: center;
    box-sizing: border-box;
    padding: .1rem;
    border-radius: .15rem;
    box-shadow: 1px 2px 2px 2px #d3d3d3;
  }
  .opts div{
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
  }
.opts h3{
  font-size: .15rem;
}
.opts span{
  font-size: .11rem;
}
.opts img{
  width: .38rem;
  height: .38rem;
  margin-left: .4rem;
}
</style>
