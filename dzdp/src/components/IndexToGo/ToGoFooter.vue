<template>
    <div class="bigBox">
      <div class="content">
        <router-view></router-view>
      </div>
      <div class="footer">
        <router-link tag="div" to="/ToGo" :class="{ togo:changeColor === 0}" @click.native="togo(0)">
          <i class="iconfont icon-icon-test"></i>
          <p>外卖</p>
        </router-link>
        <router-link tag="div" to="/OrderForm" :class="{ togo:changeColor === 1}" @click.native="togo(1)">
          <i class="iconfont icon-weibiaoti-"></i>
          <p>订单</p>
        </router-link>
        <router-link tag="div" to="/MySelf" :class="{ togo:changeColor === 2}" @click.native="togo(2)">
          <i class="iconfont icon-duomeitiicon-"></i>
          <p>我的</p>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ToGoFooter",
        data() {
          return {
            changeColor:0
          }
        },
        methods:{
          togo:function(index){
            this.changeColor = index;
          }
        }
    }
</script>

<style scoped>
  .bigBox{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .content{
    flex: 1;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #f6f6f6;
  }
  .footer{
    display: flex;
    justify-content: space-around;
    padding: .07rem;
  }
  .footer div{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #7f7f7f;
  }
  .iconfont{
    font-size: .21rem;
  }
  p{
    font-size: .09rem;
    line-height: .2rem;
  }
  .togo .iconfont,.togo p{
    color: #ff5c24;
  }
</style>
