<template>
    <div class="tuiJian">
      <div class="nav">
        <div class="GPSDing">
          <img src="../../../static/assets/img/ding.png" alt="">
          <h5>西安</h5>
          <span>GPS定位</span>
        </div>
        <div class="place">
          <p class="hotPlace"><span>热门目的地</span><span>10个</span></p>
          <ul class="placeUl">
            <li><a href="#">中国香港</a></li>
            <li><a href="#">中国澳门</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">东京</a></li>
            <li><a href="#">曼谷</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">大阪</a></li>
            <li><a href="#">台北<span>(中国台湾)</span></a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">新加坡</a></li>
            <li><a href="#">首尔</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">普吉岛</a></li>
            <li><a href="#">京都</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "TuiJian"
    }
</script>

<style scoped>
  .nav{
    background:white;
    margin-left:1.07rem;
  }
  .GPSDing{
    height:.51rem;
    display: flex;
    align-items: center;

  }
  .GPSDing img{
    width:.15rem;
    height:.15rem;

  }
  .GPSDing h5{
    margin-left:.08rem;
    margin-right:.1rem;
    font-size:.18rem;
  }
  .GPSDing span{
    font-size:.13rem;
    color:#898989;
  }
  .hotPlace{
    display: flex;
    line-height:.51rem;

  }
  .hotPlace span:first-child{
    font-size:.15rem;
  }
  .hotPlace span:last-child{
    font-size:.13rem;
    color:#8a8a8a;
    margin-left:.05rem;
  }
  .placeUl{
    display: flex;
    font-size:.14rem;
  }
  .placeUl li{
    width:1.2rem;
    height:.36rem;
    color:#101010;
    text-align:center;
    margin-right:.08rem;
    margin-bottom:.08rem;
    line-height:.36rem;
    border:1px solid #ebebeb;
    border-radius: 5px;
  }
</style>
