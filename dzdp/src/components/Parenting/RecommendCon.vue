<template>
  <div id="recomcon">
    <ul>
      <li v-for="r in recommendConData.recomlist">
        <div class="con_top"><div><img :src="r.touxiang"><span>{{r.names}}</span></div><img src="../../../static/PartThreeImg/recom_rjt.jpg"></div>
        <div class="con_cen">
          <p>{{r.comment}}</p>
        </div>
        <div class="con_btn">
          <img class="shopsimg" :src="r.shopsimg">
          <div class="con_btn_right">
             <div class="recom_info1"><h3>{{r.infotitles}}</h3><img :src="r.tuan"><img :src="r.ding"></div>
             <div class="recom_info2"><img :src="r.xing"><span>{{r.price}}</span></div>
             <div class="recom_info3"><p><span>{{r.theme}}</span><span>{{r.address}}</span></p><span>{{r.distance}}</span></div>
             <div class="recom_info4"><span>{{r.agerange}}</span><span>{{r.proiect}}</span></div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "RecommendCon",
       props:["recommendConData"]
    }
</script>

<style scoped>
  #recomcon ul{
    display: -webkit-flex;
    flex-direction: column;
    background-color: #f9f9f9;
    box-sizing: border-box;
    padding: 0 .21rem;
  }
  #recomcon ul li{
    display: -webkit-flex;
    flex-direction: column;
    background-color: white;
    padding: .14rem .14rem ;
    box-sizing: border-box;
    border-radius: .1rem;
    margin-top: .16rem;
    box-shadow: 0 2px 4px 2px #eee;
  }
  .con_top{
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
  }
  .con_top div{
    display: -webkit-flex;
    align-items: center;
  }
  .con_top img:first-child{
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    margin-right: .1rem;
  }
  .con_top span{
    font-size: .15rem;
    font-weight: bolder;
  }
  .con_top img:last-child{
    width:.08rem ;
    height:.13rem ;
  }
  .con_cen p{
    text-align: left;
    font-size: .14rem;
    color: black;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
    margin: .07rem 0;
  }
  .con_btn{
    display: -webkit-flex;
    background-color: #f9f9f9;
    border-radius: .04rem;
  }
  .con_btn .shopsimg{
    width:1.04rem ;
    height:1.04rem ;
    margin-right: .1rem;
  }
  .con_btn_right{
    display: -webkit-flex;
    flex-direction: column;
  }
  .con_btn_right div{
    display: -webkit-flex;
    align-items: center;
    margin-top: .05rem;
  }
  .recom_info1 h3{
    font-size: .16rem;
    color: black;
    margin-right: .05rem;
  }
  .recom_info1 img{
    width:.16rem ;
    height:.16rem ;
    margin-right: .05rem;
  }
  .recom_info2 img{
    width: .13rem;
    height: .13rem;
    margin-right: .12rem;
  }
  .recom_info2 span{
    font-size: .1rem;
    color: black;
  }
  .recom_info3{
    justify-content: space-between;
  }
  .recom_info3 p{
    display: -webkit-flex;
    align-items: center;
  }
  .recom_info3 span:first-child{
    margin-right: .1rem;
  }
  .recom_info3 span{
    font-size: .12rem;
    color: #777777;
  }
  .recom_info4 span{
    font-size: .11rem;
    color: #777777;
    border: 1px solid #ababab;
    box-sizing: border-box;
    padding:.03rem .06rem ;
    margin-right: .05rem;
  }
</style>
