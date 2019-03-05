<template>
  <div id="nearby">
    <div class="near_store" v-for="k in nearByData.storelist">
      <div class="storeimg">
        <img :src="k.storeimg">
      </div>
      <div class="storeright">
        <div class="storeright_top">
          <div class="store_info1"><h3>{{k.storenames}}</h3><img :src="k.tuan"><img :src="k.ding"></div>
          <div class="store_info2"><img :src="k.xing"><span>{{k.price}}</span></div>
          <div class="store_info3"><p><span>{{k.theme}}</span><span>{{k.address}}</span></p><span>{{k.distance}}</span></div>
          <div class="store_info4"><span>{{k.project}}</span><span>{{k.policy}}</span></div>
        </div>
        <div class="storeright_btn">
          <div class="btn_1 sale_info"><div><img :src="k.ding"><span>{{k.give}}</span></div><span>{{k.number}}人已预约</span></div>
          <div class="btn_2 sale_info"><img :src="k.tuan"><span>{{k.activity}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "NearBy",
        props:["nearByData"]
    }
</script>

<style scoped>
  #nearby{
    display: -webkit-flex;
    flex-direction: column;
    padding: .12rem .2rem;
    box-sizing: border-box;
  }
  .near_store{
    display: -webkit-flex;
    border-bottom: 1px solid #eeeeee;
    margin-top: .12rem;
  }
  .storeimg{
    border-radius: .05rem;
    margin-right: .1rem;
  }
  .storeimg img{
    width: 1.04rem;
    height: 1.04rem;
  }
  .storeright{
    display: -webkit-flex;
    flex-direction: column;
  }
  .storeright_top{
    display: -webkit-flex;
    flex-direction: column;
  }
  .storeright_top div{
    display: -webkit-flex;
    margin-top: .05rem;
  }
  .store_info1 h3{
    font-size: .16rem;
    color: black;
    margin-right: .05rem;
  }
  .store_info1 img{
    width:.16rem ;
    height:.16rem ;
    margin-right: .05rem;
  }
  .store_info2 img{
    width: .13rem;
    height: .13rem;
    margin-right: .12rem;
  }
  .store_info2 span{
    font-size: .1rem;
    color: black;
  }
  .store_info3{
    justify-content: space-between;
  }
  .store_info3 p{
    display: -webkit-flex;
    align-items: center;
  }
  .recom_info3 span:first-child{
    margin-right: .1rem;
  }
  .store_info3 span{
    font-size: .12rem;
    color: #777777;
  }
  .store_info4{
    margin-bottom: .1rem;
  }
  .store_info4 span{
    font-size: .11rem;
    color: #777777;
    border: 1px solid #ababab;
    box-sizing: border-box;
    padding:.03rem .06rem ;
    margin-right: .05rem;
  }
  .storeright_btn{
    box-sizing: border-box;
    padding-bottom: .13rem;
    border-top: 1px solid #f0f0f0;
  }
  .storeright_btn img{
    width:.16rem ;
    height:.16rem ;
    margin-right: .05rem;
  }
  .storeright_btn div{
    display: -webkit-flex;
  }
  .storeright_btn .btn_1{
    display: -webkit-flex;
    justify-content: space-between;
  }
  .storeright_btn span{
    font-size: .13rem;
    color: #5e5e5e;
  }
  .storeright_btn .sale_info{
    margin-top: .13rem;
  }
</style>
