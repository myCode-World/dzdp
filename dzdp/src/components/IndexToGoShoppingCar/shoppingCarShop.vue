<template>
    <div class="shop">
      <div class="shopBox">
        <div class="address">
          <img class="iconPic" src="../../../static/img/shoppingCar/icon1.jpg"/>
          <p>陕西省西安市高新技术产业开发区丈八北路城市风景都市印象10-1412号</p>
          <i class="iconfont icon-dianhua"></i>
        </div>
        <div class="scrollPic">
          <img src="../../../static/img/shoppingCar/shop1.jpg"/>
          <img src="../../../static/img/shoppingCar/shop2.jpg"/>
          <img src="../../../static/img/shoppingCar/shop3.jpg"/>
          <img src="../../../static/img/shoppingCar/shop4.jpg"/>
          <img src="../../../static/img/shoppingCar/shop5.jpg"/>
          <img src="../../../static/img/shoppingCar/shop6.jpg"/>
        </div>
        <div class="seeSafe">
          <img class="iconPic" src="../../../static/img/shoppingCar/icon2.jpg"/>
          <p>
            <span>查看食品安全档案</span>
            <i class="iconfont icon-youjiantou"></i>
          </p>
        </div>
      </div>
      <div class="shopBox">
        <h3 class="shopSpaceTitle">配送信息</h3>
        <div class="meituan">
          <img class="iconPic" src="../../../static/img/shoppingCar/icon3.jpg"/>
          <p>配送方式:</p>
          <img class="meiPic" src="../../../static/img/togo/meituan.jpg">
        </div>
        <div class="sentTime">
          <img class="iconPic" src="../../../static/img/shoppingCar/icon4.jpg"/>
          <p>配送时间：11:00-21:00</p>
        </div>
      </div>
      <div class="shopBox">
        <h3 class="shopSpaceTitle">活动与服务</h3>
        <ul class="specialList">
          <li>
            <span>牌</span>
            <p>该商户为品牌商户</p>
          </li>
          <li>
            <span>付</span>
            <p>支持在线支付</p>
          </li>
          <li>
            <span>票</span>
            <p>本店支持开发票，开票金额0元起</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shoppingCarShop"
    }
</script>

<style scoped>
  .shop{
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;

  }
  .shopBox{
    display: flex;
    flex-direction: column;
    padding: 0 .16rem;
    background-color: white;
    margin-bottom: .1rem;
  }
  .address{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .iconPic{
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
  }
  .address{
    display: flex;
    justify-content: space-between;
    height: .67rem;
    border-bottom: 1px solid #f7f7f7;
  }
  .address p{
    width: 2.77rem;
    line-height: .16rem;
    font-size: .13rem;
    color: #252525;
    padding-right: .12rem;
    border-right: 1px solid #dddddd;
  }
  .scrollPic{
    overflow: auto;
    display: -webkit-box;
    border-bottom: 1px solid #dddddd;
    padding: .25rem 0;
  }
  .scrollPic::-webkit-scrollbar{
    display: none;
  }
  .scrollPic img{
    display: flex;
    width: .6rem;
    height: .6rem;
    margin-right: .1rem;
  }
  .seeSafe{
    display: flex;
    align-items: center;
    height: .48rem;
  }
  .seeSafe p{
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: .1rem;
  }
  .seeSafe p span{
    font-size: .12rem;
    color: #3e3e3e;
  }
  .seeSafe p i{
    font-size: .1rem;
    color: #b5b5b5;
  }
  .shopSpaceTitle{
    line-height: .5rem;
    font-size: .15rem;
    color: #2d2d2d;
  }
  .meituan,.sentTime{
    display: flex;
    align-items: center;
  }
  .meituan p, .sentTime p{
    font-size: .12rem;
    color: #2b2b2b;
    margin-left: .1rem;
  }
  .meiPic{
    width: .48rem;
    height: .15rem;
    margin-left: .08rem;
  }
  .sentTime{
    margin-top: .13rem;
    padding-bottom: .15rem;
  }
  .specialList{
    display: flex;
    flex-direction: column;
    padding-bottom: .15rem;
  }
  .specialList li{
    display: flex;
    align-items: center;
    height: .2rem;
  }
  .specialList li span{
    font-size: .1rem;
    color: #02a0da;
    border: 1px solid #02a0da;
    border-radius: .02rem;
    padding: 0 .02rem;
  }
  .specialList li p{
    font-size: .1rem;
    color: #292929;
    margin-left: .06rem;
  }
</style>
