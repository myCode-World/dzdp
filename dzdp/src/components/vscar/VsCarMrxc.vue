<style>


</style>
<template>
    <div class="pageFullScreen">
         <ul class="car-one">
          <li v-for='n in ketang' :key="n">
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
                  'imgone':'../../../static/imgs/sction-2.jpg',
                  'text':'路客车生活',
                  'imgtwo':'../../../static/imgs/sction-b-2.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/sction-a-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'450元 精致GS水蜡洗车+内饰深刻清洁',
                  },
                {
                  'imgone':'../../../static/imgs/sction-1.jpg',
                  'text':'车道汽车服务会所',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/sction-a-1.jpg',
                  },
              {
                  'imgone':'../../../static/imgs/sction-1.jpg',
                  'text':'车道汽车服务会所',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/sction-a-1.jpg',
                  },
                  
                   {
                  'imgone':'../../../static/imgs/sction-3.jpg',
                  'text':'洗车人家',
                  'imgtwo':'../../../static/imgs/sction-b-3.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/sction-a-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'24.9元 普通洗车一次',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-4.jpg',
                  'text':'唐会TangAuto汽...',
                  'imgtwo':'../../../static/imgs/sction-b-4.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'8.3km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'20元 外观冲洗 + 面威斯丁停车费3小时',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-2.jpg',
                  'text':'路客车生活',
                  'imgtwo':'../../../static/imgs/sction-b-2.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'1.5km',
                  'imgthree':'../../../static/imgs/sction-a-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'450元 精致GS水蜡洗车+内饰深刻清洁',
                  },
                    {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-4.jpg',
                  'text':'唐会TangAuto汽...',
                  'imgtwo':'../../../static/imgs/sction-b-4.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'8.3km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'20元 外观冲洗 + 面威斯丁停车费3小时',
                  },
                    {
                  'imgone':'../../../static/imgs/sction-1.jpg',
                  'text':'车道汽车服务会所',
                  'imgtwo':'../../../static/imgs/sction-b-1.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'8.1km',
                  'imgthree':'../../../static/imgs/sction-a-1.jpg',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                    {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                 
                    {
                  'imgone':'../../../static/imgs/sction-5.jpg',
                  'text':'途虎养车工厂店（丈八东路店）',
                  'imgtwo':'../../../static/imgs/sction-b-5.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'3.5km',
                  'imgthree':'../../../static/imgs/sction-a-5.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'99元 四轮定位A类',
                  },
                   {
                  'imgone':'../../../static/imgs/sction-4.jpg',
                  'text':'唐会TangAuto汽...',
                  'imgtwo':'../../../static/imgs/sction-b-4.jpg',
                  'spanone':'美容洗车',
                  'spantwo':'8.3km',
                  'imgthree':'../../../static/imgs/sction-a-2.jpg',
                  'imgfour':'../../../static/imgs/tuan.jpg',
                   'textone':'20元 外观冲洗 + 面威斯丁停车费3小时',
                  },
          ]
      }
   },
    mounted () {
             var span = document.getElementsByClassName('car-span');
              for(var i=0;i<span.length;i++){
              var spanText = span[i].innerHTML; 
              console.log(spanText);
              if(spanText == ''){
                   var parent = span[i].parentNode;
                   console.log(parent)
                  parent.style.cssText='border:0;padding-top:30px;'
                  parent.childNodes[0].style.cssText='display:none;'
        }
        }   
    },
   activated() {
   }
    }
</script>
