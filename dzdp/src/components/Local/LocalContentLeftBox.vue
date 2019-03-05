<template>
    <div class="content">
      <local-content-left-box-nav :localData="localData"></local-content-left-box-nav>
    </div>
</template>

<script>
    import LocalContentLeftBoxNav from "./LocalContentLeftBoxNav";

    export default {
        name: "LocalContentLeftBox",
        props:["localData"],
        components: {
          LocalContentLeftBoxNav
        }
    }
</script>

<style scoped>

</style>
