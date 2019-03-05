<template>
    <div class="daYang">
      <div class="nav">
        <div class="place">
          <p class="hotPlace"><span>热门目的地</span><span>8个</span></p>
          <ul class="placeUl">
            <li><a href="#">悉尼</a></li>
            <li><a href="#">墨尔本</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">奥克兰</a></li>
            <li><a href="#">布里斯班</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">黄金海岸</a></li>
            <li><a href="#">皇后镇</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">基督城</a></li>
            <li><a href="#">凯恩斯</a></li>
          </ul>
        </div>
        <div class="place">
          <p class="hotPlace"><span>全部国家</span><span>14个</span></p>
          <ul class="placeUl">
            <li><a href="#">萨摩亚</a></li>
            <li><a href="#">澳大利亚</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">新西兰</a></li>
            <li><a href="#">斐济</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">帕劳</a></li>
            <li><a href="#">基里巴斯</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">巴布亚新几内亚</a></li>
            <li><a href="#">密克罗尼西亚</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">库克群岛</a></li>
            <li><a href="#">新喀里多尼亚</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">汤加</a></li>
            <li><a href="#">瓦努阿图</a></li>
          </ul>
          <ul class="placeUl">
            <li><a href="#">纽埃</a></li>
            <li><a href="#">马绍尔群岛</a></li>

          </ul>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "daYangZhou"
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
