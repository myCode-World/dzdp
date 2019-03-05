<template>
    <div>
      <search-pages-headers @halo="picks"></search-pages-headers>
      <div :is="flag" :SearchWholeData="SearchWholeData"></div>
    </div>
</template>

<script>
    import SearchPagesHeaders from "../../components/SearchPage/SearchPagesHeaders";
    import SearchWhole from "../../components/SearchPage/SearchWhole";
    import SearchWholeData from "../../data/SearchPage/SearchWholeData";
    import SearchComment from "../../components/SearchPage/SearchComment";
    import SearchDaren from "../../components/SearchPage/SearchDaren";
    export default {
        name: "SearchPage",
      components: {SearchDaren, SearchComment, SearchWhole, SearchPagesHeaders},
      data(){
          return{
            SearchWholeData,
            flag:"SearchWhole"
          }
      },
      methods:{
          picks(n){
            if(n===0){
              this.flag="SearchWhole";
            }else if(n===1){
              this.flag="SearchComment";
            }else{
              this.flag="SearchDaren";
            }
          }
      }
    }
</script>

<style scoped>

</style>
