<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="pageFullScreen" id="xxxFullScreen">
       <li class="two-li-1" v-for="n in tuan" :key="n">
         <img :src="n.imgone" alt="">
         <div class="two-div-1"> 
             <p class="two-div-1-p-1"> 
                 <span class="two-div-1-span-1">{{n.spanone}}</span>
                 <img :src="n.imgtwo" alt="">
             </p>
             <img :src="n.imgthree" alt="">
             <p class="two-div-1-p-2">
                 <span class="two-div-1-span-2">{{n.spantwo}}</span>
                 <span class="two-div-1-span-2">{{n.spanthree}}</span>
             </p>
         </div>
      </li>
    </div>
</template>
<script>
export default {
   data() {
      return {
          tuan:[
              {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-1.jpg',
                  'spanone':'大金空调旗帜店',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'西安  中央空调/采暖',
                  'spanthree':'6.0km'
              },
               {
                  'imgone':'../../../static/imgs/home-zhuan-2.jpg',
                  'spanone':'意大利进口瓷砖',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-2.jpg',
                  'spantwo':'大明宫  瓷砖石材',
                  'spanthree':'13km'
              },
                 {
                  'imgone':'../../../static/imgs/home-zhuang-3.jpg',
                  'spanone':'远通大地硅藻泥',
                  'imgtwo':'../../../static/imgs/home-sction-footer-tuan.jpg',
                  'imgthree':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                  'spantwo':'大明宫  油漆涂料',
                  'spanthree':'13km'
              },
          ]
      }
   },
   activated() {
   }
}
</script>
