<template>
    <div class="bigBox">
      <p class="showTitle">- 为你推荐 -</p>
      <div class="showBox" v-for="n in IndexMovieData.showListData">
        <img :src="n.pic"/>
        <ul class="showList">
          <li><h3>{{n.title}}</h3></li>
          <li>
            <i class="iconfont icon-xiangzuoyuanjiantouzuojiantouxiangzuomianxing"></i>
            <p>{{n.time}}</p>
          </li>
          <li>
            <i class="iconfont icon-dingwei"></i>
            <p>{{n.site}}</p>
          </li>
          <li>
            <p>￥{{n.price}}</p>
            <span v-if="n.selfs" :class="n.selfs">自营</span>
            <span v-if="n.choose" :class="n.choose">可选座</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieShowForYou",
        props:["IndexMovieData"]
    }
</script>

<style scoped>
  .bigBox{
    display: flex;
    flex-direction: column;
    margin-top: .13rem;
    background-color: white;
  }
  .showTitle{
    width: 100%;
    text-align: center;
    font-size: .18rem;
    color: #303030;
    font-weight: 800;
    line-height: .5rem;
    border-bottom: 1px solid #eaeaea;
  }
  .showBox{
    display: flex;
    padding: .16rem .14rem;
    align-items: center;
  }
  .showBox img{
    width: 1.04rem;
    height: 1.41rem;
    margin-right: .1rem;
  }
  .showList{
    height: 1.41rem;
    display: flex;
    flex-direction: column;
  }
  .showList li{
    display: flex;
    align-items: center;
  }
  .showList li:first-child h3{
    font-size: .2rem;
    color: #111111;
    margin-bottom: .15rem;
  }
  .showList li:nth-child(2),.showList li:nth-child(3){
    font-size: .12rem;
    color: #8b8b8b;
    line-height: .22rem;
  }
  .showList li:last-child{
    font-size: .22rem;
    color: #ff612d;
    margin-top: .31rem;
  }
  .self{
    font-size: .11rem;
    color: #f68a00;
    background-color: #fef4e8;
    border:1px solid #fbd9a6;
    padding: .03rem;
    line-height: .16rem;
    border-radius: .03rem;
    margin-right: .11rem;
    margin-left: .07rem;
  }
  .choose{
    font-size: .11rem;
    color: #325ec5;
    background-color: #eef8ff;
    border:1px solid #bacef7;
    padding: .03rem;
    line-height: .16rem;
    border-radius: .03rem;
  }
</style>
