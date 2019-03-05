<style>
/* pageFullScreen在index.css */

</style>
<template>
    <div class="header">
        <ul>
           <li class="kuan-li-1">
              <img src="../../../static/imgs/car-header-fanhun.jpg" alt="" @click="fanhun()">
              <span>美甲款式</span>
              <img src="../../../static/imgs/kuan.jpg" alt="">
           </li>
           <li class="kuan-li-2">
              <span class="span-kuan">推荐</span>
              <span class="span-kuan">最新</span>
              <span class="span-kuan">价格</span>
              <span class="span-kuan">离我最近</span>
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
   mounted () {
       this.show();
   },
   methods:{
       show(){
         var span = document.getElementsByClassName('span-kuan');
         for(var i=0;i<span.length;i++){
            span[i].onclick = function(){
               for(var i=0;i<span.length;i++){
                  span[i].style.cssText='color:#000000;'
               }
               this.style.cssText='color:#ff6735;'
            }
         }
       },
       fanhun(){
            this.$router.go(-1);
       }
   },
   activated() {
   }
}
</script>
