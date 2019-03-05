<template>
    <div id="hairdwelfare">
      <div id="wel_left" class="welfare_xx"><img src="../../../static/PartThreeImg/welfare_font1.jpg"><span>9块9剪发</span><img src="../../../static/PartThreeImg/welfare_1.jpg"></div>
      <div id="wel_right">
        <div id="wel_right_top" class="welfare_xx"><img src="../../../static/PartThreeImg/wefare_font2.jpg"><span>307946人免费试用过</span><img src="../../../static/PartThreeImg/welfare_2.jpg"></div>
        <div id="wel_right_btn" class="welfare_xx"><img src="../../../static/PartThreeImg/welfare_font3.jpg"><span>周一好运造型.夏日福利</span><img src="../../../static/PartThreeImg/welfare_3.jpg"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HairdWelfare"
    }
</script>

<style scoped>
  #hairdwelfare{
    width: 100%;
    background-color: white;
    display: -webkit-flex;
  }
  #hairdwelfare span{
    color: #9b9b9b;
    font-size: 0.15rem;
    margin-top: .05rem;
  }
  #wel_left{
    width: 50%;
    border-right: 1px solid #e6e6e6;
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  #wel_left img:first-child{width: 1.2rem;height: .23rem;margin-top: .35rem}
  #wel_left img:last-child{width:1.6rem;height: 1.45rem;margin-top: .45rem}
  #wel_right{width: 50%;}
  #wel_right div{
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: .19rem;
  }
  #wel_right_top{
    border-bottom: 1px solid #e6e6e6;
  }
  #wel_right_top img:first-child{
    width: .84rem;height: .24rem;
  }
  #wel_right_top img:last-child{
    width:1rem ;height: .6rem;
  }
  #wel_right_btn img:first-child{
    width:1.44rem ;height:.28rem ;
  }
  #wel_right_btn img:last-child{
    width: 1.5rem;height:.5rem ;
  }
  .welfare_xx img{
    margin-top: .17rem;
  }
</style>
