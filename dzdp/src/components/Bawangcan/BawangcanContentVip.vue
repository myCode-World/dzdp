<template>
    <div class="vip">
      <img class="imgs" src="../../../static/assets/img/vip.png" alt="">
      <div class="list">
        <div class="details" v-for="k in vipData">
          <div class="leftBox">
            <img :src="k.pic" alt="">
          </div>
          <div class="rightBox">
            <div>
              <img v-if="k.pic2" :src="k.pic2" alt="">
              <span>{{k.you}}</span>
            </div>
            <p>{{k.address}}</p>
            <p class="qiang">抢</p>
          </div>
        </div>
        <p class="dao">到底了</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BawangcanContentVip",
      props:["vipData"]
    }
</script>

<style scoped>

.imgs{
  width:3.4rem;
  height:.8rem;
  margin:0 auto;
  margin-bottom:.1rem;
}
.list{
  background:white;
}
.details{
  display: flex;
  margin-left:.17rem;
  margin-right:.17rem;
  border-bottom:1px solid #ece8ec;
}
.leftBox img{
  width:1.1rem;
  height:.78rem;
  margin:.14rem .1rem .13rem 0;
}
.rightBox div{
  display: flex;
}
.rightBox div img{
  width:.37rem;
  height:.14rem;
  margin-top:.15rem;
  margin-right:.05rem;
}
.rightBox div span{
  font-size:.13rem;
  font-weight: 600;
  margin-bottom:.05rem;
  margin-top:.13rem;

}
.rightBox p:nth-child(2){
  font-size:.11rem;
  color:#636563;
  margin-bottom:.2rem;
}
.qiang{
  width:.45rem;
  height:.23rem;
  margin-left:1.66rem;
  text-align: center;
  line-height:.23rem;
  border-radius:.1rem;
  font-size:.11rem;
  color:white;
  background:#ff6531;
}
  .dao{
    font-size:.1rem;
    color:#bebabe;
    height:.34rem;
    text-align: center;
    line-height:.34rem;
  }
</style>
