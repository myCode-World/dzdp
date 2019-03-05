<template>
    <div class="loginPage">
      <header><i class="iconfont icon-ico_leftarrow" @click="GoBack"></i></header>
      <h3 class="loginWay">验证码登录</h3>
      <p class="phone">您输入是的手机号是+86 <span>{{username}}</span></p>
      <div class="codeBox">
        <input type="text" class="code" placeholder="请输入验证码" v-model="logins" @change="checkCode(logins)">
        <div class="getCode" @click="getCode(username)">获取验证码</div>
      </div>
      <div class="otherWay">
        <p>密码登录</p>
        <div class="codeError">
          <p>收不到验证码？</p>
          <p>获取语音验证码</p>
        </div>
      </div>
      <router-link tag="div" to="/DzMine" class="login" :class="[logins ? 'have' : 'nohave' ]">登录</router-link>
    </div>
</template>

<script>
    export default {
        name: "VsReg",
        data(){
          return{
            logins:"",
            username:"",
            code:this.randomYZM(6)
          }
        },
        mounted(){
            this.username=this.userName;
          console.log(this.username)
          console.log("点击后"+this.code)
        },
        computed:{
          userName:function(){
            return this.$store.getters.getUserName;
          }
        },
        methods:{
          login(){
            let flag = true;
            this.$store.commit('login',flag);
            this.$router.push({name:"DzMine",params:{username:this.username}});
            console.log("登录成功");
          },
          checkCode(str){
            console.log("输入后"+str)
            if(str===this.code){
              this.senduser();
              this.login();
            }else{
              // this.$store.dispatch("setUserName", false);
              alert("验证码错误")
            }
          },
          senduser(){
            this.$router.push({name:"DzMine",params:{username:this.username}})
          },
          GoBack(){
            this.$router.go(-1)
          },
          getCode(username){

            console.log("点击后"+this.code)
            //node request模块安装命令：npm install request
            let request = require('request');
            let querystring = require('querystring');

            let queryData = querystring.stringify({
              "mobile":username ,  // 接受短信的用户手机号码
              "tpl_id": "135902",  // 您申请的短信模板ID，根据实际情况修改
              "tpl_value": "#code#="+this.code,  // 您设置的模板变量，根据实际情况修改
              "key": "e43139401ee6b64a959f7a449af3d549",  // 应用APPKEY(应用详细页查询)
            });

            let queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;



            request(queryUrl, function (error, response, body) {



              if (!error && response.statusCode === 200) {
                console.log(body) // 打印接口返回内容
                let jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
                console.log(jsonObj)
              } else {
                console.log('请求异常');
              }
            })
          },
          randomYZM(num){
            let str='';
            for(let i=0;i<10;i++){
              let a=String.fromCharCode(this.random(48,57));
              str+=a;
            }

            let Yzm='';
            for(let j=0;j<num;j++){
              let index=parseInt(Math.random()*str.length);
              Yzm+=str[index];
            }
            return Yzm
          },
           random(a,b){
            return Math.floor(Math.random()*(b-a+1)+a);
          }

        }
    }
</script>

<style scoped>
  .loginPage {
    margin: 0 0.15rem;
  }
  header {
    height:0.45rem;
  }
  header i{
    display: block;
    font-size: 0.25rem;
    line-height: 0.45rem;
  }

  .loginWay {
    font-size: 0.25rem;
  }
  .phone{
    font-size: 0.14rem;
    color: #8d8d8d;
    margin: 0.1rem 0  0.6rem;
  }
  .phone span{
    color: #000;
    font-size: 0.16rem;
  }

  .codeBox {
    display: flex;
    justify-content: space-between;
    margin: 0.1rem 0;
  }
  .code {
    outline: none;
    border: 0;
    font-size: 0.18rem;
  }
  .getCode {
    width: auto;
    font-size: 0.18rem;
    padding:0.05rem 0.1rem;
    background: #8d8d8d;
    border-radius: 0.15rem;
    white-space: nowrap;
  }
  ::-webkit-input-placeholder {
    color: #cdcdcd;
    font-size: .14rem;
  }
  .otherWay {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .otherWay p{
    font-size: 0.13rem;
    color: #081b3b;
  }
  .codeError{
    display: flex;
  }
  .login {
    font-size: 0.2rem;
    text-align: center;
    color: #f3f3f3;
    padding: 0.08rem;
    margin: 0.3rem 0.15rem;
    border-radius: 0.25rem;
    background:#e3683d;
  }
  .have {
    background:#e3683d;
  }
  .nohave {
    background:#fec1ac;
  }


</style>
