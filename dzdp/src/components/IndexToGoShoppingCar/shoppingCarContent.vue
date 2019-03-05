<template>
    <div class="content">
        <div class="fixHead">
          <img class="background" src="../../../static/img/shoppingCar/background.jpg"/>
          <div class="abs">
            <img src="../../../static/img/shoppingCar/logo.jpg"/>
            <ul class="list">
              <li>魏家凉皮(西辛庄餐厅)</li>
              <li>
                <p>30分钟 |  </p>
                <img src="../../../static/img/shoppingCar/meituan.jpg"/>
              </li>
              <li>公告:欢迎光临</li>
            </ul>
          </div>
        </div>
        <div class="foodListCont">
          <ul class="foodList">
            <li :class="{ food:changeColor === 0}" @click="food(0)"><p>菜单</p><span></span></li>
            <li :class="{ food:changeColor === 1}" @click="food(1)"><p>评价(3183)</p><span></span></li>
            <li :class="{ food:changeColor === 2}" @click="food(2)"><p>商家</p><span></span></li>
          </ul>
          <div class="changeBox">
            <div class="changeCont" :is="flag" @sentPrice="addFood" ></div>
          </div>
        </div>
        <shopping-car-footer  :price="price,priceCha,colorCar,goCompute" v-if="changeColor===0"></shopping-car-footer>
    </div>
</template>

<script>
    import shoppingCarFoodList from "./shoppingCarFoodList"
    import shoppingCarCharge from "./shoppingCarCharge"
    import shoppingCarShop from "./shoppingCarShop"
    import shoppingCarFooter from "./shoppingCarFooter"

    export default {
        name: "shoppingCarContent",
        components:{
          shoppingCarFoodList,
          shoppingCarCharge,
          shoppingCarShop,
          shoppingCarFooter
        },
        data() {
          return {
            changeColor:0,
            flag: "shoppingCarFoodList",
            price:0,
            priceCha:20,
            colorCar:"",
            goCompute:""
          }
        },
        methods:{
          food:function(index){
            this.changeColor = index;
            if (index === 0) {
              this.flag = "shoppingCarFoodList";
            }else if(index === 1){
              this.flag = "shoppingCarCharge";
            }else if(index === 2){
              this.flag = "shoppingCarShop";
            }
          },

          addFood(price){
            this.price+=price;
            if(this.priceCha===20){
              this.priceCha-=4;
            }
            this.priceCha-=price;
            this.colorCar="colorCar";
            if(this.priceCha<=0){
              this.goCompute="goCompute"
            }
          }
        }
    }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .fixHead{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height:1.15rem;
    z-index: -1;
  }
  .foodListCont{
    flex: 1;
    overflow: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .background{
    width: 100%;
    height: 1.15rem;
  }
  .abs{
    display: flex;
    align-items: flex-start;
    position: absolute;
    top:.5rem;
    left: .15rem;
  }
  .abs img{
    width: .76rem;
    height: .76rem;
    margin-right: .08rem;
    border-radius: .04rem;
  }
  .list{
    display: flex;
    flex-direction: column;
    line-height: .19rem;
  }
  .list li:first-child{
    font-size: .17rem;
    color: white;
  }
  .list li:nth-child(2){
    font-size: .11rem;
    color: white;
    display: flex;
    align-items: center;
  }
  .list li:nth-child(2) img{
    width: .48rem;
    height: .14rem;
    margin-left: .04rem;
  }
  .list li:last-child{
    font-size: .11rem;
    color: white;
  }
  .foodList{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1.28rem;
    border-bottom: 1px solid #e9e9e9;
    background-color: white;
    padding-top: .1rem;
  }
  .foodList li{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .foodList li p{
    font-size: .14rem;
  }
  .foodList li span{
    width: .2rem;
    height: .02rem;
    background-color: white;
    margin-top: .12rem;
  }
  .foodList .food p{
    color: #ec4714;
    font-size: .14rem;
    font-weight: 700;
  }
  .foodList .food span{
    background-color:  #ec4714;
  }
  .changeBox{
    background-color: white;
    flex: 1;
    overflow: auto;
  }
</style>
