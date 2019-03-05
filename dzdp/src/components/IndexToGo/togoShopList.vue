<template>
    <div class="shopList">
      <div class="listTitle">
        <p>
          <span :class="{ togo:changeColor === 0}" @click="togo(0)">综合排序</span>
          <span class="down"></span>
          <span :class="{ togo:changeColor === 1}" @click="togo(1)">销量</span>
          <span :class="{ togo:changeColor === 2}" @click="togo(2)">距离</span>
        </p>
        <p :class="{ togo:changeColor === 3}" @click="togo(3)">筛选 <i class="iconfont icon-iconfontzhizuobiaozhun023125"></i></p>
      </div>
      <router-link tag="div" to="/IndexToGoShoppingCar" class="togoShop" :key="index" v-for="(n,index) in togoData.togoShopListData">
        <img :src="n.pic"/>
        <ul class="togoShopList">
          <li>{{n.shopName}}</li>
          <li>
            <p>
              <img :src="n.stars"/>
              <span>{{n.grade}}</span>
              <span>月售{{n.sale}}</span>
            </p>
            <p>{{n.minutes}}分钟 | {{n.far}}</p>
          </li>
          <li>
            <p>起送￥{{n.qisong}} | 配送￥{{n.peisong}} | 人均￥{{n.eachone}}</p>
            <img src="../../../static/img/togo/meituan.jpg"/>
          </li>
          <li><i class="iconfont icon-shangdian"></i><p>{{n.type}}</p></li>
          <li>
            <span v-if="i.fontcont" v-for="i in n.zhe">{{i.fontcont}}</span>
            <span v-if="n.piao" class="last">{{n.piao}}</span>
          </li>
        </ul>
      </router-link>
    </div>
</template>

<script>
    export default {
      name: "togoShopList",
      data() {
        return {
          changeColor:0
        }
      },
      methods:{
        togo:function(index){
          this.changeColor = index;
        }
      },
      props:["togoData"]
    }
</script>

<style scoped>
  .listTitle .togo{
    font-size: .13rem;
    font-weight: 700;
    color: #1e1e1e;
  }
  .shopList{
    background-color: white;
    margin-top: .08rem;
  }
  .listTitle{
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: .33rem;
    padding: 0 .1rem;
    position: relative;
    border-bottom: 1px solid #eaeaea;
  }
  .listTitle p{
    font-size: .12rem;
    color: #525252;
  }
  .listTitle p span:nth-child(3){
    margin-left: .3rem;
    margin-right: .2rem;
  }
  .down{
    width: 0;
    height: 0;
    border: .04rem solid transparent;
    border-top-color: #1e1e1e;
    position: absolute;
    top:.15rem;
    left: .67rem;
  }
  .togoShop{
    display: flex;
    padding: .11rem .1rem;
    border-bottom: 1px solid #ebebeb;
  }
  .togoShop img{
    width: .8rem;
    height: .6rem;
    margin-right: .1rem;
  }
  .togoShopList{
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .togoShopList li{
    display: flex;
    align-items: center;
    margin-bottom: .07rem;
  }
  .togoShopList li:first-child{
    font-size: .14rem;
    color: #070707;
    font-weight: 700;
  }
  .togoShopList li:nth-child(2){
    justify-content: space-between;
  }
  .togoShopList li:nth-child(2) img{
    width: .59rem;
    height: .09rem;
  }
  .togoShopList li:nth-child(2) p{
    display: flex;
    align-items: center;
    font-size: .1rem;
    color: #717171;
  }
  .togoShopList li:nth-child(3){
    justify-content: space-between;
    font-size: .1rem;
    color:#585858;
  }
  .togoShopList li:nth-child(3) img{
    width: .48rem;
    height: .14rem;
  }
  .togoShopList li:nth-child(4) i{
    font-size: .1rem;
    color: #acacac;
    margin-right: .02rem;
  }
  .togoShopList li:nth-child(4) p{
    font-size: .1rem;
    color: #6a6a6a;
  }
  .togoShopList li:last-child{
    margin-bottom: 0;
  }
  .togoShopList li:last-child span{
    font-size: .08rem;
    color: #ef4500;
    line-height: .18rem;
    padding: 0 .03rem;
    border: 1px solid #f0d4c8;
    margin-right: .03rem;
    white-space: nowrap;
  }
  .togoShopList li:last-child .last{
    color: #7ebf5b;
    border-color: #cfe3bf;
  }
</style>
