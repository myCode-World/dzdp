<template>
    <div class="classify">
      <div class="classifyNav">
        <a :class="{ red:changeRed === index}" @click="reds(index)" href="##" :key="index" v-for=" (c,index) in IndexData.classifyList">{{c.classifyTitle}}</a>
      </div>
      <dz-index-classify-list :IndexData="IndexData.classifyContent[this.changeRed]"></dz-index-classify-list>
    </div>
</template>

<script>
    import DzIndexClassifyList from "../../components/DzIndex/DzIndexClassifyList";
    export default {
      name: "DzIndexClassify",
      components: {DzIndexClassifyList},
      props:["IndexData"],
      data(){
        return {
          changeRed:0
        }
      },
      methods:{
        reds:function(index){
          this.changeRed = index;
        }
      }

    }
</script>

<style scoped>

  .classify {
    margin: 0 0.1rem;
  }

  .classifyNav{
    display: flex;
    margin:0.15rem 0rem;
    align-items: center;
    overflow-x: auto;
  }
  .classifyNav::-webkit-scrollbar{
    display: none;
  }

  .classifyNav a{
    display: block;
    font-size: 0.16rem;
    margin:0 0.15rem;
    white-space: nowrap;
    position: relative;
  }
  .classifyNav .red:after{
    content: "";
    position:absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.05rem;
    background: linear-gradient(to right, #ff4f2a 20%,#ff9252 100%);
    z-index: -1;
  }
  .classifyNav .red {
    font-size: 0.18rem;
    font-weight: 600;
  }

</style>
