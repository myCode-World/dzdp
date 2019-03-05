<template>
  <section>
    <div class="followList" v-for="(f,index) in DzFollowData">
      <div class="user">
        <img class="userImg" :src="f.followList.userImg" alt="">
        <img class="grade" :src="f.followList.grade" alt="">
        <div class="userName">
          <p>{{f.followList.userName}}</p>
          <div class="time">{{f.followList.time}}</div>
        </div>
        <img class="level" :src="f.followList.level" alt="">
      </div>
      <div class="imgBox">
        <img :class="f.followList.boxClass" :src="g.imgPic" alt="" v-for="(g,index) in f.followList.imgBox"/>
      </div>
      <div class="evaluate">
        <p>大年三十的全家便利店，货架都空空啦。<br>过来买了关东煮，很一般<br>不好吃<br>买了沁心卤蛋......略失望</p>
        <div class="score">打分：<i class="iconfont icon-shoucang"></i></div>
      </div>
      <div class="shopBox">
        <img :src="f.followList.shopImg" alt="">
        <div class="shopInfo">
          <h4>{{f.followList.shopTitle}}</h4>
          <p>{{f.followList.shopaddre}}</p>
        </div>
        <div class="shoucan">
          <i class="iconfont icon-shoucang"></i>
          <span>{{f.followList.shoucan}}</span>
        </div>
      </div>
      <div class="look">
        <p>浏览 <span>{{f.followList.look}}</span></p>
      </div>
      <div class="icon">
        <div class="zan">
          <i class="iconfont icon-dianzan"></i>
          <div class="users"><img :src="i.imgPic" alt="" v-for=" i in f.followList.usersImg"></div>
          <p>{{f.followList.usersNum}}人赞</p>
        </div>
        <div class="forward">
          <i class="iconfont icon-speechbubble"></i>
          <i class="iconfont icon-fenxiang"></i>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
    export default {
      name: "DzFollowSection",
      props: ["DzFollowData"]
    }
</script>

<style scoped>
  section {
    flex: 1;
    overflow-y: auto;
  }
  .followList {
    padding: 0.1rem;
    border-bottom: 0.1rem solid #f0f0f0;
  }
  .user {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 0.1rem;
    margin-top: 0.1rem;
  }

  .user .userImg {
    width: 0.4rem;
    height: 0.4rem;
  }

  .user .grade {
    width: 0.16rem;
    position: absolute;
    bottom: 0;
    left: 0.3rem;
  }

  .userName p{
    color: #2f557a;
    font-size: 0.14rem;
    margin:0 0.1rem;
  }

  .time {
    font-size: 0.12rem;
    color: #8f8f8f;
    text-align: center;
  }
  .level {
    width: 0.4rem;
    height: 0.15rem;
  }

  .imgBox {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 0.1rem;
    border-radius: 0.1rem;
    overflow: hidden;
  }
  .imgBox img {
    margin-bottom: 0.05rem;
    border-radius: .04rem;
  }
  .column3{
    width: 1.13rem;
    height: 1.13rem;
  }
  .column2{
    width: 1.7rem;
    height: 1.7rem;
  }
  .column1{
    width: 3.44rem;
    height: 3.44rem;
  }

  .shopBox {
    display: flex;
    align-items: center;
    background: #f3f3f3;
    border-radius: 0.1rem;
  }

  .shopBox img{
    width: 0.42rem;
    height: 0.42rem;
    margin: 0.1rem;
  }

  .evaluate p{
    color: #121212;
    font-size: 0.14rem;
  }
  .score {
    display: flex;
    align-items:center;
    color: #121212;
    font-size: 0.14rem;
  }
  .shopInfo {
    width: 60%;
    overflow: hidden;
  }
  .shopInfo h4{
    color: #121212;
    font-size: 0.14rem;
  }
  .shopInfo p{
    color:#6d6d6d;
    font-size: 0.12rem;
    margin-top: 0.05rem;
  }
  .shoucan {
    display: flex;
    margin-left: 0.15rem;
  }

  .shoucan span {
    display: block;
    color: #6d6d6d;
    font-size: 0.14rem;
    margin-left: 0.05rem;
  }

  .look p {
    color: #858585;
    font-size: 0.12rem;
    margin: 0.1rem 0;
  }

  .icon{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
 i {
    display: block;
  }
  .zan {
    display: flex;
    align-items: center;
  }

  .zan img{
    width: 0.2rem;
    height: 0.2rem;
    margin: 0 0.15rem;
  }
  .zan p{
    color: #858585;
    font-size: 0.12rem;
  }
  .forward {
    display: flex;
    align-items: center;
  }
  .forward i {
    margin: 0 0.2rem;
  }

  .users{
    display: flex;
    justify-content: flex-start;
    padding: 0 0.15rem;
  }
  .users img{
    margin: 0;
  }

</style>
