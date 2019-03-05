<template>
  <header>
    <router-link tag="div" to="/Local" class="address">
      <h3>{{city}}</h3>
      <i class="iconfont icon-xiajiantou"></i>
    </router-link>
    <div class="search" @click="PutIn">
      <i class="iconfont icon-sousuo1"></i>
      <p class="search_text">输入商户名、地点或菜名</p>
    </div>
    <div class="more">
      <i class="iconfont icon-xiazai9" @click="showHelp"></i>
    </div>
    <ul class="showBox" v-if="showData">
      <li v-for="i in showData">
        <i class="iconfont" :class="i.iconClass"></i>
        <p class="help">{{i.helpName}}</p>
      </li>

    </ul>
  </header>
</template>

<script>
    export default {
        name: "DzIndexHeader",
        props:["IndexData"],
        data(){
         return  {
           showData:"",
           flag:0
         }
        },
        computed:{
          city:function() {
            // 通过vuex的getters方法来获取state里面的数据
            return this.$store.getters.getCityFn;
          }
        },
        methods:{
          showHelp(){
            if(this.flag===0){
              this.showData=this.IndexData;
              this.flag=1;
            }else{
              this.showData="";
              this.flag=0
            }

          },
          PutIn(){
            this.$router.push("/SearchPage")
          }
        }
    }
</script>

<style scoped>
  header {
    display: flex;
    height:0.32rem;
    justify-content: space-between;
    align-items: center;
    margin: 0.1rem;
    background: #fff;
  }

  /*地址选择*/
  .address {
    display: flex;
    align-items: center;
  }
  .address h3{
    color: #101010;
    font-size: 0.16rem;
    height: 0.32rem;
    line-height: 0.32rem;
    margin-right: 0.05rem;
  }
  .address .iconfont{
    color: #010101;
    font-size: 0.16rem;
  }

  .search .iconfont,.more .iconfont{
    color: #010101;
    font-size: 0.18rem;
  }


  /*搜索框*/
  .search {
    width: 2.5rem;
    height: 0.32rem;
    border-radius:0.2rem;
    box-shadow: 0px 0px 10px 5px #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .search_text{
    color: #010101;
    font-size: 0.16rem;
    margin: 0 0.1rem;
  }

  /*更多*/
  .more {
    display: flex;
    align-items: center;
  }

  .showBox {
    background: #f9f9f9;
    width: 1rem;
    height:auto;
    position: absolute;
    top: 0.55rem;
    right: 0rem;
    z-index: 10;
    border-radius: 0.05rem;
  }
  .showBox li {
    margin:0.1rem;
    padding-bottom: 0.1rem;
    display: flex;
    align-items: center;
  }
  .showBox li i{
    display: block;
    font-size: 0.16rem;
  }
  .showBox:after{
    content: "";
    width: 0rem;
    height: 0rem;
    border: 0.1rem solid transparent;
    border-bottom-color: #f9f9f9;
    position: absolute;
    right: 0.1rem;
    top: -0.2rem;

  }

  .help {
    font-size: 0.13rem;
    margin-left: 0.12rem;
    padding-bottom: 0.05rem;
    border-bottom: 1px solid #eee;
  }

</style>
