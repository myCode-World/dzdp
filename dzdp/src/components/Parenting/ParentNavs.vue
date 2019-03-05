<template>
    <div id="parentnavs">
          <ul>
           <router-link tag="li" :to="p.paths" :key="index" v-for="(p,index) in parentsNavsData.parnavlist"><img :src="p.imgs">{{p.titles}}</router-link>
          </ul>
    </div>
</template>

<script>
    export default {
        name: "ParentNavs",
        props:["parentsNavsData"],
        methods:{
            // pkq(index){
            //   let self =this;
            //   this.parentsNavsData.parnavlist.forEach(function (index) {
            //     // self.$router.push(index.paths);
            //     console.log(index);
            //   })
            //   // this.$router.push(this.parentsNavsData.parnavlist.paths);
            // }
        }

    }
</script>

<style scoped>
  #parentnavs{
    background-color: white;
    box-sizing: border-box;
    padding-bottom: .18rem;
  }
  ul{
    display: -webkit-flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    justify-content: space-between;
    justify-content: center;
    align-items: center;
  }
  li{
    display: -webkit-flex;
    font-size: .11rem;
    flex-direction: column;
    align-items: center;
    margin-right: .1rem;
    margin-left: .1rem;
    margin-top:.15rem;
  }
  li:first-child,li:nth-child(2),li:nth-child(3),li:nth-child(4),li:nth-child(5){
    font-weight: bolder;
  }
  li img{
    width:.3rem ;
    height:.3rem ;
    margin-bottom: .06rem;
  }
</style>
