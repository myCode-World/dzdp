<template>
    <div class="feiZhou">
      <div class="daYang">
        <div class="nav">
          <div class="place">
            <p class="hotPlace"><span>热门目的地</span><span>8个</span></p>
            <ul class="placeUl">
              <li><a href="#">开罗</a></li>
              <li><a href="#">卡萨布兰卡</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">毛里求斯</a></li>
              <li><a href="#">马拉喀什</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">菲斯</a></li>
              <li><a href="#">约翰内斯堡</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">开普敦</a></li>
              <li><a href="#">赫尔格达</a></li>
            </ul>
          </div>
          <div class="place">
            <p class="hotPlace"><span>全部国家</span><span>52个</span></p>
            <ul class="placeUl">
              <li><a href="#">南非</a></li>
              <li><a href="#">埃及</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">毛里求斯</a></li>
              <li><a href="#">马达加斯加</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">塞舌尔</a></li>
              <li><a href="#">摩洛哥</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">埃塞俄比亚</a></li>
              <li><a href="#">肯尼亚</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">坦桑尼亚</a></li>
              <li><a href="#">中非</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">乌干达</a></li>
              <li><a href="#">乍得</a></li>
            </ul>
            <ul class="placeUl">
              <li><a href="#">利比亚</a></li>
              <li><a href="#">利比里亚</a></li>

            </ul>

          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "feiZhou"
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
