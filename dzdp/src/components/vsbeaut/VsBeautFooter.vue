<style>


</style>
<template>
    <div>
         <ul class="car-one">
          <li v-for='n in ketang'>
              <img class='car-one-img-1' :src='n.imgone' alt="">
              <div class="car-div-1">
                  <div>
                  <h3>{{n.text}}</h3>
                  <img   class='car-one-img-2' :src="n.imgtwo" alt="">
                  <p> 
                      <span class="tc-p-two">{{n.spanone}}</span>
                      <span>{{n.spantwo}}</span>
                  </p>
                 <img class='car-one-img-2' :src="n.imgthree" alt="">
                  <p class="tc-p-one">
                  <img class='car-one-img-3' :src='n.imgfour'>
                  <span class="car-span">{{n.textone}}</span>
                 </p>
              </div>   
              </div>
          </li>
      </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
          ketang:[
              {
                  'imgone':'../../../static/imgs/beaut-1.jpg',
                  'text':'启元美甲',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'丈八 美甲',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/b-1.jpg',
                   'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-2.jpg',
                  'text':'你今天真好看轻美容集..',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美睫',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-3.jpg',
                  'text':'美智社美甲美睫店（兰岛店）',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美甲',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-1.jpg',
                  'text':'启元美甲',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'丈八 美甲',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/b-1.jpg',
                   'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-2.jpg',
                  'text':'你今天真好看轻美容集..',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美睫',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-3.jpg',
                  'text':'美智社美甲美睫店（兰岛店）',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美甲',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'维修保养',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                    {
                  'imgone':'../../../static/imgs/beaut-1.jpg',
                  'text':'启元美甲',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'丈八 美甲',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/b-1.jpg',
                   'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-2.jpg',
                  'text':'你今天真好看轻美容集..',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美睫',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-3.jpg',
                  'text':'美智社美甲美睫店（兰岛店）',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美甲',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                    {
                  'imgone':'../../../static/imgs/sction-1.jpg',
                  'text':'车道汽车服务会所',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'维修保养',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/sction-a-1.jpg',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'维修保养',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                    {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'维修保养',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-1.jpg',
                  'text':'车道汽车服务会所',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'维修保养',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/sction-a-1.jpg',
                  },
                     {
                  'imgone':'../../../static/imgs/beaut-2.jpg',
                  'text':'你今天真好看轻美容集..',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美睫',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
                   {
                  'imgone':'../../../static/imgs/beaut-3.jpg',
                  'text':'美智社美甲美睫店（兰岛店）',
                  'imgtwo':'../../../static/imgs/a-3.jpg',
                  'spanone':'高新 美甲',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/b-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'[美甲]19.9元 单纯色，49.9元 纯色...',
                  },
          ]
      }
   },
    mounted () {
             var span = document.getElementsByClassName('car-span');
              for(var i=0;i<span.length;i++){
              var spanText = span[i].innerHTML; 
              if(spanText === ''){
                   var parent = span[i].parentNode;
                  parent.style.cssText='border:0;padding-top:30px;';
                  parent.childNodes[0].style.cssText='display:none;'
        }
        }   
    },
   activated() {
   }
    }
</script>
