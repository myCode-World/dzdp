<style>

</style>
<template>
    <div class="car-header">
       <img src="../../../static/imgs/car-header-fanhun.jpg" alt="" @click="GoBack">
       <p>输入商品名、品类或商圈</p>
       <router-link to="/VsMyCar" tag="span">
       <img src="../../../static/imgs/car-header-z.jpg" alt="">
       </router-link>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   methods:{
     GoBack(){
       this.$router.push("/DzIndex")
     }
   }

}
</script>
