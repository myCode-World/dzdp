<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="sction">
          <li class="sction-li-1" v-for="(n,index) in car" :key="index">
                  <span class="sction-li-1-span-2">...</span>
                  <p class="p-one">
                      <span class="sction-li-1-span-1">{{n.text}}</span>
                      <span class="sction-li-1-span-3">{{n.span}}</span>
                      <img src="../../../static/imgs/lovecar.jpg" alt="">
                  </p>
                  <img :src="n.img" alt="">
          </li>
           <router-link to="/VsXuanCar" tag="li" @click.native='shuaxin'>
            <li class="sction-li-2">
               <p> <img src="../../../static/imgs/tiancar.jpg" alt=""></p>
                <p><span class="sction-li-2-span-1">添加爱车</span></p>
                <p><span class="sction-li-2-span-2">添加可获5元爱车养护劵</span></p>
            </li>
           </router-link>
    </div>
</template>

<script>
export default {
   data() {
      return {
          car:[
              {
                  'text':'R8',
                  'span':'215.8-253.8万',
                  'img':'../../../static/imgs/mycar-1.jpg'
              },
               {
                  'text':'阿尔法·罗密欧Stelvio',
                  'span':'41.8-47.8万',
                  'img':'../../../static/imgs/mycar-2.jpg'
              }
          ]
      }
   },
   methods:{
    shuaxin(){
        this.$router.go(0);
    }
   },
   activated() {
   }
}
</script>
