<template>
  <div>
    <div class="shopBox" v-for="n in shoppingCarData.shopBox" :id="n.idName">
      <p class="title">{{n.titleName}}</p>
      <div class="foodBox" v-for="i in n.shopFoodDetail">
        <img :src="i.pic"/>
        <ul class="intro">
          <li>{{i.name}}</li>
          <li><span>月售{{i.sale}}</span><span>赞{{i.like}}</span></li>
          <li><p>￥{{i.price}}</p><span @click="addFood(i.price)"><i class="iconfont icon-jiahao"></i></span></li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "shopBox",
        methods:{
          addFood(price){
            this.$emit("sentPrice",price);
          }
        },
        props:["shoppingCarData"]
    }
</script>

<style scoped>
  .shopBox{
    margin-left: .09rem;
    display: flex;
    flex-direction: column;
  }
  .title{
    font-size: .11rem;
    color: #4a4a4a;
    font-weight: 700;
    margin-top: .08rem;
  }
  .foodBox{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: .1rem;
    margin-top: .1rem;
  }
  .foodBox img{
    width: .71rem;
    height: .71rem;
    border-radius: .04rem;
  }
  .intro{
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: .1rem;
    justify-content: space-between;
    height: .71rem;
  }
  .intro li:first-child{
    font-size: .14rem;
    color: #020202;
  }
  .intro li:nth-child(2){
    font-size: .1rem;
    color:#585858;
  }
  .intro li:nth-child(2) span{
    margin-right: .08rem;
  }
  .intro li:last-child{
    display: flex;
    justify-content: space-between;
  }
  .intro li:last-child p{
    font-size: .11rem;
    color: #fc521a;
  }
  .intro li:last-child span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: .22rem;
    height: .22rem;
    background-color: #fc521a;
    border-radius: 50%;
    margin-right: .1rem;
  }
  .intro li:last-child span .iconfont{
    color: white;
  }
</style>
