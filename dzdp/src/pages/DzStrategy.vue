<template>
  <div class="DzStrategy">
    <dz-strategy-section :DzStrategyData="DzStrategyData"></dz-strategy-section>
    <dz-index-footer></dz-index-footer>
  </div>

</template>

<script>

    import DzIndexFooter from "../components/DzIndex/DzIndexFooter";
    import DzStrategySection from "../components/DzStrategy/DzStrategySection";
    export default {
        name: "DzStrategy",
        components: {DzStrategySection, DzIndexFooter},
        data(){
          return {
            DzStrategyData:[]
          }
        },
        created() {
          this._initdata()
        },
        methods:{
          _initdata(){
            fetch("http://localhost:3000/DzStrategy")
              .then(res=>{
                res.json().then(data=>{
                  this.DzStrategyData=data;
                })
              })
          }
        }
    }
</script>

<style scoped>
  .DzStrategy {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .header{
    font-size: 0.12rem;
  }


</style>
