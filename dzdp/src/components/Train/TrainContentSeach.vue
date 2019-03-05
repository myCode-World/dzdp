<template>
  <div class="seach">
    <a href="#">
      <img src="../../../static/assets/img/stu.png" alt="">
      <span>输入科目、商户名、课程名</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "TrainContentSeach"
    }
</script>

<style scoped>
  .seach{
    display: flex;
    justify-content: center;
    padding-top:.1rem;
    padding-bottom:.1rem;
    background: white;
  }
  .seach a{
    display: flex;
    justify-content:center;
    align-items: center;
    width:3.03rem;
    height:.31rem;
    border:1px solid #e9e9e9;
    border-radius:5px;
    background:#f3f3f3;

  }
  .seach a img{
    width:.15rem;
    height:.15rem;
    margin-right:.05rem;
  }
  .seach a span{
    font-size:.11rem;
    color:#575757;
  }
</style>
