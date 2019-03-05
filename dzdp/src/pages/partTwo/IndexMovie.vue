<template>
    <div class="box">
      <index-movie-header></index-movie-header>
    </div>
</template>

<script>
    import "../../assets/css/iconfont.css"
    import IndexMovieHeader from "../../components/IndexMovie/IndexMovieHeader"

    export default {
        name: "IndexMovie",
        components:{
          IndexMovieHeader
        }
    }
</script>

<style scoped>
  .box{
    height: 100%;
  }
</style>
