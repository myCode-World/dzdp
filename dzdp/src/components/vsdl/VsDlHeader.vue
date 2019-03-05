<style>
/* pageFullScreen在index.css */
#xxxFullScreen {
background-color: #eee;
} 

</style>
<template>
    <div class="header" id="xxxFullScreen">
        <ul class="header-d">
            <li class='header-li-1'>
                <img src="../../../static/imgs/denglu.jpg" alt="" @click="Close">
            </li>
            <li class="header-li-2">
                手机号登录/注册
            </li>
            <li class="header-li-3">
                <p class="header-li-3-p-1">
                    <span>中国+86</span>
                    <img src="../../../static/imgs/denglu-1.jpg" alt="">
                </p>
                <input type="text" placeholder="请输入手机号" v-model="text">
            </li>
            <li class='header-li-4'>
                登录遇到问题
            </li>
            <li :class="[ text ? 'header-li-5-1' : 'header-li-5' ]" id="header-li-5" @click="sendPhone(text)">下一步</li>
            <li class="header-li-6">
                未注册的手机验证后将自动登录
            </li>
            <li class="header-li-7">
                <span></span>
                <span class="li-7-span-1">第三方账号登录</span>
                <span></span>
            </li>
            <li class="header-li-8">
                <img src="../../../static/imgs/wenxin.jpg" alt="">
                 <img src="../../../static/imgs/qq.jpg" alt="">
                  <img src="../../../static/imgs/wenbo.jpg" alt="">
            </li>
            <li class="header-li-9">
                登录即代表同意<a href="">《美团点评平台用户服务协议》</a>、<a href="">
                    《隐私政策》
                </a>
                等，<span>接受免除或者限制责任、诉讼管辖约定</span>
                等粗体或下划线标示条款。
            </li>
        </ul>
    </div>
</template>
<script>
export default {
   data() {
      return {
          text:'',
      }
   },
   methods:{
     sendPhone(text){
       this.$store.dispatch("setUserName",text);
       if(!(/^1(3|4|5|7|8)\d{9}$/.test(text))){
         alert("手机号码有误，请重新输入");
         return false;
       }
       // 路由传参
       this.$router.push({name:"VsReg",params:{phoneNum:text}})
     },
     Close(){
       console.log("没有用");
       this.$router.go(-1)
     }
   }

}
</script>
