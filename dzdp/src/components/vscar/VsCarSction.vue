<style>

</style>
<template>
    <div class="sction">
      <ul>
          <li class="car-sction-li-one">
              <img src="../../../static/imgs/car-sction-1.jpg" alt="">
               <img src="../../../static/imgs/car-sction-2.jpg" alt="">
                <img src="../../../static/imgs/car-sction-3.jpg" alt="">
                 <img src="../../../static/imgs/car-sction-4.jpg" alt="">
                  <img src="../../../static/imgs/car-sction-5.jpg" alt="">
          </li>
          <li>
                <img src="../../../static/imgs/car-sction-6.jpg" alt="">
                  <img src="../../../static/imgs/car-sction-7.jpg" alt="">
                    <img src="../../../static/imgs/car-sction-8.jpg" alt="">
                      <img src="../../../static/imgs/car-sction-9.jpg" alt="">
                        <img src="../../../static/imgs/car-sction-10.jpg" alt="">
          </li>
           <li>
                <img src="../../../static/imgs/car-sction-15.jpg" alt="">
                  <img src="../../../static/imgs/car-sction-14.jpg" alt="">
                    <img src="../../../static/imgs/car-sction-13.jpg" alt="">
                      <img src="../../../static/imgs/car-sction-12.jpg" alt="">
                        <img src="../../../static/imgs/car-sction-11.jpg" alt="">
          </li>
      </ul>
      <ul class='sction-ul-one'>
         <li class="sction-ul-one-1">
            <img src="../../../static/imgs/car-sction-fuwu.jpg" alt="">
         </li>
         <li class='sction-ul-one-2'>
             <img src="../../../static/imgs/car-sction-fuwu-1.jpg" alt="">
               <img src="../../../static/imgs/car-sction-fuwu-2.jpg" alt="">
                 <img src="../../../static/imgs/car-sction-fuwu-3.jpg" alt="">
                   <img src="../../../static/imgs/car-sction-fuwu-4.jpg" alt="">
         </li>
      </ul>
       <ul class='sction-ul-two'>
         <li class='sction-ul-two-1'>
             <span class="car-span-1" @click='submit("VsCarTc")'>推荐</span>
             <span  class="car-span-2" @click='submit("VsCarMrxc")'>美容洗车</span>
             <span  class="car-span-3" @click='submit("VsCarWxby")'>维修保养</span>
             <span  class="car-span-4" @click='submit("VsCarD4S")'>4S店</span>
             <span  class="car-span-5" @click='submit("VsCarGzty")'>改装调优</span>
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
       submit(n){
         this.$emit('ee',n)
         if(n==='VsCarTc'){
              document.getElementsByClassName('car-span-1')[0].style.cssText='color: #f1aa6c; border-bottom:2px solid #f1aa6c;';
              document.getElementsByClassName('car-span-2')[0].style.cssText=' color:#020202;border-bottom:0;';
                document.getElementsByClassName('car-span-3')[0].style.cssText=' color: #020202;border-bottom:0;';
                  document.getElementsByClassName('car-span-4')[0].style.cssText=' color:#020202;border-bottom:0;';
                    document.getElementsByClassName('car-span-5')[0].style.cssText=' color:#020202;border-bottom:0;';
         }else if(n==='VsCarMrxc'){
              document.getElementsByClassName('car-span-2')[0].style.cssText='color: #f1aa6c; border-bottom:2px solid #f1aa6c;';
              document.getElementsByClassName('car-span-1')[0].style.cssText=' color:#020202;border-bottom:0;';
                document.getElementsByClassName('car-span-3')[0].style.cssText=' color: #020202;border-bottom:0;';
                  document.getElementsByClassName('car-span-4')[0].style.cssText=' color: #020202;border-bottom:0;';
                    document.getElementsByClassName('car-span-5')[0].style.cssText=' color:#020202;border-bottom:0;';
                  
         }else if(n==='VsCarWxby'){
              document.getElementsByClassName('car-span-3')[0].style.cssText='color: #f1aa6c; border-bottom:2px solid #f1aa6c;';
              document.getElementsByClassName('car-span-1')[0].style.cssText=' color: #020202;border-bottom:0;';
                document.getElementsByClassName('car-span-2')[0].style.cssText=' color: #020202;border-bottom:0;';
                  document.getElementsByClassName('car-span-4')[0].style.cssText=' color:#020202;border-bottom:0;';
                    document.getElementsByClassName('car-span-5')[0].style.cssText=' color: #020202;border-bottom:0;';
                     
         }else if(n==='VsCarD4S'){
              document.getElementsByClassName('car-span-4')[0].style.cssText='color: #f1aa6c; border-bottom:2px solid #f1aa6c;';
              document.getElementsByClassName('car-span-1')[0].style.cssText=' color: #020202;border-bottom:0;';
                document.getElementsByClassName('car-span-3')[0].style.cssText=' color: #020202;border-bottom:0;';
                  document.getElementsByClassName('car-span-2')[0].style.cssText=' color: #020202;border-bottom:0;';
                    document.getElementsByClassName('car-span-5')[0].style.cssText=' color: #020202;border-bottom:0;';
                  
         }else{
              document.getElementsByClassName('car-span-5')[0].style.cssText='color: #f1aa6c; border-bottom:2px solid #f1aa6c;';
              document.getElementsByClassName('car-span-1')[0].style.cssText=' color: #020202;border-bottom:0;';
                document.getElementsByClassName('car-span-3')[0].style.cssText=' color:#020202;border-bottom:0;';
                  document.getElementsByClassName('car-span-4')[0].style.cssText=' color: #020202;border-bottom:0;';
                    document.getElementsByClassName('car-span-2')[0].style.cssText=' color: #020202;border-bottom:0;';
                     
         }
       }
   },
   activated() {
   }
}
</script>
