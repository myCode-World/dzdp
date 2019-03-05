<template>
  <div class="DzIndex">
    <dz-index-header :IndexData="IndexData.helpTool"></dz-index-header>
    <dz-index-section :IndexData="IndexData"></dz-index-section>
    <dz-index-footer></dz-index-footer>
  </div>

</template>

<script>
    import "../assets/css/iconfont.css";
    import DzIndexHeader from "../components/DzIndex/DzIndexHeader";
    import DzIndexSection from "../components/DzIndex/DzIndexSection";
    import DzIndexFooter from "../components/DzIndex/DzIndexFooter";
    // import IndexData from "../data/DzIndexData"
    export default {
      name: "DzIndex",
      components: {DzIndexFooter, DzIndexSection, DzIndexHeader},
      data(){
          return {
            IndexData:[]
          }
      },
      created() {
        this._initdata()
      },
      methods:{
        _initdata(){
          fetch("http://localhost:3000/DzIndex")
            .then(res=>{
              res.json().then(data=>{
                this.IndexData=data;
              })
            })
        }
      }
    }
</script>

<style scoped>
.DzIndex{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
