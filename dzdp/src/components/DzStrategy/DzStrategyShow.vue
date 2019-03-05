<template>
    <div class="showBox">
      <div class="showList" v-for="s in DzStrategyData">
        <img :src="s.bigPic" alt="">
        <h4>{{s.showTitle}}</h4>
        <div class="position">
          <img src="../../assets/img/position.png" alt="">
          <p>{{s.near}}</p>
        </div>
        <div class="userInfo">
          <div class="user">
            <img class="userImg" :src="s.userImg" alt="">
            <img class="grade" :src="s.grade" alt="">
            <p class="userName">{{s.userName}}</p>
            <img class="level" :src="s.jibie" alt="">
          </div>
          <div class="zan">
            <i class="iconfont icon-dianzan"></i>
            <p class="zanNum">16</p>
          </div>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "DzStrategyShow",
        props:["DzStrategyData"]
    }
</script>

<style scoped>
  .showBox{
    border-bottom: 0.1rem solid #f0f0f0;
  }

  .showList {
    margin:0.1rem;
    padding-bottom: 0.1rem;
  }

  .showList img{
    width: 100%;
  }

  .showList h4{
    font-size: 0.16rem;
    margin-top: 0.1rem;
  }
  .position {
    display: flex;
    margin: 0.13rem 0;
  }

  .position img{
    width: 0.16rem;
    height: 0.18rem;
  }
  .position p{
    font-size: 0.13rem;
    color: #535353;
  }
  .userInfo{
    display: flex;
    justify-content: space-between;
    margin-right:0.15rem;
  }
  .user {
    position: relative;
    display: flex;
    align-items: center;
  }
  .user .userImg {
    width: 0.24rem;
    height: 0.24rem;
  }
  .user .grade {
    width: 0.12rem;
    position: absolute;
    bottom: 0;
    left: 0.15rem;
  }

  .userName {
    color: #2f557a;
    font-size: 0.14rem;
    margin:0 0.1rem;
  }
  .user .level {
    width: 0.28rem;
    height: 0.15rem;
  }
  .zan {
    display: flex;
    align-items: center;
  }
  .zan .iconfont{
    display: block;
  }
  .zanNum {
    font-size: 0.1rem;
    margin-left: 0.1rem;
  }



</style>
