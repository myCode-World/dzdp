<template>
    <div id="footers">
      <div><img src="../../../static/PartThreeImg/de_footers1.jpg"><span>签到</span></div>
      <div><img src="../../../static/PartThreeImg/de_footers2.jpg"><span>拍视频</span></div>
      <div><img src="../../../static/PartThreeImg/de_footers3.jpg"><span>传照片</span></div>
      <div><img src="../../../static/PartThreeImg/de_footers4.jpg"><span>写点评</span></div>
    </div>
</template>

<script>
    export default {
        name: "DetailsFooters"
    }
</script>

<style scoped>
  #footers{
    display: -webkit-flex;
    align-items: center;
    height: .47rem;
    border-top: 2px solid #c6c6c6;
    background-color: white;
    justify-content: space-around;
  }
  #footers div{
    display: -webkit-flex;
    flex-direction: column;
    align-items: center;
  }
  #footers div img{
    width: .36rem;height: .23rem;
  }
  #footers div span{
    font-size: .09rem;
    color: #585858;
    margin-top: .025rem;
  }
</style>
