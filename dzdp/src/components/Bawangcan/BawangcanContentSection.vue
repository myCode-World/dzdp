<template>
    <div class="section">
      <div v-for="n in detailsData">
        <div class="title">
          <h5>全城0元抢</h5>
          <p>VIP更容易中奖</p>
        </div>
        <div class="list">
          <ul>
            <li><p>商圈</p><p></p></li>|
            <li><p>分类</p><p></p></li>|
            <li><p>排序</p><p></p></li>|
            <li><p>筛选</p><p></p></li>
          </ul>
          <div class="details" v-for="k in n.uls">
            <div class="leftBox">
              <img :src="k.pic" alt="">
            </div>
            <div class="rightBox">
              <div>
                <img :src="k.pic2" alt="">
                <span>{{k.you}}</span>
              </div>
              <p>{{k.address}}</p>
              <p class="qiang">抢</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "BawangcanContentSection",
      props:["detailsData"]
    }
</script>

<style scoped>
  .section{
    background:white;
    margin-bottom:.1rem;
  }
  .title{
    display: flex;
    /*align-items: center;*/
    width:100%;
    line-height:.5rem;
    /*padding-left:.18rem;*/
    border-bottom:1px solid #dfdddf;
  }
  .title h5{
    font-size:.15rem;
    font-weight:600;
    margin-right:8px;
    margin-left: .18rem;
  }
  .title p{
    font-size:.11rem;
    color:#787778;
  }
  .list ul{
    display: flex;
    align-items: center;
    width:100%;
    height:.4rem;
    font-size:.13rem;
    color:#272927;
    border-bottom:1px solid #dfdddf;
  }
  .list ul li{
    width:25%;
    display: flex;
    justify-content: center;
  }
  .list ul li p:last-child{
    width:0;
    height:0;
    border:.06rem solid transparent;
    border-top-color:#bdbabd;
    margin-top:.07rem;
    margin-left:.05rem;
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
    /*float: left;*/
    /*width:.37rem;*/
    height:.14rem;
    margin-top:.15rem;
    margin-right:.05rem;
  }
  .rightBox div span{
    /*float: left;*/
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
</style>
