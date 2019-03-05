<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="header" id="xxxFullScreen">
        <div class="mycar-header">
         <router-link tag="span" to="/VsMyCar">
          <img src="../../../static/imgs/car-header-fanhun.jpg" alt="">
         </router-link>
          <span class="xuan">选车</span>
          </div>
    </div>
</template>
<script>
export default {
  name:"VsXuanCarHeader"
}
</script>
