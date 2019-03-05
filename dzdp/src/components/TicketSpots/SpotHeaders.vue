<template>
    <div id="spotheaders">
      <div class="header_one"><img src="../../../static/PartThreeImg/left_jt.jpg" @click="GoBack"><h3>景点门票</h3></div>
      <div class="header_two">
        <div>
          <span>西安<img src="../../../static/PartThreeImg/xia_jt.jpg"></span>
          <input type="text" placeholder="景点/门票">
        </div>
      </div>
      <div class="header_three"><span>西安城墙</span><span>大唐芙蓉园</span><span>温泉</span><span>海洋馆</span></div>
    </div>
</template>

<script>
    export default {
        name: "SpotHeaders",
        methods:{
          GoBack(){
            this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
#spotheaders{
  display: -webkit-flex;
  flex-direction: column;
  padding: 0 .16rem;
}
  .header_one{
    display: -webkit-flex;
    padding: .17rem 0;
    box-sizing: border-box;
  }
  .header_one img{
    width:.17rem ;
    height:.22rem ;
    margin-right: 1.25rem;
  }
.header_one h3{
   font-size: .16rem;
}
.header_two{
  display: -webkit-flex;
  justify-content: center;
}
.header_two div{
  display: -webkit-flex;
  background-color: #f2f2f2;
  align-items: center;
  box-sizing: border-box;
  padding: .05rem .2rem;
  width: 100%;
  border-radius: .15rem;
}
.header_two span{
  display: -webkit-flex;
  font-size: .13rem;
  border-right: 1px solid #e3e3e3;
  align-items: center;
  box-sizing: border-box;
  padding-right: .1rem;
  margin-right: .1rem;
}
.header_two img{
  width: .11rem;
  height: .07rem;
  margin-left: .05rem;
}
.header_two input{
  font-size: .13rem;
  color: #757575;
  background-color: #f2f2f2;
  outline: none;
  border: none;
}
.header_three{
  display: -webkit-flex;
  padding: .12rem 0;
  border-bottom: 1px solid #ececec;
}
.header_three span{
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  padding: .05rem .11rem;
  border-radius: .17rem;
  font-size: .12rem;
  margin-right: .08rem;
}
.header_three span:last-child{
  margin: 0;
}
</style>
