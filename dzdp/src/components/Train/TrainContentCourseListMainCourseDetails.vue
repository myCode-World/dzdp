<template>
  <div class="mainCourseDetails">
    <ul class="mainCourseDetailsUls">
      <li v-for="n in showData">
        <div class="leftBox" v-for="k in n.leftBox">
          <img :src="k.pic1" alt="">
          <img :src="k.pic2" alt="">
        </div>
        <div class="rightBox" v-for="i in n.rightBox">
          <p class="title">{{i.title}}</p>
          <img :src="i.pic1" alt="">
          <p class="address">
            <span>{{i.address1}}</span>
            <span>{{i.address2}}</span>
            <img :src="i.pic2" alt="">
            <span>{{i.address3}}</span>
          </p>
          <p class="videoDisplay">
            <img :src="i.pic3" alt="">
            <span>{{i.videoDisplay}}</span>
          </p>
          <p class="ding">
            <img :src="i.pic4" alt="">
            <span>{{i.ding}}</span>
          </p>
          <p class="tuan">
            <img :src="i.pic5" alt="">
            <span>{{i.tuan}}</span>
          </p>
        </div>
      </li>
      <p class="more" @click="showMore" v-if="flag===1">查看更多</p>
      <p class="more" @click="showMore" v-if="flag===0">收起</p>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "TrainContentCourseListMainCourseDetails",
        props:["detailsData"],
        data(){
          return {
            showData:"",
            flag:0,
          }
        },
      mounted(){
          this.showMore()
      },
        methods:{
          showMore(){
            if(this.flag===0){
              // console.log(111)
              this.showData=this.detailsData.slice(0,2);
              this.flag=1;
            }else{
              this.showData=this.detailsData;
              this.flag=0;
            }
          }
        }
    }
</script>

<style scoped>
  /*mainCourseDetails*/
  .mainCourseDetailsUls li{
    display: flex;
    margin-bottom:.05rem;
    background:white;
  }
  .leftBox{
    width:.79rem;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .leftBox img:first-child{
    width:.69rem;
    height:.69rem;
    margin-top:.11rem;
    margin-bottom:.42rem;
    text-align:right;
  }
  .leftBox img:last-child{
    width:.41rem;
    height:.145rem;
  }
  .rightBox{
    font-size:.11rem;
    color:#838383;
    margin-left:.1rem;
  }
  .title{
    font-size:.15rem;
    margin-top:.12rem;
    margin-bottom:.07rem;
  }
  .rightBox img{
    width:.69rem;
    height:.14rem;
  }
  .address{
    display: flex;
    margin-top:.08rem;
    margin-bottom:.08rem;
  }
  .address span:first-child{
    margin-right:10px;
  }
  .address img{
    width:.48rem;
    height:.17rem;
    margin-left:10px;
    margin-right:.8rem;
  }
  .videoDisplay{
    display: flex;
    padding-bottom:.1rem;
    border-bottom:1px solid #eaeaea;
  }
  .videoDisplay img{
    width:.13rem;
    height:.11rem;
    margin-top: .02rem;
    margin-right:.04rem;
  }
  .ding{
    display: flex;
    margin-top:.08rem;
    margin-bottom:.05rem;
  }
  .ding img{
    width:.2rem;
    height:.2rem;
    margin-right:.1rem;
  }
  .tuan{
    display: flex;
    margin-bottom:.1rem;
  }
  .tuan img{
    width:.2rem;
    height:.2rem;
    margin-right:.1rem;
  }
  .more{
    width:100%;
    height:.47rem;
    line-height:.47rem;
    text-align: center;
    font-size:.13rem;
    color:#030303;
    background:white;

  }
</style>
