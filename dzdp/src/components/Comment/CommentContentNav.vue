<template>
    <div class="nav">
     <div v-for="n in navData">
       <h4>相关推荐</h4>
       <div class="sectionTop">
         <img :src="n.pic1 " alt="">
         <div>
           <p class="info">
             <span>{{n.userName}}</span>
             <img class="zuan" :src="n.pic2" alt="">
           </p>
           <p class="time">
             <span>{{n.data}}</span>
             <span>{{n.time}}</span>
           </p>
         </div>
         <p class="follow">+关注</p>
       </div>
       <div class="sectionBottom"  v-for="k in n.uls">
         <ul class="uls">
           <li><img :src="k.pic1" alt=""></li>
           <li><img :src="k.pic2" alt=""></li>
           <li><img :src="k.pic3" alt=""></li>
         </ul>
         <p class="ping">{{k.text}}</p>
       </div>
       <div class="scenic">
         <img :src="n.pic4" alt="">
         <div class="scenicIntro">
           <div class="daTang">
             <h5>{{n.h5}}</h5>
             <p class="address">{{n.address}}</p>
           </div>
           <p class="txt">
             <span>{{n.zan}}</span>
           </p>
         </div>
       </div>
       <p class="play">
         <span>#</span>
         <span>{{n.biao}}</span>
       </p>
       <p class="liuLan">{{n.num}}</p>
       <p class="liuLan shou">
         <img src="../../../static/assets/img/shou.png" alt="">
         <img src="../../../static/assets/img/ren.png" alt="">
         <span>{{n.dianzan}}</span>
         <img src="../../../static/assets/img/xin.png" alt="">
         <img src="../../../static/assets/img/fen.png" alt="">
       </p>
     </div>
    </div>
</template>

<script>
    export default {
        name: "CommentContentNav",
      props:["navData"]
    }
</script>

<style scoped>
  .nav{
    background:white;
    border-bottom:.1rem solid #f7f7f7;
  }
  .sectionTop{
    display: flex;
    align-items: center;
    width:100%;
    height:.5rem;
  }
  h4{
    font-size:.19rem;
    margin-left:.15rem;
    padding-top:.18rem;
    margin-bottom:.18rem;
  }
  .sectionTop img{
    width:.5rem;
    height:.5rem;
    padding-left:.17rem;
    padding-right:.05rem;
  }
  .info{
    display: flex;
    align-items: center;
  }
  .info span:first-child{
    font-size:.15rem;
    color:#2a567d;
  }
  .info .zuan{
    width:.4rem;
    height:.15rem;
    padding-left:0;
    margin-left:.08rem;
  }
  .time{
    font-size:.11rem;
    color:#8d8d8d;
  }
  .follow{
    width:.63rem;
    height:.26rem;
    color:white;
    margin-left:.75rem;
    font-size:.13rem;
    background:#ff6531;
    text-align:center;
    line-height:.26rem;
    border-radius: .11rem;
  }
  .uls:first-child{
    padding-top:.12rem;
  }
  .uls{
     display: flex;
     justify-content: space-between;
     padding:0 .15rem .08rem .15rem;
   }
  .uls li img{
    width:1.13rem;
    height:1.13rem;
  }
  .scenicIntro{
     display: flex;
     align-items: center;
   }
  .ping{
    font-size:.14rem;
    line-height:.2rem;
    padding-left:.2rem;
    padding-right:.25rem;
    padding-bottom:.14rem;
  }
  .scenic{
    display: flex;
    width:3.42rem;
    height:.9rem;
    border:2px solid #f2f0f2;
    border-radius:.11rem;
    margin:0 auto;
  }
  .scenic img{
    height:.69rem;
    margin:.1rem;
  }
  .scenicIntro h5{
    font-size:.16rem;
    font-weight:600;
  }
  .txt{
    font-size:.15rem;
    color:#6b6c6b;
    padding-left:.5rem;
  }
  .address{
    margin-top:.1rem;
    font-size:.13rem;
    color:#6b6c6b;
  }
  .play{
    width:1.12rem;
    height:.25rem;
    margin-left:.15rem;
    margin-top:.2rem;
    line-height:.25rem;
    text-align: center;
    font-size:.13rem;
    background:#f7f3f7;
    border-radius:.12rem;
  }
  .play span:first-child{
    color:#ff5216;
  }
  .liuLan{
    font-size:.13rem;
    color:#6b6c6b;
    padding:.1rem .15rem .15rem .15rem;
    border-bottom:1px solid #ebe7eb;
  }
  .shou{
    display: flex;
    align-items: center;
  }
  .shou img:first-child{
    width:.2rem;
    height:.2rem;
  }
  .shou img:nth-child(2){
    width:.3rem;
    height:.3rem;
    margin-left:.16rem;
    margin-right:.05rem;
  }
  .shou img:nth-child(4),.shou img:nth-child(5){
    width:.18rem;
    height:.18rem;
  }
  .shou img:nth-child(4){
    margin-left:1.3rem;
    margin-right:.5rem;
  }
  .rec{
    margin-left:.15rem;
  }
  .rec h5{
    margin-top:.18rem;
    margin-left:.15rem;
    font-size:.2rem;
  }
  .write{
    display: flex;
    margin-top:.2rem;
    padding-bottom: .3rem;
  }
  .write img{
    width:.4rem;
    height:.4rem;
    margin-right:.11rem;
  }
  .write span{
    display: inline-block;
    width:2.8rem;
    height:.36rem;
    border-radius: .15rem;
    text-align: center;
    line-height:.36rem;
    font-size:.13rem;
    background:#f7f7f7;
    color:#646664;
  }
</style>
