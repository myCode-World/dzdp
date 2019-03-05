<template>
  <div>
    <index-food-header></index-food-header>
    <index-food-content :IndexFoodData="IndexFoodData"></index-food-content>
  </div>
</template>

<script>
  import "../../assets/css/iconfont.css"
  import IndexFoodHeader from "../../components/IndexFood/IndexFoodHeader"
  import IndexFoodContent from "../../components/IndexFood/IndexFoodContent"

    export default {
        name: "IndexFood",
        components:{
          IndexFoodHeader,
          IndexFoodContent
        },
        data(){
          return{
            IndexFoodData:[]
          }
        },
        created() {
          this._initdata()
        },
        methods:{
          _initdata(){
            fetch("http://localhost:3000/IndexFood")
              .then(res=>{
                res.json().then(data=>{
                  this.IndexFoodData=data;
                })
              })
          }
        },

    }
</script>

<style scoped>

</style>
