<template>
   <div id="best_contents">
     <div class="best_con" v-for="bs in BestForData.bestlist">
       <img :src="bs.bestimgs">
       <div class="best_con_right">
         <h3>{{bs.bestnames}}</h3>
         <div class="best_info1">
           <img class="xing" :src="bs.xing"><span class="scores">{{bs.scores}}</span>|<span>{{bs.num}}条评价</span>
         </div>
         <div class="best_info2">
           <span>{{bs.category}}</span>|<span>{{bs.distance}}</span>
         </div>
         <div class="best_info3">
           <div><span>￥{{bs.price}}元</span>起</div>
           <div><span>{{bs.discount}}</span><span>{{bs.usgae}}</span></div>
         </div>
       </div>
     </div>
   </div>
</template>

<script>
    export default {
        name: "BestForYouCon",
        props:["BestForData"]
    }
</script>

<style scoped>
#best_contents{
  display: -webkit-flex;
  flex-direction: column;
}
  .best_con{
    display: -webkit-flex;
    background-color: white;
    margin-top: .04rem;
    padding: .15rem;
    box-sizing: border-box;
  }
  .best_con>img{
    width:1.07rem ;
    height: .87rem;
    margin-right: .12rem;
  }
.best_con_right{
  display: -webkit-flex;
  flex-direction: column;
  justify-content: space-around;
}
  .best_con_right h3{
    font-size: .16rem;
  }
.best_con_right div{
  display: -webkit-flex;
  align-items: center;
}
  .xing {
    width:.12rem ;
    height:.12rem ;
    margin-right: .06rem;
  }
  .best_info1{
    font-size: .12rem;
  }
.best_info1 span{
  margin: 0 .05rem;
}
.best_info1 .scores{
  color: #f48a20;
}
  .best_info2{
    font-size: .12rem;
  }
.best_info2 span{
  margin: 0 .02rem;
}
.best_info3 div{
  display: -webkit-flex;
  font-size: .12rem;
}
.best_info3 div:first-child{
  margin-right: .1rem;
}
.best_info3 div:first-child span:first-child{
  font-size:.15rem ;
  color:#f95823 ;
}
.best_info3 div:nth-child(2) span{
  padding: .03rem .03rem;
}
.best_info3 div:nth-child(2) span:first-child{
  margin-right: .04rem;
  background-color: #fff3f3;
  border: 1px solid #fbe7ec;
  color: #fa375f;
}
.best_info3 div:nth-child(2) span:last-child{
  background-color: #f0f7fd;
  border: 1px solid #e6f3fb;
  color: #0f82dc;
}
</style>
