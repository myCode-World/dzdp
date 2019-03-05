<template>
    <div class="gangAo">
      <div class="nav">
        <div class="place">
          <p class="hotPlace"><span>热门目的地</span><span>8个</span></p>
          <ul class="placeUl">
            <li><a href="#">中国香港</a></li>
            <li><a href="#">中国澳门</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">台北</a><span>(中国台湾)</span></li>
            <li><a href="#">高雄</a><span>(中国台湾)</span></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">台中</a><span>(中国台湾)</span></li>
            <li><a href="#">新北</a><span>(中国台湾)</span></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">花莲</a><span>(中国台湾)</span></li>
            <li><a href="#">桃园</a><span>(中国台湾)</span></li>
          </ul>
        </div>
        <div class="place">
          <p class="hotPlace"><span>中国香港</span><span>1个</span></p>
          <ul class="placeUl">
            <li><a href="#">中国香港</a></li>
          </ul>
        </div>
        <div class="place">
          <p class="hotPlace"><span>中国澳门</span><span>1个</span></p>
          <ul class="placeUl">
            <li><a href="#">中国澳门</a></li>
          </ul>
        </div>
        <div class="place">
          <p class="hotPlace"><span>中国台湾</span><span>19个</span></p>
          <ul class="placeUl">
            <li><a href="#">中国台湾</a></li>
            <li><a href="#">台北</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">花莲</a></li>
            <li><a href="#">高雄</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">台南</a></li>
            <li><a href="#">桃园</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">新北</a></li>
            <li><a href="#">台中</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">垦丁</a></li>
            <li><a href="#">南投</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">基隆</a></li>
            <li><a href="#">台东</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">嘉义</a></li>
            <li><a href="#">宜兰</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">新竹</a></li>
            <li><a href="#">彰化</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">苗栗</a></li>
            <li><a href="#">澎湖</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">恒春</a></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "gangAo"
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
