<template>
  <div class="yaZhou">
    <div class="nav">
      <div class="place">
        <p class="hotPlace"><span>热门目的地</span><span>8个</span></p>
        <ul class="placeUl">
          <li><a href="#">东京</a></li>
          <li><a href="#">曼谷</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">大阪</a></li>
          <li><a href="#">新加坡</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">首尔</a></li>
          <li><a href="#">普吉岛</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">京都</a></li>
          <li><a href="#">清迈</a></li>
        </ul>
      </div>
      <div class="place">
        <p class="hotPlace"><span>全部国家</span><span>43个</span></p>
        <ul class="placeUl">
          <li><a href="#">日本</a></li>
          <li><a href="#">韩国</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">泰国</a></li>
          <li><a href="#">马来西亚</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">新加坡</a></li>
          <li><a href="#">菲律宾</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">马尔代夫</a></li>
          <li><a href="#">印度尼西亚</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">阿联酋</a></li>
          <li><a href="#">尼泊尔</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">斯里兰卡</a></li>
          <li><a href="#">柬埔寨</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">越南</a></li>
          <li><a href="#">印度</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">缅甸</a></li>
          <li><a href="#">土耳其</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">老挝</a></li>
          <li><a href="#">伊拉克</a></li>
        </ul>
        <ul class="placeUl">
          <li><a href="#">文莱</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "yaZhou"
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
