<template>
    <div class="orderForm">
      <p class="pageName">订单</p>
      <ul class="orderList">
        <li :class="{ order:changeColor === 0}" @click="order(0)">
          <p>全部</p>
          <span></span>
        </li>
        <li :class="{ order:changeColor === 1}" @click="order(1)">
          <p>待评价</p>
          <span></span>
        </li>
        <li :class="{ order:changeColor === 2}" @click="order(2)">
          <p>退款</p>
          <span></span>
        </li>
      </ul>
      <div class="nothing">
        <img src="../../../static/img/togo/nothing.jpg">
        <p>什么都没有哦~</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "OrderForm",
        data() {
          return {
            changeColor:0
          }
        },
        methods:{
          order:function(index){
            this.changeColor = index;
          }
        }
    }
</script>

<style scoped>
  .orderForm{
    display: flex;
    flex-direction: column;
  }
  .pageName{
    font-size: .16rem;
    line-height: .48rem;
    text-align: center;
    background-color: white;
  }
  .orderList{
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
  }
  .orderList li{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: .13rem;
    color: #232323;
    line-height: .34rem;
  }
  .orderList span{
    width: .19rem;
    height: .02rem;
    background-color:white;
  }
  .nothing{
    margin: 2.17rem auto 0;
  }
  .nothing img{
    width: .66rem;
    height: .65rem;
  }
  .nothing p{
    font-size: .14rem;
    color: #858593;
  }
  .order p{
    color: #ff5e26;
  }
  .order span{
    background-color: #ff5e26;
  }
</style>
