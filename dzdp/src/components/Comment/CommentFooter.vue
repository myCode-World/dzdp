<template>
    <div class="footer">
      <img src="../../../static/assets/img/zan.png" alt="">
      <img src="../../../static/assets/img/info.png" alt="">
      <img src="../../../static/assets/img/wx.png" alt="">
      <img src="../../../static/assets/img/fx.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "CommentFooter"
    }
</script>

<style scoped>
  .footer{
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background:white;
    padding: .1rem 0;
  }
  .footer img{
    width:.25rem;
    height:.25rem;
  }
</style>
