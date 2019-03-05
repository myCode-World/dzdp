<template>
    <div class="cinema">
      <ul class="cinemaList">
        <li>
          <p>品牌</p>
          <span></span>
        </li>
        <li>
          <p>全城</p>
          <span></span>
        </li>
        <li>
          <p>距离近</p>
          <span></span>
        </li>
        <li>
          <p>筛选</p>
          <span></span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "IndexMovieCinemaList"
    }
</script>

<style scoped>
  .cinema{
    margin-top: .11rem;
    background-color: white;
  }
  .cinemaList{
    display: flex;
    justify-content: space-around;
    padding: .09rem 0;
    border-bottom: 1px solid #eee;
  }
  .cinemaList li{
    font-size: .12rem;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #f3f3f3;
  }
  .cinemaList li:last-child{
    border-right: 0;
  }
  .cinemaList li span{
    width: 0;
    height: 0;
    border:.04rem solid transparent;
    border-top-color: #c8c8c8;
    margin: 0 .09rem;
  }
</style>
