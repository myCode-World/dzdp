<template>
    <div class="classifyBox">
      <div class="classifyList" v-for="i in IndexData" @click="GoTo">
        <div class="imgBtn">
          <img :src="i.classifyImg" alt="">
          <i class="iconfont icon-xiajiantou"></i>
        </div>

        <p class="classifyTxt">{{i.classifyTxt}}</p>
        <div class="userInfo">
          <div>
            <img class="user" :src="i.classifyUserImg" alt="">
            <img class="grade" :src="i.classifyUserGrade" alt="">
          </div>
          <p class="userTxt">{{i.classifyUserName}}</p>
          <div class="zan">
            <i class="iconfont icon-dianzan"></i>
            <p>16</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DzIndexClassifyList" ,
        props:["IndexData"],
        methods:{
          GoTo(){
            this.$router.push("/Comment")
          }
        }
    }
</script>

<style scoped>

  .classifyBox {
    column-count: 2;
    column-gap: 10px;
    column-fill:auto;
  }

  .classifyList {
    width:1.7rem;
    border: 1px solid #eee;
    margin-bottom: 0.1rem;
    border-radius: 0.1rem;
    padding-bottom: 0.15rem;
    -webkit-column-break-inside: avoid;
    box-shadow:0px 3px 5px 3px #eee;
  }
  .classifyList img{
    width: 100%;
  }
  .classifyList .classifyTxt{
    color: #222222;
    font-size: 0.14rem;
    font-weight: 600;
    margin:0.1rem 0.12rem;
  }
  .userInfo {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.15rem;
  }
  .userInfo .user {
    width: 0.2rem;
  }
  .userInfo .grade {
    width: 0.1rem;
    position: absolute;
    top: 0.1rem;
    left: 0.15rem;
  }
  .userInfo .userTxt{
    color: #000;
    font-size: 0.12rem;
    margin: 0 0.1rem;
    text-indent: -0.25rem;
  }

  .zan {
    display: flex;
    justify-content: space-around;
  }
  .zan p{
    font-size: 0.08rem;
    color: #111;
    margin-left: 0.05rem;
  }
  .zan .iconfont {
    display: block;
  }

  .imgBtn {
    position: relative;
  }
  .imgBtn .iconfont {
    color: #c0b6b9;
    display: block;
    position: absolute;
    right: 0.1rem;
    bottom: 0.1rem;
  }

</style>
