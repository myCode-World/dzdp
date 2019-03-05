<template>
    <div class="listBox">
      <ul class="foodList">
        <li :key="index" v-for="(n,index) in shoppingCarData.foodListData" :class="{ type:changeColor === index}" @click="type(index)">
          <a :href="n.idName">
            <img v-if="n.pic" :src="n.pic"/>
            {{n.name}}
          </a>
        </li>
      </ul>
      <div class="foodSpace">
        <shop-box @sentPrice="addFood" :shoppingCarData="shoppingCarData"></shop-box>
      </div>
    </div>
</template>

<script>
  import shoppingCarData from "../../data/IndexToGoShoppingCar"
  import shopBox from "./shopBox"

    export default {
        name: "shoppingCarFoodList",
       components:{
         shopBox
       },
        data() {
          return {
            shoppingCarData,
            changeColor:0
          }
        },
        methods:{
          type:function(index){
            this.changeColor = index;
          },
          addFood(price){
            this.$emit("sentPrice",price);
          }
        }
    }
</script>

<style scoped>
  .listBox{
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .foodList{
    height: 4.15rem;
    background-color: #f8f8f8;
  }
  .foodList li{
    width:.56rem;
    padding: 0 .12rem;
    background-color: #f8f8f8;
    border-bottom: 1px solid #ededed;
    font-size: .12rem;
    color: #181818;
  }
  .foodList li a{
    height: .52rem;
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: .15rem;
  }
  .foodList li img{
    width: .15rem;
    height: .15rem;
    margin-right: .05rem;
  }
  .foodList .type{
    background-color: white;
  }
  .foodSpace{
    flex: 1;
    background-color: white;
    height: 4.15rem;
    overflow: auto;
  }
</style>
