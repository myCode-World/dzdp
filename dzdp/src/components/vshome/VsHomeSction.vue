<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="sction">
      <ul class="sction-1">
       <li class="sction-li-1">
           <img src="../../../static/imgs/home-sction-1.jpg" alt="">
           <img src="../../../static/imgs/home-sction-2.jpg" alt="">
           <img src="../../../static/imgs/home-sction-3.jpg" alt="">
           <img src="../../../static/imgs/home-sction-4.jpg" alt="">
        </li>
         <li class="sction-li-1">
           <img src="../../../static/imgs/home-sction-5.jpg" alt="">
           <img src="../../../static/imgs/home-sction-6.jpg" alt="">
           <img src="../../../static/imgs/home-sction-7.jpg" alt="">
           <img src="../../../static/imgs/home-sction-8.jpg" alt="">
        </li>
         <li class="sction-li-1">
           <img src="../../../static/imgs/home-sction-9.jpg" alt="">
           <img src="../../../static/imgs/home-sction-10.jpg" alt="">
           <img src="../../../static/imgs/home-sction-11.jpg" alt="">
           <img src="../../../static/imgs/home-sction-12.jpg" alt="">
        </li>
         <li class="sction-li-2">
           <span class="sction-span-1" @click="zhangkai">展开</span>
           <img src="../../../static/imgs/sction-jiantu.jpg" alt="">
        </li>
        <ul class="sction-2">
            <li class="sction-li-1">
           <img src="../../../static/imgs/home-sction-13.jpg" alt="">
           <img src="../../../static/imgs/home-sction-14.jpg" alt="">
           <img src="../../../static/imgs/home-sction-15.jpg" alt="">
           <img src="../../../static/imgs/home-sction-16.jpg" alt="">
        </li>
        <li class="sction-li-1">
           <img src="../../../static/imgs/home-sction-17.jpg" alt="">
           <img src="../../../static/imgs/home-sction-18.jpg" alt="">
           <img src="../../../static/imgs/home-sction-19.jpg" alt="">
           <img src="../../../static/imgs/home-sction-20.jpg" alt="">
        </li>
        <li class="sction-li-1">
           <img src="../../../static/imgs/home-sction-21.jpg" alt="">
           <img src="../../../static/imgs/home-sction-22.jpg" alt="">
           <img src="../../../static/imgs/home-sction-23.jpg" alt="">
           <img src="../../../static/imgs/home-sction-24.jpg" alt="">
        </li>
        <li class="sction-li-2">
         <span class="sction-span-1" @click="shouqi">收起</span>
           <img class="sction-img-1" src="../../../static/imgs/sction-jiantu.jpg" alt="">
        </li>
        </ul>
          <li class="sction-li-3">
             <p>
                 <span class="sction-li-3-span-1">
                     家装百科
                 </span>
                 <span class="sction-li-3-span-2">|</span>
                 <span class="sction-li-3-span-3">
                     Encyclopedia
                 </span>
             </p>
         </li>
         <li class="sction-li-4">
             <img v-for="n in imgone" :src="n.img" :key="n">
         </li>
         <li class="sction-li-5">
             <span>全部1231条内容 ></span>
         </li>
         <li class="sction-li-3">
             <p>
                 <span class="sction-li-3-span-1">装修美图</span>
                 <span class="sction-li-3-span-2">|</span>
                 <span class="sction-li-3-span-3">Gallery</span>
             </p>
         </li>
         <li class="sction-li-6">
             <img v-for="n in imgtwo" :src="n.img" :key="n">
         </li>
          <li class="sction-li-6">
             <img v-for="n in imgtwo" :src="n.imgs" :key="n">
         </li>
         <li class="sction-li-5">
             <span>更多精彩图片 ></span>
         </li>
         <li class="sction-li-7">
             <img src="../../../static/imgs/home-peop.jpg" alt="">
         </li>
         <li class="sction-li-8" v-for="n in peop" :key="n">
             <div>
                 <p>
                     <span class="sction-li-8-span-1">
                        {{n.textone}}
                     </span>
                     <span class="sction-li-8-span-2">
                         {{n.texttwo}}
                     </span>
                 </p>
                 <img :src="n.img" alt="">
             </div>
               <div>
                 <p>
                     <span class="sction-li-8-span-1">
                         {{n.textthree}}
                     </span>
                     <span class="sction-li-8-span-2">
                         {{n.textfour}}
                     </span>
                 </p>
                 <img :src="n.imgs" alt="">
             </div>
         </li>
          <li class="sction-li-3">
             <p>
                 <span class="sction-li-3-span-1">用户最爱装修公司</span>
                 <span class="sction-li-3-span-2">|</span>
                 <span class="sction-li-3-span-3">Design Company</span>
             </p>
         </li>
           <li class="sction-li-9">
             <p v-for="n in job" :key="n">
                 <img class="sction-li-9-img-1" :src="n.imgone" alt="">
                 <span class='sction-li-9-span-1'>
                     {{n.textone}}
                 </span>
                 <img class="sction-li-9-img-2" :src="n.imgtwo" alt="">
                 <span class="sction-li-9-span-2">
                     {{n.texttwo}}
                 </span>
             </p>
         </li>
          <li class="sction-li-5">
             <span>查看全部商户 ></span>
         </li>
         <li class='sction-ul-two-1'>
           <span class="car-span-1 car-span-2" @click="show('a')">装修设计</span>
           <span  class="car-span-2"  @click="show('b')">装修建材</span>
           <span  class="car-span-2"  @click="show('c')">全屋/橱柜定制</span>
           <span  class="car-span-2"  @click="show('d')">家具</span>
           <span  class="car-span-2"  @click="show('e')">厨卫洁具</span>
           <span  class="car-span-2"  @click="show('f')">家居家纺</span>
           <span  class="car-span-2"  @click="show('g')">灯饰照明</span>
           <span  class="car-span-2"  @click="show('h')">家用电器</span>
           <span  class="car-span-2"  @click="show('i')">家装卖场</span>
         </li>
           <div :is="flag"></div>
          <li class="sction-li-5">
             <span>查看更多商户</span>
         </li>
      </ul> 
    </div>
</template>
<script>
import VsHomeOne from './VsHomeOne'
import VsHomeTwo from './VsHomeTwo'
export default {
   data() {
      return {
          imgone:[
            {'img':'../../../static/imgs/home-sction-a.jpg' },
            {'img':'../../../static/imgs/home-sction-b.jpg' },
            {'img':'../../../static/imgs/home-sction-c.jpg' }
          ],
         imgtwo:[
             {
                 'img':'../../../static/imgs/home-sction-d.jpg',
                 'imgs':'../../../static/imgs/home-sction-e.jpg'
             },
              {
                 'img':'../../../static/imgs/home-sction-f.jpg',
                 'imgs':'../../../static/imgs/home-sction-g.jpg'
             },
         ],
         peop:[
             {
                 'textone':'免费设计',
                 'texttwo':'打造完美新家',
                 'img':'../../../static/imgs/home-peop-1.jpg',
                 'textthree':'免费报价',
                 'textfour':'十秒心里有数',
                 'imgs':'../../../static/imgs/home-peop-2.jpg'
             },
              {
                 'textone':'同城生活',
                 'texttwo':'免费报名',
                 'img':'../../../static/imgs/home-peop-3.jpg',
                 'textthree':'家居专享',
                 'textfour':'1元人气爆款',
                 'imgs':'../../../static/imgs/home-peop-4.jpg'
             },
              {
                 'textone':'特权订金',
                 'texttwo':'最高抵两千',
                 'img':'../../../static/imgs/home-peop-5.jpg',
                 'textthree':'甄选好货',
                 'textfour':'五折起',
                 'imgs':'../../../static/imgs/home-peop-6.jpg'
             },
         ],
         job:[
             {
                'imgone':'../../../static/imgs/home-job-1.jpg',
                'textone':'  积木家互联网...',
                'imgtwo':'../../../static/imgs/home-job-xing-1.jpg',
                'texttwo':'  品质整装 连锁品牌'
             },
             {
                'imgone':'../../../static/imgs/home-job-2.jpg',
                'textone':'  业之峰饰（西...',
                'imgtwo':'../../../static/imgs/home-job-xing-2.jpg',
                'texttwo':'环保装修 个性化'
             },
             {
                'imgone':'../../../static/imgs/home-job-3.jpg',
                'textone':'伊森·空间设计..',
                'imgtwo':'../../../static/imgs/home-job-xing-3.jpg',
                'texttwo':'  设计整装'
             }
         ],
          flag:"VsHomeOne",
      }
   },
   activated() {
   },
   components:{
       VsHomeOne,
       VsHomeTwo,
   },
   mounted(){
       this.changecolor();
       this.dianji();
   },
   methods:{
       zhangkai(){
         let zhang = document.getElementsByClassName('sction-li-2')[0];
           zhang.style.cssText='display:none';
           document.getElementsByClassName('sction-2')[0].style.cssText='display:block;'
       },
       shouqi(){
         let shou = document.getElementsByClassName('sction-li-2')[0];
           shou.style.cssText='display:flex;';
           document.getElementsByClassName('sction-2')[0].style.cssText='display:none;' 
       },
      changecolor(){
        let arr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let sum = arr.length;
        let span = document.getElementsByClassName('sction-li-8-span-2');
          for(let j=0;j<span.length;j++){
            let str='#';
               for(let i=0;i<6;i++){
                 let k = parseInt(Math.random()*sum);
                str+=arr[k];
                }
                  console.log(str)
              span[j].style.cssText="color:"+str+';border:1px solid'+str+';'
          }
      },
      dianji(){
        let span = document.getElementsByClassName('car-span-2');
          for(let i=0;i<span.length;i++){
              span[i].onclick=function(){
              for(let j=0;j<span.length;j++){
                  span[j].style.cssText='color:#444444;background:#ffffff;'
              }
              this.style.cssText=' color: #ffffff;background: #ff6735;'
              }
          }

      },
    show(n){
        if(n==='a'){
            this.flag='VsHomeOne';
        }else if(n==='b'){
            this.flag = 'VsHomeTwo';
        }else if(n==='c'){
            this.flag = 'VsHomeOne';
        }else if(n==='d'){
            this.flag = 'VsHomeTwo';
        }else if(n==='e'){
            this.flag = 'VsHomeOne';
        }else if(n==='f'){
            this.flag = 'VsHomeTwo';
        }else if(n==='g'){
            this.flag = 'VsHomeOne';
        }else if(n==='h'){
            this.flag = 'VsHomeTwo';
        }else{
            this.flag = 'VsHomeOne';
        }
    }

   }
}
</script>
