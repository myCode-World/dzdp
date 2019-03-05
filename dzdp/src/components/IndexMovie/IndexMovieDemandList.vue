<template>
    <div class="demandBox">
      <p class="title">点播影片推荐</p>
      <div class="demandList">
        <div class="demandPic" v-for="n in demandData.demandData">
          <img :src="n.pic"/>
          <p>{{n.name}}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieDemandList",
        props:["demandData"]
    }
</script>

<style scoped>
  .demandBox{
    padding: .14rem .17rem;
    background-color: white;
  }
  .title,.demandPic p{
    font-size: .17rem;
    color: #333333;
    font-weight: 700;
  }
  .demandList{
    display: flex;
    overflow: auto;
  }
  .demandList::-webkit-scrollbar{
    display: none;
  }
  .demandPic{
    width: 1.1rem;
    display: flex;
    flex-direction: column;
    margin-top: .16rem;
    margin-right: .16rem;
  }
  .demandPic img{
    width: 1.1rem;
    height: 1.53rem;
    border-radius: .02rem;
  }
  .demandPic p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: .07rem;
  }
</style>
