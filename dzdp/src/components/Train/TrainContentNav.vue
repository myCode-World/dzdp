<template>
  <div class="nav">
    <ul class="navUl">
      <li v-for="n in trainData"><a href="#"><img :src="n.pic"><span>{{n.subject}}</span></a></li>
    </ul>
    <ul class="navUls navUlT">
      <li v-for="i in showMore"><a href="#"><img :src="i.pic"><span>{{i.subject}}</span></a></li>
    </ul>
    <div class="more">
      <p @click="fn()" v-if="flag===1">展开更多</p>
      <p @click="fn()" v-if="flag===0">收起</p>
      <span :class="classname"></span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "TrainContentNav",
      props:["trainData","ulsData","ulsDatas"],
      data(){
        return {
          showMore:"",
          flag:0,
          classname:"down"
        }
      },
      mounted(){
          this.fn()
      },
      methods:{
        fn:function(){
            if(this.flag===0){
              // console.log(111)
              this.showMore=this.ulsDatas.slice(0,10);
              this.flag=1;
              this.classname="up"
            }else{
              this.showMore=this.ulsDatas;
              this.flag=0;
              this.classname="down"
            }
          }
        }
    }
</script>

<style scoped>
  .nav{
    background: white;
    margin-bottom: .1rem;
  }
  .navUl{
    display:flex;
    justify-content: space-around;
  }
  .navUl li a img{
    width:.54rem;
    height:.54rem;
    border-radius:50%;
  }
  .navUl li a span{
    display: block;
    text-align: center;
    font-size:.12rem;
    margin-top:.1rem;
    font-weight: 600;
  }
  .navUls{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .navUls li{
    margin: 0 0.1rem;
  }
  .navUls li a img{
    width:.45rem;
    height:.25rem;
    margin-top:.23rem;
    margin-bottom:.1rem;
  }
  .navUls li a span{
    display: block;
    text-align: center;
    font-size:.12rem;
    color:#6c6c6c;
  }
  .more{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .more p{
    text-align: center;
    font-size:.12rem;
    margin-top:.23rem;
    margin-bottom:.13rem;
    color:#6c6c6c;
  }
  .more .down{
    position: absolute;
    left: 2rem;
    top: -0.3rem;
    width:0;
    height:0;
    margin-left:.05rem;
    padding-top:.5rem;
    margin-bottom:.13rem;
    border:.08rem solid transparent;
    border-bottom-color:#d7d7d7;
  }
  .more .up{
    position: absolute;
    left: 2.08rem;
    top: 0.3rem;
    width:0;
    height:0;
    margin-left:.05rem;
    padding-top:.25rem;
    margin-bottom:.13rem;
    border:.08rem solid transparent;
    border-top-color:#d7d7d7;
  }

</style>
