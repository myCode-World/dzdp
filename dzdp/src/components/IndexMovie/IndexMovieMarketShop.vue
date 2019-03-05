<template>
    <div class="marketShop">
      <p class="shopTitle">你可能喜欢</p>
      <ul class="shopBox">
        <li v-for="n in marketData.marketShopList">
          <img :src="n.pic"/>
          <p class="things">{{n.name}}</p>
          <p class="cont">
            <span>￥{{n.now}}</span>
            <span>￥{{n.old}}</span>
          </p>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieMarketShop",
        props:["marketData"]
    }
</script>

<style scoped>
  .marketShop{
    display: flex;
    flex-direction: column;
    background: white;
    margin-top: .14rem;
  }
  .shopTitle{
    font-size: .16rem;
    color: #222222;
    font-weight: 800;
    line-height: .41rem;
    padding-left: .11rem;
    border-top:1px solid #e0e0e0;
    border-bottom:1px solid #e0e0e0;
  }
  .shopBox{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: .1rem;
  }
  .shopBox li{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: .14rem;
  }
  .shopBox li img{
    width: 1.73rem;
    height: 1.73rem;
  }
  .shopBox li p{
    margin-top: .1rem;
  }
  .things{
    width: 1.73rem;
    font-size: .14rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cont{
    display: flex;
    align-items: flex-end;
  }
  .cont span{
    font-size: .14rem;
    margin-right: .07rem;
  }
  .cont span:first-child{
    color: #f2440d;
  }
  .cont span:last-child{
    font-size: .09rem;
    color: #7c7c7c;
    text-decoration: line-through;
  }
</style>
