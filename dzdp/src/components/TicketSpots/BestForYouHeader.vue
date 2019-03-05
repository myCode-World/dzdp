<template>
   <div id="headers">
     <h3>为你优选</h3>
     <div id="xuanxiang">
       <P>全部景点<img src="../../../static/PartThreeImg/xiaxuan_jt.jpg"></P>
       <P>全部商圈<img src="../../../static/PartThreeImg/xiaxuan_jt.jpg"></P>
       <P>离我最近</P>
       <P>好评优先</P>
     </div>
     <div>
       <span>网红地打卡</span><span>梦回大唐</span><span>花灯庙会</span><span>古寺祈福</span>
     </div>
   </div>
</template>

<script>
    export default {
        name: "BestForYouHeader"
    }
</script>

<style scoped>
#headers{
  display: -webkit-flex;
  flex-direction: column;
  padding-left: .18rem;
  box-sizing: border-box;
  background-color: white;
}
#headers h3{
  font-size: .18rem;
}
  #headers div{
    display: -webkit-flex;
    padding: .12rem 0;
  }
  #xuanxiang {
    border-bottom: 1px solid #fafafa;
  }
#headers p{
  font-size: .13rem;
  display: -webkit-flex;
  align-items: center;
  font-weight: bolder;
  margin-right: .14rem;
}
#headers #xuanxiang img{
  margin-left: .04rem;
}
#headers span{
  font-size: .11rem;
  background-color: #f6f8f7;
  box-sizing: border-box;
  padding: .07rem .12rem;
  border-radius: .15rem;
  margin-right: .1rem;
}
</style>
