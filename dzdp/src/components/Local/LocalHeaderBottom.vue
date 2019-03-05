<template>
  <div class="one">
    <div class="headerBottom">
      <a id="nei" @click="change(0)" :class="{block:dian===0}">
        <span>国内</span><span class="spanLine spanTwo"></span>
      </a>
      <a id="wai" @click="change(1)" :class="{block:dian===1}">
        <span>国际/港澳台</span><span class="spanLine spanOne"></span>
      </a>
    </div>
    <div class="content" :is="flag" :localData="localData"></div>
  </div>
</template>

<script>
  import LocalContentLeftBox from "./LocalContentLeftBox";
  import LocalContentRightBox from "./LocalContentRightBox"
    export default {
      name: "LocalHeaderBottom",
      props:["localData"],
      components: {LocalContentLeftBox,LocalContentRightBox},
      data() {
        return {
          flag:"LocalContentLeftBox",
          dian:0
        }
      },
      methods:{
        change:function(n){
          this.dian=n;
          if(n ===0){
            this.flag ="LocalContentLeftBox"
          }else if(n===1){
            this.flag = "LocalContentRightBox"
          }

        }
      }
    }
</script>

<style scoped>
  .one{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    height:100%;
    flex-direction: column;
  }
  .headerBottom {
    display: -webkit-box;
    justify-content: center;
  }
  .headerBottom a{
    display: block;
    margin:.14rem 0.2rem 0;
    font-size:.16rem;
  }
  .block{
    color:#f35e2f;
  }
  .spanLine{
     display: block;
     width:.33rem;
     height:6px;
     margin-top:.12rem;
     background:#ff2f14;
     opacity: 0;
   }
  .block .spanTwo{
    opacity: 1;
  }
  .block .spanOne{
    opacity: 1;
    width:.8rem;
  }
  .content{
    overflow: hidden;
  }
</style>
