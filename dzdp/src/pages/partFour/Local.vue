<template>
  <div class="header">
    <local-header-top></local-header-top>
    <local-header-bottom :localData="localData"></local-header-bottom>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { IndexList, IndexSection } from 'mint-ui';
  Vue.component(IndexList.name, IndexList);
  Vue.component(IndexSection.name, IndexSection);
  import localData from "../../data/Location";

  import LocalHeaderTop from "../../components/Local/LocalHeaderTop";
  import LocalHeaderBottom from "../../components/Local/LocalHeaderBottom";

    export default {
        name: "Local",
      data() {
        return {
          localData
        }
      },
      components: {
        LocalHeaderBottom,
        LocalHeaderTop
        }
    }
</script>

<style scoped>
  .header{
    background:white;
    display: flex;
    height:100%;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
