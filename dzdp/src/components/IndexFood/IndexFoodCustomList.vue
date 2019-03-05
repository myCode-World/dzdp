<template>
    <div class="shopList">
      <ul class="shopClass">
        <li>
          <a>附近</a>
          <span></span>
        </li>
        <li>
          <a>美食</a>
          <span></span>
        </li>
        <li>
          <a>智能排序</a>
          <span></span>
        </li>
        <li>
          <a>筛选</a>
          <span></span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "IndexFoodCustomList"
    }
</script>

<style scoped>
  .shopList{
    background-color: white;
    margin-top: .09rem;
  }
  .shopClass{
    display: flex;
    justify-content: space-around;
    padding: .13rem 0;
    border-bottom: 1px solid #e7e7e7;
  }
  .shopClass li{
    width: 25%;
    border-right: 1px solid #e8e8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .shopClass li:last-child{
    border-right: 0;
  }
  .shopClass li a{
    font-size: .13rem;
    margin-right: .05rem;
  }
  .shopClass li span{
    width: 0;
    height: 0;
    border: .05rem solid transparent;
    border-top-color: #b5b5b5;
  }
</style>
