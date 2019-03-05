<template>
    <div class="indexLink" @click="GoTo">
      <img v-for=" l in IndexData" :src="l.linkImg" alt=""/>
    </div>
</template>

<script>
    export default {
        name: "DzIndexLink",
        props:["IndexData"],
        methods:{
          GoTo(){
            this.$router.push("/BaWangCan")
          }
        }
    }
</script>

<style scoped>
  /*必推连接*/
  .indexLink {
    display: flex;
    justify-content: space-around;
    margin:0.2rem 0.1rem;
  }
  .indexLink img{
    width: 0.65rem;
    height: 0.61rem;
    box-shadow: 0px  3px 3px 1px #eee;
  }

</style>
