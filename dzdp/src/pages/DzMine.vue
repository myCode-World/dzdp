<template>
  <div class="DzMine">
    <dz-mine-section :DzMineData="DzMineData" :username="username,changeStyle"></dz-mine-section>
    <dz-index-footer></dz-index-footer>
  </div>

</template>

<script>
    import DzIndexFooter from "../components/DzIndex/DzIndexFooter";
    import DzMineSection from "../components/DzMine/DzMineSection";
    export default {
        name: "DzMine",
        components: {DzMineSection, DzIndexFooter},
        data(){
            return {
              DzMineData:[],
              username:"",
              changeStyle:""
            }
        },
        created() {
          this._initdata()
        },
        methods:{
          _initdata(){
            fetch("http://localhost:3000/DzMine")
              .then(res=>{
                res.json().then(data=>{
                  this.DzMineData=data;
                })
              })
          }
        },
        computed:{
          isLogin:function(){
            return this.$store.getters.getIsLogin;
          }
        },
        mounted(){
          this.changeStyle=this.isLogin;
          console.log(this.isLogin)
        },
    }
</script>

<style scoped>
  .DzMine {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
