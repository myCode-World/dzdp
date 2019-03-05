<template>
  <div id="shopsnavs">
      <p v-for="(n,index) in navs" :class="{changeColor:color===index}" @click="changeColor(index)">{{n.navtitle}}<span></span></p>
  </div>
</template>

<script>
    export default {
        name: "GoodsShopsNavs",
        data(){
            return{
              color:0,
               navs:[
                 {navtitle:'精选'},
                 {navtitle:'美发'},
                 {navtitle:'美甲美瞳'},
                 {navtitle:'美容SPA'},
                 {navtitle:'医学美容'},
                 {navtitle:'养发'},
                 {navtitle:'纤体瘦身'},
                 {navtitle:'瑜伽'},
                 {navtitle:'舞蹈'},
                 {navtitle:'韩式定妆'},
                 {navtitle:'化妆品'},
                 {navtitle:'纹身'},
                 {navtitle:'祛痘'}
               ]
            }
        },
      methods:{
        changeColor:function (index) {
            this.color=index;
          }
      }
    }
</script>

<style scoped>
  #shopsnavs{
    width: 100%;
    display: -webkit-flex;
    background-color: white;
    white-space: nowrap;
    overflow-x: auto;
    border-top: 1px solid #ededed;
    border-bottom: 1px solid #ededed;
  }
  #shopsnavs::-webkit-scrollbar{
    display: none;
  }
  #shopsnavs p{
    display: -webkit-flex;
    font-size: .18rem;
    padding: .15rem .32rem;
    font-weight: bolder;
    position: relative;
  }

  .changeColor{
    background-color: #f335bd;
    color: white;
  }
  #shopsnavs p span{
    width: 0;
    height: 0;
    border: .09rem solid transparent;
    border-top-color: black;
    position: absolute;
    left:0 ;
    top:0;
    display: none;
  }
</style>
