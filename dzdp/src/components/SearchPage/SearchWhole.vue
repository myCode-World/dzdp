<template>
    <div id="searchwhole">
      <div id="finds">
        <p>搜索发现</p>
        <div>
          <span v-for="f in SearchWholeData.finds"><img :src="f.tubiao" v-if="f.tubiao">{{f.types}}</span>
        </div>
      </div>
      <div id="ranklist">
         <div id="ranklist_top">
           <p>西安实时榜(分钟级更新)</p>
           <div><span>全部热搜</span><img src="../../../static/PartThreeImg/list_rjt.jpg"></div>
         </div>
         <div id="ranklist_btn">
            <div class="varieties" v-for="v in SearchWholeData.ranklist">
              <div><span>TOP {{v.rank}}</span><span>{{v.varies}}</span></div>
              <span>{{v.clicks}} -</span>
            </div>
         </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SearchWhole",
      props:["SearchWholeData"]
    }
</script>

<style scoped>
 #searchwhole{
   display: -webkit-flex;
   flex-direction: column;
   background-color: #efefef;
 }
  #finds{
    display: -webkit-flex;
    flex-direction: column;
    padding: .13rem 0 .13rem .14rem;
    background-color: white;
  }
 #finds p{
   font-size: .13rem;
   color: #787878;
 }
 #finds div{
   display: -webkit-flex;
   flex-wrap: wrap;
 }
 #finds div span{
   font-size: .12rem;
   color: #353535;
   padding: .08rem .11rem;
   box-sizing: border-box;
   background-color: #f4f4f4;
   border-radius: .15rem;
   display: -webkit-flex;
   align-items: center;
   margin-right: .05rem;
   margin-top: .09rem;
 }
 #finds div span img{
   width: .11rem;
   height: .11rem;
   margin-right: .06rem;
 }
  #ranklist{
    display: -webkit-flex;
    flex-direction: column;
    background-color: white;
    margin-top: .1rem;
    padding: .14rem .14rem;
  }
 #ranklist_top{
   display: -webkit-flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 2px solid #f5f5f5;
   padding-bottom: .14rem;
 }
 #ranklist_top div{
   display: -webkit-flex;
   align-items: center;
 }
 #ranklist_top p{
  font-size: .14rem;
   color: #9b9b9b;
 }
 #ranklist_top span{
   font-size: .12rem;
   color: #9b9b9b;
 }
 #ranklist_top img{
   width: .08rem;
   height: .14rem;
   margin-left: .06rem;
 }
 #ranklist_btn {
   display: -webkit-flex;
   flex-direction: column;
 }
  .varieties{
    display: -webkit-flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .14rem;
  }
 .varieties div{
   display: -webkit-flex;
   align-items: center;
 }
 .varieties  span{
   font-size: .12rem;
 }
 .varieties div span:first-child{
   color: white;
   padding:.04rem .07rem;
   margin-right: .08rem;
   background-color: #e3bf83;
 }
 .varieties div span:nth-child(2){
   font-weight: bolder;
 }
 .varieties:first-child div span:first-child,.varieties:nth-child(2) div span:first-child,.varieties:nth-child(3) div span:first-child{
   background-color: #e02f1e;
 }
</style>
