<template>
    <div id="classtypes">
      <div class="types_left">
        <ul>
          <li  v-for="(ct,index) in ClassTypesData.typelists"><a :href="names2" @click="pinjie(index)">{{ct.titles}}</a></li>
        </ul>
      </div>
      <div class="types_right">
        <div class="rightspace">
          <div :id="ct.names" class="type_rig_con" v-for="ct in ClassTypesData.typelists">
            <div class="type_rig_top">
              <div>
                <img src="../../../static/PartThreeImg/types_imgs_1.jpg">
                <h4>{{ct.titles}}</h4>
              </div>
              <span>查看全部<img src="../../../static/PartThreeImg/chakanquanbu.jpg"></span>
            </div>
            <ul class="type_rig_btn">
              <li v-for="cs in ct.lists">{{cs.t}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ClassTypes",
        props:["ClassTypesData"],
        data(){
          return {
            names2:""
          }
        },
      methods:{
          pinjie(index){
            this.names2="#"+this.ClassTypesData.typelists[index].names;
          }
      }
    }
</script>

<style scoped>
  #classtypes{display: -webkit-flex;background-color: #f7f7f7;}
  .types_left{display: -webkit-flex;flex-direction: column;font-size: .14rem;color: #585858;box-sizing: border-box;}
  .types_left ul{height: 6.75rem;overflow-y: auto;}
  .types_left li{padding: .11rem 0;width:.77rem;border-right: 1px solid #ececec;background-color: white;display: -webkit-flex;justify-content: center;border-bottom: 1px solid #ececec}
  .types_right{display: -webkit-flex;flex-direction: column;padding: 0 .13rem;}
  .rightspace{height: 6.75rem;overflow-y: auto;}
  .type_rig_con{display: -webkit-flex;flex-direction: column;}
  .type_rig_top{display: -webkit-flex;align-items: center;justify-content: space-between;margin-top: .19rem}
  .type_rig_top img:first-child{width:.18rem ;height:.18rem ;margin-right: .06rem;}
  .type_rig_top img:last-child{width:.07rem ;height:.1rem ;margin-left: .07rem}
  .type_rig_top h4{font-size: .12rem;}
  .type_rig_top div{display: -webkit-flex;align-items: center;}
  .type_rig_top span{display: -webkit-flex;align-items: center;font-size: .11rem;color: #9d9d9d;}
  .type_rig_btn{display: -webkit-flex;margin-top: .12rem;flex-wrap: wrap;}
  .type_rig_btn li{display: -webkit-flex;align-items: center;justify-content: center;background-color: white;font-size: .12rem;color: #7f7f7f;width: .89rem;height: .45rem;margin-right: .01rem;margin-top: .01rem;}
</style>
