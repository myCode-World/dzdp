<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="header">
         <img src="../../../static/imgs/car-header-fanhun.jpg" alt="" @click="GoBack">
         <p>输入商品名、品类或地点</p>
    </div>
</template>
<script>
export default {
  name:"VsHomeHeader",
  methods:{
    GoBack(){
      this.$router.push("/DzIndex")
    }
  }

}
</script>
