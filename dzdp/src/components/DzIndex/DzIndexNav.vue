<template>
    <div class="navList">
      <router-link tag="a" :to="n.path" class="List-item" :key="index" v-for="(n,index) in IndexData">
        <img :src="n.listImg" alt=""/>
        <p>{{n.listText}}</p>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "DzIndexNav",
        props:["IndexData"]
    }
</script>

<style scoped>

  .navList{
    display: flex;
    /*justify-content: space-around;*/
    flex-wrap:wrap;
    margin-top: 0.32rem;
  }
  .List-item{
    justify-content: center;
    text-align: center;
    padding: 0 0.1rem;
    width: 0.55rem;
  }
  .List-item img{
    width:0.36rem;
    height:0.36rem;
    margin: 0 auto;
  }
  .List-item p{
    color: #010101;
    font-size: 0.12rem;
    margin:0.15rem 0 0.19rem 0;
  }

</style>
