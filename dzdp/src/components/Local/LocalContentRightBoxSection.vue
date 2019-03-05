<template>
  <div class="rightNav">
    <div class="section">
      <ul class="uls">
        <li @click="change(0)" :class="{block:dian===0}">推荐</li>
        <li @click="change(1)" :class="{block:dian===1}">港澳</li>
        <li @click="change(2)" :class="{block:dian===2}">亚洲</li>
        <li @click="change(3)" :class="{block:dian===3}">欧洲</li>
        <li @click="change(4)" :class="{block:dian===4}">北美洲</li>
        <li @click="change(5)" :class="{block:dian===5}">南美洲</li>
        <li @click="change(6)" :class="{block:dian===6}">大洋洲</li>
        <li @click="change(7)" :class="{block:dian===7}">非洲</li>
      </ul>
    </div>
    <div class="content" :is="flag"></div>
  </div>
</template>
<script>
    import TuiJian from "./TuiJian"
    import gangAo from "./gangAo"
    import yaZhou from "./yaZhou"
    import  ouZhou from "./ouZhou"
    import beiMeiZhou from "./beiMeiZhou"
    import nanMeiZhou from "./nanMeiZhou"
    import daYangZhou from "./daYangZhou"
    import feiZhou from "./feiZhou"

    export default {
      name: "LocalContentRightBoxSection",
      components:{TuiJian,gangAo,yaZhou,ouZhou,beiMeiZhou,nanMeiZhou,daYangZhou,feiZhou},
      data(){
        return {
          flag:"TuiJian",
          dian:0
        }
      },
      methods:{
        change:function(n){
          this.dian=n
          if(n===0){
            this.flag="TuiJian"
          }else if(n===1){
            this.flag="gangAo"
          }else if(n===2){
            this.flag="yaZhou"
          }else if(n===3){
            this.flag="ouZhou"
          }else if(n===4){
            this.flag="beiMeiZhou"
          }else if(n===5){
            this.flag="nanMeiZhou"
          }else if(n===6){
            this.flag="daYangZhou"
          }else if(n===7){
            this.flag="feiZhou"
          }
        }
      },
      activated() {
      }
    }
</script>

<style scoped>
 .section{
    position:fixed;
    width:.93rem;
    height:100%;
    font-size:.16rem;
    background:#f6f6f6;
  }
 /*.section p{*/
   /*width:.93rem;*/
   /*height:.51rem;*/
   /*color:#020202;*/
   /*line-height:.51rem;*/
   /*text-align: center;*/
 /*}*/
 /*.section p:first-child{*/
   /*background:white;*/
   /*color:#ff6735;*/
 /*}*/
 /*.section p:hover{*/
   /*background:white;*/
   /*color:#ff6735;*/
 /*}*/
 .uls li{
    width:.93rem;
    height:.51rem;
    color:#020202;
    line-height:.51rem;
    text-align: center;
  }
 /*.uls li:first-child{*/
   /*color:#ff6735;*/
 /*}*/
 /*.uls li:first-child{*/
   /*background:white;*/
 /*}*/
  /*.uls li:hover{*/
    /*background:white;*/
    /*color:#ff6735;*/
  /*}*/
 .uls .block{
   color:#f35e2f;
   /*color:#ff6735;*/
   background:white;
 }


</style>
