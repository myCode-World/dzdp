<template>
  <div class="ouZhou">
    <div class="nav">
      <div class="place">
        <p class="hotPlace"><span>热门目的地</span><span>8个</span></p>
        <ul class="placeUl">
          <li><a href="#">巴黎</a></li>
          <li><a href="#">伦敦</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">巴塞罗那</a></li>
          <li><a href="#">米兰</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">罗马</a></li>
          <li><a href="#">马德里</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">莫斯科</a></li>
          <li><a href="#">巴拉格</a></li>
        </ul>
      </div>
      <div class="place">
        <p class="hotPlace"><span>全部国家</span><span>57个</span></p>
        <ul class="placeUl">
          <li><a href="#">赛普洛斯</a></li>
          <li><a href="#">英国</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">法国</a></li>
          <li><a href="#">德国</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">意大利</a></li>
          <li><a href="#">西班牙</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">俄罗斯</a></li>
          <li><a href="#">荷兰</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">奥地利</a></li>
          <li><a href="#">比利时</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">希腊</a></li>
          <li><a href="#">葡萄牙</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">瑞士</a></li>
          <li><a href="#">瑞典</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">捷克</a></li>
          <li><a href="#">匈牙利</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">梵蒂冈</a></li>
          <li><a href="#">爱尔兰</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">冰岛</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ouZhou"
    }
</script>

<style scoped>
  .nav{
    background:white;
    margin-left:1.07rem;
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
  .placeUl li span{
    font-size:.11rem;
    color:#ababab;
    margin-left:.05rem;
  }
</style>
