<template>
    <div class="footer">
      <div class="out" :id="colorCar"><i class="iconfont icon-icozhuanhuan"></i></div>
      <div class="money"><p>￥{{price}}</p><span>另需配送费￥4</span></div>
      <div class="sent" :id="goCompute">
        <p class="cha">还差￥{{priceCha}}起送</p>
        <p class="goCash">去结算</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "shoppingCarFooter",
        props:["price","priceCha","colorCar","goCompute"]
    }
</script>

<style scoped>
  .footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: .48rem;
    background-color: #2f2f2f;
    position: relative;
  }
  .out{
    width: .49rem;
    height: .49rem;
    border-radius: 50%;
    background-color: #474747;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:-.15rem;
    left: .1rem;
  }
  .out .iconfont{
    font-size: .27rem;
    color: #b0b0b0;
  }
  .money{
    display: flex;
    flex-direction: column;
    margin-left: .69rem;
  }
  .money p{
    font-size: .14rem;
    color: white;
  }
  .money span{
    font-size: .1rem;
    color: #a7a7a7;
  }
  .sent{
    width: 1rem;
    background-color: #606060;
    padding: 0 .08rem;
  }
  .sent p{
    text-align: center;
    font-size: .15rem;
    line-height: .48rem;
  }
  .sent .cha{
    color: #c8c8c8;
  }
  .sent .goCash{
    display: none;
    color: white;
  }
  #colorCar{
    background-color: #ff6633;
  }
  #colorCar i{
    color: white;
  }
  #goCompute{
    background-color: #ff6633;
  }
  #goCompute .cha{
    display: none;
  }
  #goCompute .goCash{
    display: block;
  }
</style>
