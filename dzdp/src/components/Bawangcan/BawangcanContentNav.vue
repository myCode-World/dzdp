<template>
    <div class="nav">
      <div class="navTop">
        <h5>VIP专享活动</h5>
        <a href="#">更多></a>
      </div>
      <div>
        <ul class="navBottom">
          <li v-for="n in dinnerData">
            <img :src="n.pic" alt="">
            <p class="shopActive">{{n.youHui}}</p>
            <p class="shopAdd">{{n.address}}</p>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
      name: "BawangcanContentNav",
      props:["dinnerData"]
    }
</script>

<style scoped>
  .nav{
     background:white;
    margin-bottom:.1rem;
   }
  .navTop{
    display: flex;
    justify-content: space-between;
    padding:.18rem .18rem .16rem .17rem;
  }
  .navTop h5{
    font-size:.15rem;
  }
  .navTop a{
    font-size:.11rem;
    color:#535553;
  }
  .navBottom{
    display: flex;
    /*display: -webkit-box;*/
    overflow: auto;
    padding-left: .07rem;
  }
  .navBottom::-webkit-scrollbar {
    display: none;
  }
  .navBottom li{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width:1.4rem;
    margin-left:.1rem;
    padding-bottom: .1rem;
  }
  .navBottom li img{
    width:1.4rem;
    height:1rem;
  }
  .navBottom .shopActive{
    height: 20%;
  }
  .shopActive{
    font-size:.13rem;
    font-weight: 600;
    margin-top:.1rem;
    margin-bottom:.1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
  }
  .shopAdd{
    font-size:.11rem;
    color:#636563;
  }
</style>
