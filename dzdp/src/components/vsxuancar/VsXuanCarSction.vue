<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="sction" id="xxxFullScreen">
       <li class="sction-li-1">
           <p>
               输入品牌、车系、车款
           </p>
       </li>
       <h3>
           <a href="#A">A</a>
           <a href="#B">B</a>
           <a href="#C">C</a>
           <a href="#D">D</a>
           <a href="#F">F</a>
           <a href="#G">G</a>
           <a href="#H">H</a>
           <a href="#J">J</a>
           <a href="#K">K</a>
           <a href="#L">L</a>
            <a href="#M">M</a>
           <a href="#N">N</a>
           <a href="#O">O</a>
           <a href="#Q">Q</a>
           <a href="#R">R</a>
           <a href="#S">S</a>
           <a href="#T">T</a>
           <a href="#W">W</a>
           <a href="#X">X</a>
           <a href="#Y">Y</a>
            <a href="#Z">Z</a>
       </h3>
       <div id="A">
           <li class="div-li-1">A</li>
           <li class="div-li-2" v-for="n in a">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
         <div id="B">
           <li class="div-li-1">B</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="C">
           <li class="div-li-1">C</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="D">
           <li class="div-li-1">D</li>
           <li class="div-li-2" v-for="n in d">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
         <div id="F">
           <li class="div-li-1">F</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
            <div id="G">
           <li class="div-li-1">G</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="H">
           <li class="div-li-1">H</li>
           <li class="div-li-2" v-for="n in d">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="J">
           <li class="div-li-1">J</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="K">
           <li class="div-li-1">K</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="L">
           <li class="div-li-1">L</li>
           <li class="div-li-2" v-for="n in d">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="M">
           <li class="div-li-1">M</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="N">
           <li class="div-li-1">N</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="O">
           <li class="div-li-1">O</li>
           <li class="div-li-2" v-for="n in d">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="Q">
           <li class="div-li-1">Q</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="R">
           <li class="div-li-1">R</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
         <div id="S">
           <li class="div-li-1">S</li>
           <li class="div-li-2" v-for="n in d">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
       <div id="T">
           <li class="div-li-1">T</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="W">
           <li class="div-li-1">W</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
         <div id="X">
           <li class="div-li-1">X</li>
           <li class="div-li-2" v-for="n in d">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="Y">
           <li class="div-li-1">Y</li>
           <li class="div-li-2" v-for="n in b">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
        <div id="Z">
           <li class="div-li-1">Z</li>
           <li class="div-li-2" v-for="n in c">
               <img :src='n.img' alt="">
               <span>{{n.text}}</span>
           </li>
       </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
          a:[
              {
                  'img':'../../../static/imgs/xuan-car-1.jpg',
                  'text':'阿尔法·罗密欧'
              },
              {
                  'img':'../../../static/imgs/xuan-car-2.jpg',
                  'text':'阿斯顿·马丁'
              },
              {
                  'img':'../../../static/imgs/xuan-car-3.jpg',
                  'text':'奥迪'
              }
          ],
          b:[
               {
                  'img':'../../../static/imgs/xuan-car-4.jpg',
                  'text':'巴博斯'
              },
              {
                  'img':'../../../static/imgs/xuan-car-5.jpg',
                  'text':'保时捷'
              },
              {
                  'img':'../../../static/imgs/xuan-car-6.jpg',
                  'text':'宝骏'
              },
               {
                  'img':'../../../static/imgs/xuan-car-7.jpg',
                  'text':'宝马'
              },
              {
                  'img':'../../../static/imgs/xuan-car-8.jpg',
                  'text':'宝沃'
              },
              {
                  'img':'../../../static/imgs/xuan-car-9.jpg',
                  'text':'北京'
              },
              {
                  'img':'../../../static/imgs/xuan-car-10.jpg',
                  'text':'北汽幻速'
              },
                {
                  'img':'../../../static/imgs/xuan-car-4.jpg',
                  'text':'北汽瑞丽'
              },
              {
                  'img':'../../../static/imgs/xuan-car-5.jpg',
                  'text':'北汽绅宝'
              },
              {
                  'img':'../../../static/imgs/xuan-car-6.jpg',
                  'text':'北汽威旺'
              },
               {
                  'img':'../../../static/imgs/xuan-car-7.jpg',
                  'text':'北汽新能源'
              },
              {
                  'img':'../../../static/imgs/xuan-car-8.jpg',
                  'text':'北汽制造'
              },
              {
                  'img':'../../../static/imgs/xuan-car-9.jpg',
                  'text':'奔驰'
              },
              {
                  'img':'../../../static/imgs/xuan-car-10.jpg',
                  'text':'奔腾'
              },
               {
                  'img':'../../../static/imgs/xuan-car-6.jpg',
                  'text':'本田'
              },
               {
                  'img':'../../../static/imgs/xuan-car-7.jpg',
                  'text':'比速汽车'
              },
              {
                  'img':'../../../static/imgs/xuan-car-8.jpg',
                  'text':'比亚迪'
              },
              {
                  'img':'../../../static/imgs/xuan-car-9.jpg',
                  'text':'标致'
              },
              {
                  'img':'../../../static/imgs/xuan-car-10.jpg',
                  'text':'别克'
              },
               {
                  'img':'../../../static/imgs/xuan-car-10.jpg',
                  'text':'宾利'
              }
          ],
           c:[
              {
                  'img':'../../../static/imgs/xuan-car-1.jpg',
                  'text':'长安轿车'
              },
              {
                  'img':'../../../static/imgs/xuan-car-2.jpg',
                  'text':'长安跨越'
              },
              {
                  'img':'../../../static/imgs/xuan-car-3.jpg',
                  'text':'长安欧尚'
              },
              {
                  'img':'../../../static/imgs/xuan-car-1.jpg',
                  'text':'长安轻型车'
              },
              {
                  'img':'../../../static/imgs/xuan-car-2.jpg',
                  'text':'长城'
              },
              {
                  'img':'../../../static/imgs/xuan-car-3.jpg',
                  'text':'成功'
              },
          ],
           d:[
              {
                  'img':'../../../static/imgs/xuan-car-1.jpg',
                  'text':'大众'
              },
              {
                  'img':'../../../static/imgs/xuan-car-2.jpg',
                  'text':'道奇'
              },
              {
                  'img':'../../../static/imgs/xuan-car-3.jpg',
                  'text':'东风'
              },
              {
                  'img':'../../../static/imgs/xuan-car-1.jpg',
                  'text':'东风风光'
              },
              {
                  'img':'../../../static/imgs/xuan-car-2.jpg',
                  'text':'东风风神'
              },
              {
                  'img':'../../../static/imgs/xuan-car-3.jpg',
                  'text':'东南'
              },
          ],
      }
   },
}
</script>
