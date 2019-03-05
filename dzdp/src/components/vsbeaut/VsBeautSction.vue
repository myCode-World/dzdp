<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div>
        <ul class="sction-ul">
          <router-link to="/VsBeautKuan" tag='li' active-class='beaut-sction-1' @click.native='shuaxin'>
            <li class="beaut-sction-1">
                <p>
                    <span class="beaut-sction-span-1">
                        美甲款式专区
                    </span>
                    <span class="beaut-sction-span-2">
                        <span>特价：</span>爆款美甲0.1折起，来就有>
                    </span>
                </p>
                <img src="../../../static/imgs/beauty-sction-1.jpg" alt="">
            </li>
          </router-link>
          <li class="beaut-sction-2">
              <img src="../../../static/imgs/beauty-sction-2.jpg" alt="">
          </li>
        </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
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
