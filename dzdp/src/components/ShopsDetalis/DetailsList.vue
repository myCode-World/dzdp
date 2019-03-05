<template>
    <div id="detailslist">
      <div class="check">
        <div><img src="../../../static/PartThreeImg/check.jpg"><p>买单</p></div>
        <div><span>19人买过</span><img src="../../../static/PartThreeImg/list_rjt.jpg"></div>
      </div>
      <div class="vips">
        <div><img src="../../../static/PartThreeImg/card_vip.jpg"><p>商家会员卡</p></div>
        <img class="cards" src="../../../static/PartThreeImg/card_vips1.jpg">
      </div>
      <div class="groupbuying">
         <div class="group_top">
           <div><img src="../../../static/PartThreeImg/tuan.jpg"><p>团购</p></div>
           <div>
             <span><img src="../../../static/PartThreeImg/gouxuan.jpg">随时退</span>
             <span><img src="../../../static/PartThreeImg/gouxuan.jpg">过期退</span>
           </div>
         </div>
         <div class="group_con">
           <div class="group_goods" v-for="g in showdata">
             <div><img :src="g.imgs"></div>
             <div class="goods_infos">
               <div><p>[{{g.types}}]</p><span>{{g.remarks}}</span></div>
               <span>已售{{g.nums}}<img src="../../../static/PartThreeImg/list_rjt.jpg"></span>
               <div class="youhui"><P>￥{{g.price}}</P><span class="oldprice">￥{{g.oldprice}}</span><span class="bright">{{g.bright}}</span></div>
             </div>
           </div>
         </div>
         <p v-if="flag===1" class="mores" @click="zhankai">更多{{DetailsListData.goodslist.length-3}}个团购<img src="../../../static/PartThreeImg/mores_xjt.jpg"></p>
        <p v-if="flag===0" class="mores" @click="zhankai">收起<img src="../../../static/PartThreeImg/mores_xjt.jpg"></p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailsList",
      props:["DetailsListData"],
      data(){
          return{
            showdata:"",
            // DetailsListData,
            flag:0
          }
      },
      mounted(){
          this.zhankai()
      },
      methods:{
        zhankai(){
          if(this.flag===0){
            console.log(111)
            this.showdata=this.DetailsListData.goodslist.slice(0,3)
             this.flag=1
          }else{
            this.showdata=this.DetailsListData.goodslist;
             this.flag=0
          }

        }
    }




    }
</script>

<style scoped>
#detailslist{display: -webkit-flex;flex-direction: column;}
#detailslist>div{margin-top: .1rem;background-color: white;}
.check,.vips,.groupbuying{display: -webkit-flex;padding: .12rem .19rem}
.check{justify-content: space-between;}
.check div{display: -webkit-flex;align-items: center}
.check div:first-child img{width: .18rem;height: .18rem;margin-right: .11rem}
.check div:first-child p{font-size: .14rem;}
.check div:last-child img{width: .08rem; height: .13rem;margin-left: .06rem}
.check div:last-child span{font-size: .11rem; color: #696969;}
.vips{flex-direction: column;}
.vips div{display: -webkit-flex;align-items: center}
.vips div img{width: .18rem;height: .18rem;margin-right: .1rem}
.vips div p{font-size: .16rem; font-weight: bolder}
.vips .cards {width:3.3rem ;height:.86rem;margin-top: .15rem}
  .groupbuying{display: -webkit-flex;flex-direction: column;}
  .group_top{display: -webkit-flex;align-items: center;justify-content: space-between;}
.group_top div{display: -webkit-flex;align-items: center;}
.group_top div:first-child img{width: .19rem;height: .19rem;margin-right: .14rem;}
.group_top div:first-child p{font-size: .16rem; font-weight: bolder;}
.group_top div:nth-child(2) img{width: .12rem; height: .12rem;margin-right: .05rem;}
.group_top div:nth-child(2) span{align-items: center;display: -webkit-flex;font-size:.11rem;
  color: #7e7e7e;
  margin-right: .12rem;
}
.group_con{display: -webkit-flex;flex-direction: column;border-bottom: 2px solid #ececec}
.group_goods{display: -webkit-flex;padding: .1rem 0;}
.group_goods div:first-child{display: -webkit-flex;}
.group_goods div:first-child img{width:.67rem;height:.67rem;margin-right: .12rem}
.goods_infos div:first-child{font-size: .13rem;}
.goods_infos>span{display: -webkit-flex;justify-content: flex-end;font-size: .12rem;color: #777777;margin: .05rem 0}
.goods_infos>span img{width: .08rem; height: .13rem;margin-left: .05rem;}
.youhui{display: -webkit-flex;align-items: center}
.youhui p{font-size: .16rem; color: #fb6b27;font-weight: bolder;margin-right: .1rem}
.youhui .oldprice{font-size: .1rem;color: #6c6c6c;text-decoration: line-through;margin-right: .08rem}
.youhui .bright{font-size: .1rem;border:1px solid #e5dfd8;color: #ea694a;padding: .03rem}
.mores{font-size: .15rem;color: #727272;display: -webkit-flex;align-items: center;justify-content: center;margin-top: .12rem}
.mores img{width: .11rem;height: .06rem;margin-left: .05rem}
</style>
