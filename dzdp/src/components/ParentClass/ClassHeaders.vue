<template>
    <div id="calssheaders">
       <img src="../../../static/PartThreeImg/left_jt.jpg" @click="jump">
       <h3>全部分类</h3>
    </div>
</template>

<script>
    export default {
        name: "ClassHeaders",
      methods:{
          jump(){
            this.$router.push("/parenting");
          }
      }
    }
</script>

<style scoped>
  #calssheaders{
    display: -webkit-flex;
    align-items: center;
    height: .48rem;
    box-sizing: border-box;
    padding: 0 .15rem;
    box-shadow: 0  1px 1px 2px #e1e1e1;
  }
  #calssheaders img{width:.13rem ;height: .23rem;margin-right: 1.25rem}
  #calssheaders h3{font-size: .16rem}
</style>
