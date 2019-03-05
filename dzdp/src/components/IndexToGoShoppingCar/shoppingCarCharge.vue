<template>
    <div class="score">
      <div class="scoreHead">
        <div class="grade"><h3>4.6</h3><p>商家评分</p></div>
        <div class="stars">
          <p>
            <span>口味</span>
            <img src="../../../static/img/shoppingCar/star1.jpg"/>
            <span>4.3</span>
          </p>
          <p>
            <span>包装</span>
            <img src="../../../static/img/shoppingCar/star1.jpg"/>
            <span>4.2</span>
          </p>
        </div>
        <div class="satisfied">
          <p>98%</p>
          <span>配送满意度</span>
        </div>
      </div>
      <div class="chargeBox">
        <div class="spaceTitle"><p>外卖评价</p><span>查看到店评价 ></span></div>
        <div class="chargeList">
          <span v-for="(n,index) in chargeListData.chargeList" :class="{ charge:changeNum === index}" @click="charge(index)">{{n.name}}({{n.num}})</span>
        </div>
      </div>
      <div class="userCharge" v-for="i in chargeListData.userCharge">
        <img class="headPic" :src="i.headPic"/>
        <ul class="userChargeList">
          <li class="first">
            <p>{{i.name}}</p>
            <span>{{i.date}}</span>
          </li>
          <li class="second">
            <span>评分</span>
            <img src="../../../static/img/shoppingCar/star2.jpg"/>
            <span>{{i.time}}分钟送达</span>
          </li>
          <li class="third" v-if="i.cont">
            <p>推荐</p>
            <p>{{i.cont}}</p>
          </li>
          <li class="fourth"><p>{{i.artical}}</p></li>
          <li class="fifth" v-if="i.level">
            <i class="iconfont icon-icontag"></i>
            <p>{{i.level}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    import chargeListData from "../../data/IndexToGoShoppingCar"

    export default {
        name: "shoppingCarCharge",
        data(){
          return{
            chargeListData,
            changeNum:0
          }
        },
        methods:{
          charge:function(index){
            this.changeNum = index;
          }
        }
    }
</script>

<style scoped>
  .score{
    display: flex;
    flex-direction: column;
    background-color: #f6f6f6;
  }
  .scoreHead{
    display: flex;
    justify-content: space-between;
    height: .67rem;
    background-color: white;
  }
  .grade{
    width: 18%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .grade h3{
    font-size: .17rem;
    color: #ff6330;
  }
  .grade p{
    font-size: .11rem;
    color:#8e8e8e
  }
  .stars{
    flex: 1;
    height: .39rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-right: 1px solid #e2e2e2;
    margin-top: .14rem;
  }
  .stars p{
    display: flex;
    align-items: center;
  }
  .stars p img{
    width: .59rem;
    height: .09rem;
    margin:0 .09rem;
  }
  .stars p span:first-child{
    font-size: .12rem;
    color: #474747;
  }
  .stars p span:last-child{
    font-size: .12rem;
    color: #ff6330;
  }
  .satisfied{
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: .15rem;
  }
  .satisfied p{
    font-weight: 700;
    font-size: .15rem;
    color: #262626;
  }
  .satisfied span{
    font-size: .11rem;
    color: #727272;
  }
  .chargeBox{
    margin-top: .1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: .1rem .14rem;
    border-bottom: 1px solid #f5f5f5;
  }
  .spaceTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .spaceTitle p{
    font-size: .13rem;
    color: #3a3a3a;
  }
  .spaceTitle span{
    font-size: .11rem;
    color: #386fa4;
  }
  .chargeList{
    margin-top: .13rem;
    display: flex;
    flex-wrap: wrap;
  }
  .chargeList span{
    font-size: .11rem;
    color: #010101;
    line-height: .27rem;
    background-color: #f2f2f2;
    border-radius: .27rem;
    padding: 0 .05rem;
    margin-top: .06rem;
    margin-right: .04rem;
  }
  .chargeList .charge{
    color: #ff4000;
    background-color: #feefea;
  }
  .userCharge{
    display: flex;
    background-color: white;
    padding: .18rem .14rem;
    border-bottom: 1px solid #f3f3f3;
  }
  .headPic{
    width: .43rem;
    height: .43rem;
    border-radius: 50%;
  }
  .userChargeList{
    flex: 1;
    display: flex;
    flex-direction: column;
    line-height: .18rem;
    margin-left: .12rem;
  }
  .first{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .first p{
    font-size: .12rem;
    color: #3c3c3c;
  }
  .first span{
    font-size: .08rem;
    color: #9a9a9a;
  }
  .second{
    display: flex;
    align-items: center;
  }
  .second span{
    font-size: .1rem;
    color: #9b9b9b;
  }
  .second img{
    width: .59rem;
    height: .09rem;
    margin: 0 .05rem;
  }
  .third{
    display: flex;
    align-items: center;
  }
  .third p{
    font-size: .1rem;
    color: #939393;
    margin-right: .05rem;
  }
  .fourth p{
    font-size: .11rem;
    color: #050505;
  }
  .fifth{
    display: flex;
    align-items: center;
  }
  .fifth i{
    font-size: .12rem;
    color: #bbbbbb;
    margin-right: .02rem;
  }
  .fifth p{
    font-size: .1rem;
    color: #858585;
  }
</style>
