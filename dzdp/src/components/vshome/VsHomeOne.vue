<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="pageFullScreen" id="xxxFullScreen">
        <li class="sction-li-10" v-for="n in footer" :key="n">
             <p class="sction-li-10-p-1">
                 <span>{{n.textone}}</span>
                 <img :src="n.imgtuan" alt="">
             </p>
             <div class="sction-li-10-p-2">
                 <p>
                 <img :src="n.imgxing" alt="">
                 <span class="sction-li-10-p-2-span-1">{{n.spanone}}</span>
                 </p>
                 <span class="sction-li-10-p-2-span-2">{{n.spantwo}}</span>
             </div>
             <p class="sction-li-10-p-3"> 
               <img :src="n.imgfooterone" alt=""> 
               <img :src="n.imgfootertwo" alt="">
               <img :src="n.imgfooterthree" alt="">
             </p>
         </li>
    </div>
</template>
<script>
export default {
   data() {
      return {
           footer:[
             {
                 'textone':'清墨装饰',
                 'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
                 'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
                 'spanone':'￥10678/人',
                 'spantwo':'雁翔路 13km',
                 'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
                 'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
                 'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
             },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'升腾美巢',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'言白设计',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'易购国际设计（曲江创意店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'积木家互联网装修（省体店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
             {
               'textone':'清墨装饰',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-1.jpg',
               'spanone':'￥10678/人',
               'spantwo':'雁翔路 13km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-1.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-2.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-3.jpg'
           },
             {
               'textone':'伊森·空间设计（曲江店）',
               'imgtuan':'../../../static/imgs/home-sction-footer-tuan.jpg',
               'imgxing':'../../../static/imgs/home-sction-footer-xing-2.jpg',
               'spanone':'￥106114/人',
               'spantwo':'高新路沿线 5.1km',
               'imgfooterone':'../../../static/imgs/home-sction-footer-4.jpg',
               'imgfootertwo':'../../../static/imgs/home-sction-footer-5.jpg',
               'imgfooterthree':'../../../static/imgs/home-sction-footer-6.jpg'
           },
              
         ]
      }
   },
   activated() {
   }
}
</script>
