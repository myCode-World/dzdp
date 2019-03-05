<template>
  <div class="section">
    <div v-for="n in commentData">
      <div class="sectionTop">
        <img :src="n.pic1" alt="">
        <div>
          <p class="info">
            <span>{{n.userName}}</span>
            <span>{{n.dengji}}</span>
          </p>
          <p class="time">
            <span>{{n.date}}</span>
            <span>{{n.time}}</span>
          </p>
        </div>
        <p class="follow">+关注</p>
      </div>
      <div class="sectionBottom">
        <p class="ping">{{n.intro}}</p>
        <p class="daFen"><span>打分</span><img :src="n.pic2" alt=""></p>
      </div>
      <div class="scenic">
        <img :src="n.pic3" alt="">
        <div class="scenicIntro">
          <h5>{{n.h5}}</h5>
          <p class="txt">
            <img :src="n.pic2" alt="">
            <span>{{n.money}}</span>
            <span>{{n.zan}}</span>
          </p>
          <p class="address">{{n.address}}</p>
        </div>
      </div>
      <p class="play">
        <span>#</span>
        <span>{{n.biao}}</span>
      </p>
      <p class="liuLan">{{n.num}}</p>
      <p class="liuLan shou">
        <img src="../../../static/assets/img/shou.png" alt="">
        <img :src="n.ren" alt="">
      </p>
      <div class="rec">
        <h5>评论</h5>
        <p class="write">
          <img src="../../../static/assets/img/ice.png" alt="">
          <span>快来写下你的评论吧~</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "CommentContentSection",
      props:["commentData"]
    }
</script>

<style scoped>
  .section{
    background:white;
    border-bottom:.1rem solid #f7f7f7;
  }
  .sectionTop{
    display: flex;
    align-items: center;
    width:100%;
    height:.5rem;
    padding-top:.25rem;
    margin-bottom:.24rem;
  }
  .sectionTop img{
    width:.5rem;
    height:.5rem;
    padding-left:.17rem;
    padding-right:.05rem;

  }
  .info{
    display: flex;
    margin-right:1.34rem;
  }
  .info span:first-child{
    font-size:.15rem;
    color:#2a567d;
  }
  .info span:last-child{
    display: inline-block;
    border-radius:.05rem;
    margin-top:.02rem;
    width:.27rem;
    height:.15rem;
    font-size:.1rem;
    text-align: center;
    line-height:.15rem;
    font-weight:600;
    color:white;
    background:#ffbe00;
  }
  .time{
    font-size:.11rem;
    color:#8d8d8d;
  }
  .follow{
    width:.63rem;
    height:.26rem;
    color:white;
    font-size:.13rem;
    background:#ff6531;
    text-align:center;
    line-height:.26rem;
    border-radius: .11rem;
  }
  .ping{
    font-size:.14rem;
    line-height:.2rem;
    padding-left:.2rem;
    padding-right:.25rem;
  }
  .daFen{
    display: flex;
    margin-top:.2rem;
    font-size:.13rem;
    padding-left:.2rem;
    align-items: center;
    margin-bottom:.2rem;
  }
  .daFen img{
    margin-left:.05rem;
    width:.69rem;
    height:.13rem;
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
    /*width:.7rem;*/
    height:.69rem;
    margin:.1rem;
  }
  .scenicIntro h5{
    font-size:.16rem;
    font-weight:600;
    margin-top:.13rem;
  }
  .txt{
    display: flex;
    align-items: center;
  }
  .txt img{
    width:.69rem;
    height:.13rem;
    margin-left:0;
  }
  .txt span{
    font-size:.13rem;
    color:#6b6c6b;
  }
  .txt span:nth-child(2){
    margin-right:.57rem;
  }
  .address{
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
    margin-right:.16rem;

  }
  .shou img:last-child{
    width:.3rem;
    height:.3rem;
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
