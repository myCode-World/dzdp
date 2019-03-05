<template>
  <div class="experience">
    <h4>西安必体验</h4>
    <div class="experienceCon">
      <div class="Imgbox" :style="e.experienceStyle" v-for="e in DzStrategyData.experience">
        <img :src="e.experienceImg" alt="">
        <img v-if="e.titleImg" class="firsttitle" :src="e.titleImg">
        <div v-if="e.experienceTitle" class="title">{{e.experienceTitle}}</div>
        <p class="Imgintfo">{{e.experienceCon}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DzStrategyExperience",
        props:["DzStrategyData"]
    }
</script>

<style scoped>
  /*体验*/
  .experience {
    background:#fff;
    border-radius: 0.2rem 0.2rem 0 0;
    width: 100%;
    padding-bottom: 0.15rem;
    position: relative;
    left: 0;
    top: -0.2rem;
    border-bottom: 0.1rem solid #f0f0f0;
  }
  .experience h4{
    font-size:0.18rem;
    color: #000;
    padding-top: 0.4rem;
    margin-bottom: 0.2rem;
    margin-left: 0.2rem;
  }

  .experienceCon {
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin: 0 0.15rem;
    border-radius: 0.1rem;
    overflow: hidden;
  }
  .Imgbox {
    margin-top: 0.02rem;
    position: relative;
  }
  .Imgbox img{
    width: 100%;
    height: 100%;
  }

  .title {
    width: auto;
    font-size: 0.14rem;
    color: #f1c98c;
    padding: 0.1rem;
    background: linear-gradient(to bottom, #3b3b3b 30%,#171717 100%);
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-right-radius: 0.1rem;
  }
  .Imgbox .firsttitle{
    width:0.45rem;
    height: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
  }

  .Imgintfo {
    font-size: 0.14rem;
    color: #fff;
    position: absolute;
    bottom:0.1rem;
    left: 0.15rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
  }

</style>
