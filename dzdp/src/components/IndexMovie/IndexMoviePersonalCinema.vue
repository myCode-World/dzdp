<template>
    <div class="personalCinema">
      <p class="title">点播影院</p>
      <ul class="personalBox">
        <li class="box" v-for="n in demandData.personal">
          <img :src="n.jpg"/>
          <ul class="list">
            <li>{{n.name}}</li>
            <li>{{n.add}}</li>
            <li><p>￥{{n.price}}<span>起</span></p><a>{{n.far}}</a></li>
          </ul>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "IndexMoviePersonalCinema",
        props:["demandData"]
    }
</script>

<style scoped>
  .personalCinema{
    background-color: white;
    display: flex;
    flex-direction: column;
  }
  .title{
    font-size: .15rem;
    color: #272727;
    font-weight: 700;
    line-height: .52rem;
    border-bottom: 1px solid #ececec;
    margin-left: .17rem;
  }
  .personalBox{
    display: flex;
    flex-direction: column;
    margin-left: .17rem;
    line-height: .26rem;
  }
  .box{
    display: flex;
    padding: .14rem 0;
    border-bottom: 1px solid #ebebeb;
  }
  .personalBox img{
    width: .83rem;
    height: .75rem;
    border-radius: .02rem;
    margin-right: .14rem;
  }
  .list{
    display: flex;
    flex-direction: column;
    width: 2.44rem;
  }
  .list li:first-child{
    font-size: .18rem;
    color: #181818;
    font-weight: 700;
  }
  .list li:nth-child(2){
    font-size: .15rem;
    color:#7c7c7c;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .list li:nth-child(3){
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list li:nth-child(3) p{
    font-size: .14rem;
    color: #ff5621;
  }
  .list li:nth-child(3) p span{
    font-size: .13rem;
  }
  .list li:nth-child(3) a{
    font-size: .12rem;
    color:#898989
  }
</style>
