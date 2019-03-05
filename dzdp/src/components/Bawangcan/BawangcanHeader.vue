<template>
    <div class="header">
        <div class="headerTop">
          <img src="../../../static/assets/img/fanhui.png" alt="" @click="GoBack"/>
          <img src="../../../static/assets/img/bawang.png" alt=""/>
          <img src="../../../static/assets/img/enjoy.png" alt=""/>
        </div>
      <div class="headerBottom">
        <div class="leftBox">
          <h1>品质生活0元起</h1>
          <p>2268万人已报名570384人已中奖</p>
        </div>
        <div class="RightBox">
          <p>立即签到</p>
          <p>我的霸气值：1></p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BawangcanHeader",
        methods:{
          GoBack(){
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
.header{
  width:100%;
  height:1.16rem;
  background:linear-gradient(to right bottom,#524939,#312821,#292018,#211818);
}
  .headerTop{
    display: flex;
    padding-top:6px;
    justify-content: space-between;
    padding-left:.15rem;
    padding-right:.15rem;
  }
.headerTop img:first-child{
   width:.28rem;
   height:.28rem;
 }
.headerTop img:last-child{
  width:.28rem;
  height:.28rem;

}
.headerTop img:nth-child(2){
  width:.95rem;
  height:.3rem;
}
  .headerBottom{
    display: flex;
    justify-content: space-around;
    margin-top:.21rem;
  }
  .leftBox h1{
    font-size:.21rem;
    color:white;
    margin-bottom:.03rem;
  }
  .leftBox p{
    font-size:.1rem;
    color:#6a6868;
  }
  .RightBox{
    margin-top:.02rem;
  }
  .RightBox p:first-child{
    width:.64rem;
    height:.22rem;
    border-radius: .08rem;
    background:#ff6531;
    color:white;
    line-height:.22rem;
    text-align: center;
    font-size:.1rem;
    margin-bottom:.05rem;
    margin-left:.2rem;

  }
  .RightBox p:last-child{
    font-size:.1rem;
    color:#58534e;
  }

</style>
