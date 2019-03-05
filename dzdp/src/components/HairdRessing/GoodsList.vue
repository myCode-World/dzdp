<template>
    <div id="goodslist">
      <div class="goodslist_btn" v-for="h in goodListData.goodslists" @click="GoTo">
         <div class="remarks"><img :src="h.remarkImg"></div>
         <div class="shops_info">
           <div class="info_one"><h3>{{h.shopsname}}</h3><img :src="h.tuanImg"></div>
           <div class="info_two">
             <p>
               <img src="../../../static/PartThreeImg/xingxing.jpg" v-for="n in 5">
               <span>{{h.typework}}</span>
             </p>
             <span>{{h.distance}}</span>
           </div>
           <div class="info_three"><span>团购</span><span>超值立减30元</span></div>
           <div class="info_four"><img :src="h.laba"><span>{{h.active}}</span></div>
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "GoodsList",
        props:["goodListData"],
        methods:{
          GoTo(){
            this.$router.push("/ShopsDetails")
          }
        }
    }
</script>

<style scoped>
  #goodslist{

  }
  .goodslist_top{
    box-sizing: border-box;
    padding-left: .15rem;
    background-color: white;
  }
  .shops_one{
  display: -webkit-flex;
  flex-direction: column;
  border-bottom: 1px solid #e6e6e6;
  box-sizing: border-box;
  padding-bottom: .15rem;
 }
  .shops_one div{
    display: -webkit-flex;
    align-items: center;
    margin-top: .05rem;
  }
  .shops_one .p1{
    justify-content: space-between;
  }
  .shops_one .p1 span{
    overflow: hidden;
    width: 2.5rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: .18rem;
    font-weight: bolder;
  }
  .shops_one .p1 img{
    width: .19rem;
    height:.19rem ;
    margin-right: .7rem;
  }
  .shops_one .p2{
    justify-content: space-between;
  }
  .shops_one .p2 p{
    align-items: center;
    display: -webkit-flex;
  }
  .shops_one .p2 p span{
    margin-left: .12rem;
  }
  .shops_one .p2 span{
    font-size: .14rem;
    margin-right: .15rem;
  }
  .shops_one .p2 img{
    width: .13rem;
    height: .13rem;
  }
  .shops_one .p3{
    width: 1.3rem;
    border: 1px solid #ff7fc9;
  }
  .shops_one .p3 span{
       font-size: .14rem;
    box-sizing: border-box;
    padding: 0 .03rem;
  }
  .shops_one .p3 span:first-child{
    background-color: #ff7fc9;
    color: white;
  }
  .shops_one .p3 span:last-child{
    color:#ff7fc9 ;
  }
  .shops_two{
    box-sizing: border-box;
    padding-bottom: .13rem;
  }
  .shops_two div{
    margin-top: .1rem;
  }
  .shops_two .xiaolaba{
    display: -webkit-flex;
  }
  .shops_two .xiaolaba img{
    width: .17rem;
    height: .17rem;
    margin-right: .12rem;
  }
  .shops_two .xiaolaba span{
    font-size: .15rem;
  }
  .shops_two .zhanshi{
    display: -webkit-flex;
  }
  .shops_two .zhanshi img{
    width: 1.1rem;
    height: 1.1rem;
    margin-right: .07rem;
  }

  .goodslist_btn{
   display: -webkit-flex;
    background-color: white;
    padding: .1rem .15rem;
    margin-bottom: .05rem;
  }
  .remarks img{
    width: 1.06rem;
    height: 1.15rem;
    margin-right: .13rem;
  }
  .shops_info{
    display: -webkit-flex;
    flex-direction: column;
    justify-content:space-around;
  }
  .shops_info div{
    display: -webkit-flex;
    align-items: center;
  }
  .info_one h3{
    width: 1.15rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: .18rem;
    margin-right: .24rem;
  }
  .info_one img{
    width: .68rem;
    height: .4rem;
  }
  .info_two{
    justify-content: space-between;
  }
  .info_two p{
    display: -webkit-flex;
    align-items: center;
  }
  .info_two p img{
    width:.13rem ;
    height: .13rem;
  }
  .info_two span{
    font-size: .13rem;
  }
  .info_three{
    width: 1.3rem;
    border: 1px solid #ff7fc9;
  }
  .info_three span{
    font-size: .14rem;
    box-sizing: border-box;
    padding: 0 .03rem;
  }
  .info_three span:first-child{
    background-color: #ff7fc9;
    color: white;
  }
  .info_three span:last-child{
    color:#ff7fc9 ;
  }
  .info_four img{
    width: .16rem;
    height: .14rem;
    margin-right: .07rem;
  }
  .info_four span{
    font-size: .14rem;
  }
</style>
