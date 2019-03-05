<template>
    <div id="parentclass">
      <class-headers></class-headers>
      <div class="class-types">
        <class-types :ClassTypesData="ClassTypesData"></class-types>
      </div>
    </div>
</template>

<script>
    import ClassHeaders from "../../components/ParentClass/ClassHeaders";
    import ClassTypes from "../../components/ParentClass/ClassTypes";
    import ClassTypesData from "../../data/ParentClass/ClassTypesData";
    export default {
      name: "ParentClass",
      components: {ClassTypes, ClassHeaders},
      data(){
          return{
            ClassTypesData
          }
      }
    }
</script>

<style scoped>
  #parentclass{
    display: -webkit-flex;
    flex-direction: column;
    height: 100%;
  }
  .class-types{
    flex: 1;
    overflow-y: auto;
  }
</style>
