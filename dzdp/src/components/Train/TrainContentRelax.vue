<template>
  <div class="relax">
    <div class="relaxBox">
      <div class="topBox">
        <h5>轻松学</h5>
        <p>看视频涨姿势</p>
      </div>
      <a href="#">更多视频></a>
    </div>
    <div class="img">
      <div class="img-box">
        <img src="../../../static/assets/img/sp.png" alt="">
        <h5>像文艺复兴时的画匠那样认真作画</h5>
        <p>
          <span>探好店</span>
        </p>
      </div>
      <div>
        <img src="../../../static/assets/img/sp1.png" alt="">
        <h5>嘻哈讲堂——玩嘻哈的人为啥这样打招呼</h5>
        <p>
          <span>乐理声乐</span>
          <span>涨姿势</span>
        </p>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "TrainContentRelax"
    }
</script>

<style scoped>
  .relax{
    width:100%;
    margin-bottom:.1rem;
    background:white;
    padding-bottom:.13rem;
    background: linear-gradient(to right bottom,#e8f1ff,white);
    display: flex;
    flex-direction: column;
  }
  .relaxBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topBox{
    display: flex;
    flex-direction: column;
    margin-left:.15rem;
    margin-top:.14rem;
    margin-bottom:.15rem;
  }
  .relax h5{
    font-size:.16rem;
    color:#081b3b;
  }
  .relax p{
    font-size:.12rem;
    color:#586577;

  }
  .relax a{
    width:.85rem;
    height:.26rem;
    float:right;
    font-size:.12rem;
    border-radius:.1rem;
    text-align: center;
    line-height:.26rem;
    color:white;
    margin-top:.2rem;
    margin-right:.16rem;
    background:#08c3ce;
    background: linear-gradient(left ,#08c3ce, #15a0ef)
  }
  .img{
    display: flex;
    justify-content: space-around;
  }
  .img div{
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 0 5px 3px #cdedf9;
  }
  .img img{
    width:1.68rem;
    height:1rem;
  }
  .img div:last-child{
    margin-left:.13rem;
  }
  .img div h5{
    margin-left:.1rem;
    margin-top:.06rem;
    margin-bottom:.13rem;
    font-size:.13rem;
    width:1.58rem;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .img div p{
    margin-left:.08rem;
    margin-bottom:.08rem;
  }
  .img div p span{
    display:inline-block;
    padding:2px 6px 6px 6px;
    font-size:.09rem;
    color:#626162;
    border:2px solid #e2e3e7;
  }
</style>
