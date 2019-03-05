<style>
/* pageFullScreen在index.css */
.beautKuang {
  background-color: #eee;
  flex: 1;
  overflow: auto;
} 

</style>
<template>
    <div class="beautKuang">
       <ul class="sction">
         <img class="img-kuan" src="../../../static/imgs/kuan.png" alt="">
         <li class="kuan-li-3" v-for="n in kuan">
           <div>
               <img class="kuan-imgs-1" :src="n.imgone" alt="">
               <p class="kuan-p-1">
                  <img class="kuan-imgs-2" src="../../../static/imgs/tehun.jpg" alt="">
                  <span>简约跳色</span>
               </p>
               <img class="kuan-imgs-3" src="../../../static/imgs/kuan-jia-1.jpg" alt="">
                <p class="kuan-p-2">
               <span>胡家庙 12.7km</span>
               <span>收藏447</span>
               </p>
          </div>
           <div>
               <img class="kuan-imgs-1" :src="n.imgtwo" alt="">
               <p class="kuan-p-1">
                  <img class="kuan-imgs-2" src="../../../static/imgs/tehun.jpg" alt="">
                  <span>简约跳色</span>
               </p>
               <img class="kuan-imgs-3" src="../../../static/imgs/kuan-jia-1.jpg" alt="">
               <p class="kuan-p-2">
               <span>胡家庙 12.7km</span>
               <span>收藏447</span>
               </p>
          </div>
         </li>
       </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
          kuan:[
              {
                'imgone':'../../../static/imgs/kuan-one-1.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-2.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-3.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-4.jpg'
              }, {
                'imgone':'../../../static/imgs/kuan-one-2.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-4.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-3.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-1.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-1.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-2.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-3.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-4.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-1.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-4.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-3.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-2.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-1.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-2.jpg'
              },
               {
                'imgone':'../../../static/imgs/kuan-one-3.jpg',
                'imgtwo':'../../../static/imgs/kuan-one-4.jpg'
              },
          ]
      }
   },
   activated() {
   },
}
</script>
