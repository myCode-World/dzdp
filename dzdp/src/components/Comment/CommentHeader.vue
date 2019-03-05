<template>
   <div class="header">
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="n in bannerData">
                <img :src="n.banner">
            </div>
          </div>
        </div>
      </div>
      <div class="back">
        <a href="javascript:;" @click="GoBack"><img class="imgs" src="../../../static/assets/img/fan.png"></a>
        <a href="#"><img class="imgs img" src="../../../static/assets/img/dian.png"></a>
      </div>
   </div>
</template>

<script>
    import  Swiper from 'swiper'
    export default {
      name: "CommentHeader",
      props:["bannerData"],
      mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
          autoHeight:true,
          // autoplay: true,
          // loop: true, // 循环模式选项
        })
      },
      methods:{
        GoBack(){
          this.$router.go(-1);
        }
      }
    }
</script>

<style>
  @import '../../../node_modules/swiper/dist/css/swiper.css';
  .header{
    position: relative;
  }
  .banner img{
    width:100%;
    height:2.12rem;
  }
  /*.banner img:nth-child(2),.banner img:nth-child(3){*/
    /*width:100%;*/
    /*height:2.12rem;*/
  /*}*/
  .back{
    position: absolute;
    top:.1rem;
    display: flex;
    z-index:10;
    padding-left: .11rem;
  }
  .back a .imgs{
    width:.3rem;
    height:.3rem;
  }
  .back a .img{
   padding-left:2.9rem;
  }
</style>
