<template>
    <footer>
      <router-link tag="a" to="/DzIndex" active-class='active'>
        <i class="iconfont icon-dazhongdianping"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="a" to="/DzStrategy" active-class='active'>
        <i class="iconfont icon-raider"></i>
        <p>攻略</p>
      </router-link>
      <router-link tag="a" to="/DzPhotograph" active-class='active' class="photo">
        <i class="iconfont icon-jiahao"></i>
      </router-link>
      <router-link tag="a" to="/DzFollow" active-class='active'>
        <i class="iconfont icon-aixin"></i>
        <p>关注</p>
      </router-link>
      <router-link tag="a" to="/DzMine" active-class='active'>
        <i class="iconfont icon-wode2"></i>
        <p>我的</p>
      </router-link>
      <router-link tag="a" to="/DzMine" active-class='active' v-if="false">
        <i class="iconfont icon-wode2"></i>
        <p>我的</p>
      </router-link>
    </footer>
</template>

<script>
    export default {
        name: "DzIndexFooter"
    }
</script>

<style scoped>

  footer {
    height: 0.55rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  footer .iconfont{
    display: block;
    font-size: 0.24rem;
    color: #686868;
  }
  footer p{
    color: #686868;
    font-size: 0.1rem;
  }
  
  .active p{
    color: #ff6633;
  }
  .active .iconfont{
    color: #ff6633;
  }

  .photo {
    position: relative;
    top: -0.15rem;
    padding: 0.1rem;
    background: linear-gradient(to right, #ff4f2a 50%,#ff9252 100%);
    border-radius: 50%;
  }
  .photo .iconfont {
    color: #fffdfd;
  }

</style>
