<template>
    <div id="detailsinfo">
      <div id="infos">
        <h3>三合秀日式美甲美睫(旺座现代城店)</h3>
        <div class="infos_1"><img src="../../../static/PartThreeImg/xingxing.jpg"><span>消费:￥296</span></div>
        <div class="infos_2">
          <div><span>效果:9.2</span><span>环境:9.3</span><span>服务:9.3</span></div>
          <div><span>高新路沿线</span><span>美甲</span></div>
        </div>
        <div class="infos_3">
          <div v-for="i in DetailsInfoData.infos"><img :src="i.imgs"></div>
        </div>
        <div class="infos_4">
          <div><span>休息中,10.00营业</span>&nbsp;&nbsp;| &nbsp;&nbsp;<span>4个座位</span></div>
          <img src="../../../static/PartThreeImg/list_rjt.jpg">
        </div>
        <div class="infos_5">
          <img src="../../../static/PartThreeImg/dingwei.jpg">
          <div>
            <p>科技五路中段旺座现代城E座2706号</p>
            <span>距枫林绿洲西门公家站步行260m</span>
          </div>
          <img src="../../../static/PartThreeImg/fixedphone.jpg">
        </div>
        <div class="infos_6">
          <div><img src="../../../static/PartThreeImg/ding.jpg"><p>立即预约</p><span>到店有礼</span></div>
          <div><span>169人订过</span><img src="../../../static/PartThreeImg/list_rjt.jpg"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsInfo",
      props:["DetailsInfoData"]
    }
</script>

<style scoped>
  #detailsinfo{
    display: -webkit-flex;
    flex-direction: column;
    background-color: white;
  }
  #infos{padding: 0 .21rem;}
  #infos h3{font-size: .22rem;line-height: .3rem;}
  .infos_1,.infos_2,.infos_3,.infos_4,.infos_5,.infos_6{display: -webkit-flex;align-items: center;}
  .infos_1{line-height: .27rem;}
  .infos_1 img{width: .17rem;height: .17rem;}
  .infos_1 span{font-size: .13rem;margin-left: .12rem;}
  .infos_2{justify-content: space-between;line-height: .25rem;}
  .infos_2 div{display: -webkit-flex;align-items: center;}
  .infos_2 div span{font-size: .11rem;color: #dbdbdb;}
  .infos_2 div:last-child span{margin-left: .08rem;}
  .infos_3{width: 100%;overflow-x: auto;white-space: nowrap;justify-content: space-between;}
  .infos_3 div{border-radius: .15rem;margin-right: .07rem;}
  .infos_3 img{width: 1.43rem; height: 1.05rem;}
  .infos_4{justify-content: space-between;padding: .16rem 0}
  .infos_4 div{display: -webkit-flex;align-items: center;font-size: .13rem;}
  .infos_4  img{width: .08rem; height: .13rem;}
  .infos_5{justify-content: space-between;padding:.12rem 0;border-top:2px solid #ebebeb ;border-bottom:2px solid #ebebeb ;}
  .infos_5 img:first-child{width: .1rem;height: .13rem;}
  .infos_5 img:last-child{width: .18rem;height: .21rem}
  .infos_5 div{display: -webkit-flex;flex-direction: column;border-right: 2px solid #ebebeb;padding-right: .2rem}
  .infos_5 p{font-size: .14rem;}
  .infos_5 span{font-size: .11rem;color: #878787;}
  .infos_6{justify-content: space-between;padding: .18rem 0}
  .infos_6 div{display: -webkit-flex;align-items: center;}
  .infos_6 div:first-child img{width: .2rem; height: .2rem;margin-right: .1rem}
  .infos_6 div:last-child img{width: .08rem; height: .13rem;margin-left: .05rem}
  .infos_6 div:first-child p{font-size: .14rem;margin-right:.1rem;}
  .infos_6 div:first-child span{ font-size: .09rem;padding: .03rem .04rem;color: #d87a60;border: 1px solid #eeeace}
  .infos_6 div:last-child span{font-size: .11rem; color: #696969;}
</style>
