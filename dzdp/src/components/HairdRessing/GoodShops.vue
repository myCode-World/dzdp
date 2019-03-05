<template>
   <div id="goodshops">
     <h3>{{hairdtitles}}</h3>
     <span>{{hairdremark}}</span>
   </div>
</template>

<script>
    export default {
        name: "GoodShops",
        data(){
          return {
            hairdtitles: '发现好的店',
            hairdremark: '满足挑剔的你'
          }
         }
    }
</script>

<style scoped>
  #goodshops{
    display: -webkit-flex;
    align-items: center;
    box-sizing: border-box;
    /*padding-left: .23rem;*/
    padding: .14rem 0 .14rem .23rem;
  }
  #goodshops h3{
    font-size: .18rem;
    margin-right: .1rem;
  }
  #goodshops span{
    font-size: .15rem;
  }
</style>
