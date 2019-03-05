<template>
  <div class="mainCourse">
    <ul class="mainCourseUls">
      <li v-for="(n,index) in lisData"  @click="clickChange(index)" :class="{clickChange:change===index}"><span>{{n.txt}}</span ><span></span></li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "TrainContentCourseListMainCourse",
      props:["lisData"],
      data(){
          return {
            change: 0
          }
      },
        methods: {
          clickChange:function(index){
            this.change = index
          }
      }
    }
</script>

<style scoped>
  .mainCourseUls{
    display: -webkit-box;
    overflow: auto;
    height:.4rem;
    border-top:1px solid #d3d3d3;
    border-bottom:1px solid #d3d3d3;
    background:white;
  }
  .mainCourseUls::-webkit-scrollbar {
    display: none;
  }
  .mainCourseUls li{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
  }
  .mainCourseUls li span:first-child{
    font-size:.13rem;
    margin-top:.1rem;
  }
  .mainCourseUls li  span:last-child{
    display: block;
    margin-top:.1rem;
    width:.85rem;
    height:.03rem;
    background:white;
  }
  .mainCourseUls .clickChange{
    color:#3aa682;
  }
  .mainCourseUls .clickChange span:last-child{
    background-color: #3aa682;
  }
</style>
