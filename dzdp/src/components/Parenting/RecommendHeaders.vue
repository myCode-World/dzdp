<template>
    <div id="recommheader">
      <h3 @click="switchs(0)" :class="{apk:underlines===0}">同龄推荐</h3>
      <h3 @click="switchs(1)" :class="{apk:underlines===1}">附近好店</h3>
    </div>
</template>

<script>
    export default {
        name: "RecommendHeaders",
      data(){
          return{
            underlines:0
          }
      },
        methods:{
            switchs(n) {
              this.$emit("qiehuan",n);
              this.underlines = n;
            }
        }
    }
</script>

<style scoped>
 #recommheader{
   display: -webkit-flex;
   background-color: white;
   justify-content: space-around;
   padding: .1rem 0;
 }
 #recommheader h3{
   font-size: .18rem;
 }
  .apk{
    border-bottom: .05rem solid #ffc700;
  }
</style>
