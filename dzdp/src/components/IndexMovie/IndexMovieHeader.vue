<template>
  <div class="page">
    <div class="header">
      <i class="iconfont icon-ico_leftarrow" @click="GoBack"></i>
      <div>
        <ul class="list">
          <router-link tag="li" to="/IndexMovieListFilm" :class="{ orange:changeOrg === 0}" @click.native="orange(0)">电影</router-link>
          <router-link tag="li" to="/IndexMovieDemand" :class="{ orange:changeOrg === 1}" @click.native="orange(1)">点播</router-link>
          <router-link tag="li" to="/IndexMovieMarket" :class="{ orange:changeOrg === 2}" @click.native="orange(2)">商城</router-link>
          <router-link tag="li" to="/IndexMovieShow" :class="{ orange:changeOrg === 3}" @click.native="orange(3)">演出</router-link>
        </ul>
      </div>
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
    export default {
        name: "IndexMovieHeader",
        data() {
          return {
            changeOrg:0
          }
        },
        methods:{
          orange:function(index){
            this.changeOrg = index;
          },
          GoBack(){
            this.$router.push("/DzIndex")
          }
        }
    }
</script>

<style scoped>
  .page{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .09rem .17rem;
  }
  .header .iconfont{
    font-size: .21rem;
    color: #070707;
  }
  .content{
    flex: 1;
    overflow: auto;
  }

  .list{
    display: flex;
    align-items: center;
    font-size: .13rem;
    color:#ed521c;
  }
  .list li{
    padding: 0 .15rem;
    line-height: .27rem;
    border:1px solid #e8400e;
    border-collapse: collapse;
  }
  .list li:first-child{
    border-top-left-radius: .04rem;
    border-bottom-left-radius: .04rem;
  }
  .list li:nth-child(2){
    border-left: 0;
    border-right: 0;
  }
  .list li:nth-child(3){
    border-right: 0;
  }
  .list li:last-child{
    border-top-right-radius: .04rem;
    border-bottom-right-radius: .04rem;
    }
  .orange{
    background-color: #ff6634;
    color: white;
  }
</style>
