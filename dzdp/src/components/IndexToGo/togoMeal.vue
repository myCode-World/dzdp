<template>
    <div class="mealBox">
      <div class="meal">
        <img src="../../../static/img/togo/banner.jpg"/>
        <div class="detail">
          <img src="../../../static/img/togo/head.jpg"/>
          <div class="mealInfo">
            <h3>猛男的炒饭(科技路店)</h3>
            <p>
              <span>10减9</span>
              <span>32减14</span>
              <span>55减18</span>
              <span>75减25</span>
            </p>
          </div>
        </div>
        <h2>精品套餐</h2>
        <ul class="price">
          <li v-for="n in togoData.priceData">
            <img :src="n.pic"/>
            <p><span>￥{{n.price}}</span><span v-if="n.olds" :class="n.olds">￥{{n.oldPrice}}</span></p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "togoMeal",
        props:["togoData"]
    }
</script>

<style scoped>
  .mealBox{
    padding: 0 .1rem .15rem;
    display: flex;
    justify-content: center;
    background-color: white;
    margin-top: .08rem;
  }
  .meal{
    display: flex;
    flex-direction: column;
    position: relative;
    box-shadow: 0 3px 4px 2px #eee;
  }
  .meal img{
    width: 3.55rem;
    height: .84rem;
  }
  .detail{
    position: absolute;
    display: flex;
    align-items: center;
    top:.43rem;
    left: .1rem;
  }
  .meal .detail img{
    width: .46rem;
    height: .46rem;
    border-radius: .03rem;
    margin-right: .11rem;
  }
  .mealInfo{
    display: flex;
    flex-direction: column;
  }
  .mealInfo h3{
    font-size: .15rem;
    color: white;
  }
  .mealInfo p{
    display: flex;
    align-items: center;
  }
  .mealInfo p span{
    font-size: .1rem;
    background-color: #fb4f45;
    padding: .03rem;
    line-height: .14rem;
    color: white;
    margin-right: .05rem;
    margin-top: .07rem;
  }
  h2{
    font-size: .19rem;
    margin: .23rem 0 .13rem .1rem;
  }
  .price{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: .05rem;
  }
  .price li{
    display: flex;
    flex-direction: column;
  }
  .price li img{
    width: 1.04rem;
    height: .78rem;
    border-radius: .03rem;
  }
  .price li p{
    display: flex;
    margin-top: .08rem;
  }
  .price li span{
    font-size: .11rem;
    font-weight: 800;
    color: #f93e35;
  }
  .price li p .old{
    font-size: .08rem;
    color: #868686;
    font-weight: normal;
    text-decoration: line-through;
    margin-left: .05rem;
  }
</style>
