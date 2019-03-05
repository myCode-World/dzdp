<style>

</style>
<template>
<div>
    <div class="bar">
        <p class="bar-span-one">
            <span>附近</span>
            <img src="../../../static/imgs/bar-jiantu.jpg" alt="">
        </p>
         <p   class="bar-span-one">
            <span class='span-beaut'>美甲美睫</span>
            <img src="../../../static/imgs/bar-jiantu.jpg" alt="">
        </p>
         <p   class="bar-span-one">
            <span>智能排序</span>
            <img src="../../../static/imgs/bar-jiantu.jpg" alt="">
        </p>
         <p  class="bar-span-one">
            <span>筛选</span>
            <img src="../../../static/imgs/bar-jiantu.jpg" alt="">
        </p>
    </div>
    <ul>
      <li class="bar-li-one" >
      <div class="bar-div-1">
         <p class="bar-span-two">
             <span>商区</span>
            <img src="../../../static/imgs/bar-jiantu.jpg" alt="">
         </p>
          <p class="bar-span-two">
             <span>地铁</span>
            <img src="../../../static/imgs/bar-jiantu.jpg" alt="">
         </p>
      </div>
       <vs-bar-two></vs-bar-two>
       <vs-bar-one></vs-bar-one>
      </li>

    </ul>
</div>
</template>
<script>
import VsBarOne from './VsBarOne'
import VsBarTwo from './VsBarTwo'
export default {
   data() {
      return {
      }
   },
   activated() {
   },
   components:{
      VsBarOne,
      VsBarTwo,
   },
   methods:{
        show(){
            var p = document.getElementsByClassName('bar-span-two')
         var div = document.getElementsByClassName('bar-div-2')
         for(var i=0;i<p.length;i++){
             p[i].onclick = function(){
                for(var j=0;j<p.length;j++){
                p[j].children[0].style.cssText="color:#000000;"
                p[j].children[1].style.cssText='transform:rotatez(0deg)'
             }
               this.children[0].style.cssText="color:#ff672d;"
               this.children[1].style.cssText='transform:rotatez(180deg)'
               if(this.children[0].innerHTML=='商区'){
                   div[0].style.cssText='display:flex;'
                   div[1].style.cssText="display:none;"
               }else{
                    div[1].style.cssText='display:flex;'
                   div[0].style.cssText="display:none;"
               }
             }
         }
        },
        dianji(){
           var sum = 0;
           var bar = document.getElementsByClassName('bar-span-one')
           var div = document.getElementsByClassName('bar-li-one')
           for(var i=0;i<bar.length;i++){
               bar[i].onclick=function(){
                    for(var j=0;j<bar.length;j++){
                bar[j].children[1].style.cssText='transform:rotatez(0deg)'
             }
              this.children[1].style.cssText='transform:rotatez(180deg)'
              
               if(this.children[0].innerHTML=='附近'&& sum==0){
                   div[0].style.cssText='display:block;'
                   
                     sum=1;
               }else{
                    div[0].style.cssText='display:none;'
                     bar[0].children[1].style.cssText='transform:rotatez(0deg)'
                   
                     sum=0;
               }
               }
               sum++;
           }
        }
   },
   mounted () { 
       this.show();
         this.dianji();
         
   }
}
</script>
