<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="header" id="xxxFullScreen">
          <div class="mycar-header">
            <router-link to="/VsCar">
              <img src="../../../static/imgs/car-header-fanhun.jpg" alt="">
            </router-link>
            <span class="mycar">我的车库</span>
          </div>
    </div>
</template>
<script>
export default {
  name:"VsMyCarHeader"
}
</script>
