<template>
    <div id="popular">
      <div id="recom_header"><h3>人气推荐</h3><div><span>更多景点</span><img src="../../../static/PartThreeImg/recom_rjt.jpg"></div></div>
      <div id="recom_spot">
        <div class="spots" v-for="pd in PopularData.popularlist">
          <div class="spots_imgs">
            <img :src="pd.spotimgs">
            <div class="ranking" v-if="pd.tops"><span>TOP</span><span>{{pd.tops}}</span></div>
          </div>
          <div class="spots_info">
              <h3>{{pd.spotnames}}</h3>
              <div class="scores"><img :src="pd.xing" v-for="n in pd.scores"><span>{{pd.scores}}.0分</span></div>
              <p>{{pd.evaluate}}条评价</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "PopularRecom",
        props:["PopularData"]
    }
</script>

<style scoped>
#popular{
  display: -webkit-flex;
  flex-direction: column;
}
  #recom_header,#recom_header div,#recom_spot,.spots,.ranking,.scores{
    display: -webkit-flex;
  }
#recom_header,#recom_header div{
  align-items: center;
}
#recom_header{
  justify-content: space-between;
  padding:.14rem .15rem ;
  box-sizing: border-box;
}
#recom_header h3{
  font-size:.18rem ;
}
#recom_header span{
  font-size:.12rem ;
  margin-right: .05rem;
}
#recom_header img{
  width: .07rem;
  height: .11rem;
}
#recom_spot{
  margin-bottom: .18rem;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  padding-bottom: 0.1rem;
}
#recom_spot::-webkit-scrollbar{
  display: none;
}
  .spots{
    flex-direction: column;
    border-radius: .15rem;
    box-shadow: 1px 2px 2px 2px #d3d3d3;
    margin-left: .1rem;
  }
.spots_info{
  padding: .12rem 0 .12rem .1rem;
  box-sizing: border-box;
}
  .spots_imgs{
    position: relative;
  }
.spots_imgs img{
  width: 1.57rem;
  height: .87rem;
  border-top-left-radius: .15rem;
  border-top-right-radius: .15rem;
}
  .ranking{
    width: .3rem;
    flex-direction: column;
   background-color: #ff532f;
    border-bottom-right-radius: .05rem;
    border-top-left-radius: .15rem;
    position: absolute;
    left: 0;
    top: 0;
    align-items: center;
    justify-content: center;
  }
.ranking span{color: white;}
.ranking span:first-child{font-size:.07rem; }
 .ranking span:last-child{font-size: .12rem;}
.scores{
  align-items: center;
  margin: .08rem 0;
}
  .spots h3{
    font-size: .13rem;
  }
  .scores img{
   width: .11rem;
    height: .11rem;
  }
  .scores span{
    font-size: .1rem;
    color: #f98012;
    margin-left: .09rem;
  }
.spots p{
  font-size: .11rem;
}
</style>
