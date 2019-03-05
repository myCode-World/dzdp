<template>
    <div class="page">
      <to-go-footer></to-go-footer>
    </div>
</template>

<script>
    import ToGoFooter from "../../components/IndexToGo/ToGoFooter"

    export default {
        name: "IndexToGo",
        components:{
          ToGoFooter
        }
    }
</script>

<style scoped>
  .page{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
