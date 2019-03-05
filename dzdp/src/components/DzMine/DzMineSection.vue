<template>
  <section>
    <div class="header">
      <i class="iconfont icon-shezhi" @click="GoTo"></i>
      <i class="iconfont icon-xiaoxi"></i>
    </div>
    <div class="userBox login" v-if="changeStyle==true">
      <img src="../../assets/img/userbg.png" alt="">
      <div class="userInfo">
        <img class="icon" src="../../assets/img/icon.png" alt="">
        <div>
          <div class="userCon">
            <p class="username">{{user}}</p>
            <img class="level" src="../../assets/img/level-01.png" alt="">
            <div class="huizhang">
              <img src="../../assets/img/hiuzhang.png" alt="">
              <p class="nums">5枚</p>
            </div>
          </div>
          <p class="ziliao">未设置个人资料</p>
          <ul class="fans">
            <li>粉丝 1</li>
            <li>关注 3</li>
          </ul>
          <p class="upgrade">距离lv2只剩26贡献值</p>
        </div>

      </div>
      <div class="home">
        <p>个人主页 <i class="iconfont icon-youjiantou"></i></p>
      </div>
    </div>

    <div class="unLogin" @click="GoLogin" v-if="changeStyle==false">
      <img class="icon" src="../../assets/img/icon.png" alt="">
      <p class="hitLogin">点击登录</p>
    </div>


    <dz-mine-section-tool :DzMineData="DzMineData.toolList"></dz-mine-section-tool>
    <dz-mine-section-order :DzMineData="DzMineData.toolList2"></dz-mine-section-order>
    <dz-mine-section-list :DzMineData="DzMineData.hitList1"></dz-mine-section-list>
    <dz-mine-section-list :DzMineData="DzMineData.hitList2"></dz-mine-section-list>
    <dz-mine-section-list :DzMineData="DzMineData.hitList3"></dz-mine-section-list>

  </section>
</template>

<script>
    import DzMineSectionTool from "./DzMineSectionTool";
    import DzMineSectionList from "./DzMineSectionList";
    import DzMineSectionOrder from "./DzMineSectionOrder";
    export default {
        name: "DzMineSection",
        components: {DzMineSectionOrder, DzMineSectionList, DzMineSectionTool},
        props:["DzMineData","changeStyle"],
        computed:{
          user:function() {
            return this.$store.getters.getUserName;
          }
        },
        methods:{
          GoLogin(){
            this.$router.push("/VsDl")
          },
          GoTo(){
            this.$router.push({name:"ExitPage",params:{username:this.username}})
          }
        }
    }
</script>

<style scoped>
  section {
    flex: 1;
    overflow-y: auto;
  }

  .header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .header i{
    color: #000;
    font-size: 0.24rem;
    margin:0.1rem;
  }

  .header .icon-xiaoxi{
    color: #000;
    font-size: 0.28rem;
  }
  .userBox {
    margin: 0 0.15rem;
    position: relative;
    margin-bottom: 0.3rem;
  }
  .hitLogin {
    font-size: 0.24rem;
  }

  .userBox img{
    width: 100%;
    border-radius: 0.14rem;
  }

  .userInfo {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
  }
  .userInfo .icon{
    width: 0.55rem;
    height: 0.55rem;
    border-radius: 50%;
    margin: 0.18rem;
  }

  .userCon {
    display: flex;
    margin-top: 0.2rem;
    align-items: center;
  }

  .username {
    color: #fff;
    font-size: 0.18rem;
    width: 60%;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

  }
  .userCon .level {
    width:0.32rem;
    height: 0.16rem;
    border-radius: 0.1rem;
    margin-left: 0.2rem;
    margin-right: 0.1rem;
  }
  .userCon .huizhang {
    width: 0.42rem;
    height: 0.16rem;
    position: relative;
  }
  .huizhang img{
    width:0.38rem;
    height: 0.17rem;
  }
  .nums{
    color: #98783b;
    font-size: 0.12rem;
    position: absolute;
    top: 0;
    right:0.03rem;
  }

  .ziliao {
    color: #fff;
    font-size: 0.13rem;
    margin: 0.15rem 0;
  }
  .fans {
    display: flex;
  }
  .fans li{
    color: #fff;
    font-size: 0.13rem;
    padding:0 0.1rem;
  }
  .fans li:first-child{
    border-right: 1px solid red;
    padding-left: 0;
  }

  .home {
    background: #ff6633;
    border-radius: 0.1rem 0 0 0.1rem;
    position: absolute;
    right: -0.05rem;
    top: 0.5rem;
  }

  .home p{
    font-size: 0.16rem;
    color: #fff;
    padding:0.02rem;
  }
  
  .upgrade {
    font-size: 0.12rem;
    color: #fff;
    margin-top: 0.3rem;
    text-indent: -0.5rem;
  }

  .unLogin{
    display: flex;
    margin:0.2rem;
    align-items: center;
  }
  .unLogin img{
    width: 0.5rem;
    height: 0.5rem;
  }
  .hitLogin{
    font-size: 0.24rem;
    margin-left: 0.15rem;
  }

</style>
