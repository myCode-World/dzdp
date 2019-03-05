<template>
  <div class="classify">
    <ul class="ul">
      <li  v-for="n in classify"><a href="#"><img :src="n.pic" alt=""></a></li>
    </ul>
    <ul class="uls">
      <li v-for="i in classifyOne"><a href="#"><img :src="i.pic" alt=""></a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TrainContentSectionClassify",
      props:["classify","classifyOne"]
    }
</script>

<style scoped>
  .ul{
    display: flex;
    width:100%;
  }
  .ul li img{
    width:1.875rem;
    height:1.15rem;
    border:1px solid #efefef;
  }
  .uls{
    display: flex;
    width:100%;
  }
  .uls li img{
    width:1.24rem;
    height:1.19rem;
    border:1px solid #efefef;
    margin-bottom: .1rem;
  }
</style>
