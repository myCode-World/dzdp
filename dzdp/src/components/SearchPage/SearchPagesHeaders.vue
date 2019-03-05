<template>
    <div id="seahead">
      <div id="seahead_top">
        <img src="../../../static/PartThreeImg/left_jt.jpg" @click="GoBack">
        <input type="text" placeholder="输入商户名、地点或菜品">
        <span>搜索</span>
      </div>
      <div id="seahead_btn">
            <div @click="looks(0)" :class="{kitch:underlines===0}">
              <p class="fontBox">
                <i class="iconfont icon-raider"></i><span class="font">全部</span>
              </p>
              <span class="bottom"></span>
            </div>
            <div @click="looks(1)" :class="{kitch:underlines===1}">
              <p class="fontBox">
                <i class="iconfont icon-xiaoxi"></i><span class="font">点评</span>
              </p>
              <span class="bottom"></span>
            </div>
            <div @click="looks(2)" :class="{kitch:underlines===2}">
              <p class="fontBox">
                <i class="iconfont icon-duomeitiicon-"></i><span class="font">达人</span>
              </p>
              <span class="bottom"></span>
            </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SearchPagesHeaders",
      data(){
          return{
            underlines:0
          }
      },
        methods:{
          looks(n){
            this.$emit("halo",n);
            this.underlines = n;
          },
          GoBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  #seahead{
    display: -webkit-flex;
    flex-direction: column;
    border-bottom: 2px solid #ededed;
  }
  #seahead_top,#seahead_btn{
    display: -webkit-flex;
    align-items: center;
  }
  #seahead_top{
    height: .48rem;
    justify-content: center;
  }
  #seahead_top img{
    width: .13rem;
    height: .22rem;
  }
  #seahead_top input{
    width: 2.7rem;
    height:.28rem ;
    background-color: #eeeeee;
    border: none;
    outline: none;
    border-radius: .2rem;
    padding-left: .1rem;
    box-sizing: border-box;
    margin: 0 .12rem;
  }
  #seahead_top{
    font-size: .15rem;
    font-weight: bolder;
  }
  #seahead_btn{
    justify-content: center;
    padding: .04rem 0 0;
  }
  #seahead_btn div{
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    padding: .07rem .3rem 0;
    box-sizing: border-box;
    border-right: 2px solid #e4e4e4;
  }
  #seahead_btn div:last-child{
    border: none;
  }
  #seahead_btn .iconfont{
    font-size: .22rem;
    margin-right: .07rem;
  }
  #seahead_btn .font{
    font-size: .12rem;
  }
  .fontBox{
    display: flex;
    align-items: center;
  }
  .bottom{
    width: 100%;
    height: .04rem;
    background-color: white;
    margin-top: .05rem;
  }
  .kitch{
    color:#fd8f48 ;
  }
  .kitch  .bottom{
    background-color: #fd8f48;
  }
</style>
