<template>
    <div class="exitPage">
      <header>
        <i class="iconfont icon-ico_leftarrow" @click="goBack"></i>
        <p class="shezhi">通用设置</p>
      </header>
      <dz-mine-section-list :DzMineData="DzMineData.hitList"></dz-mine-section-list>
      <dz-mine-section-list :DzMineData="DzMineData.hitList2"></dz-mine-section-list>
      <dz-mine-section-list :DzMineData="DzMineData.hitList3"></dz-mine-section-list>
      <dz-mine-section-list :DzMineData="DzMineData.hitList4"></dz-mine-section-list>
      <p class="exitLogin" @click="exits">退出登录</p>
    </div>
</template>

<script>
    import DzMineSectionList from "@/components/DzMine/DzMineSectionList";
    export default {
      name: "ExitPage",
      components: {DzMineSectionList},
      data() {
        return {
          username: '',
          DzMineData: {
            "hitList": [
              {"hitTxt": "个人资料", "text": ""},
              {"hitTxt": "账号与安全", "text": ""},
            ],
            "hitList2": [
              {"hitTxt": "消息与推送通知", "text": ""},
              {"hitTxt": "隐私", "text": ""},
              {"hitTxt": "通用", "text": ""}
            ],
            "hitList3": [
              {"hitTxt": "清楚缓存", "text": ""},
              {"hitTxt": "诊断网络", "text": ""},
            ],
            "hitList4": [
              {"hitTxt": "意见反馈", "text": "让我们更好"},
              {"hitTxt": "关于我们", "text": ""},
            ]
          }
        }
      },
      mounted() {
        console.log(this.$route.params)
        this.username = this.$route.params.username;
      },
      methods: {
        exit() {
          let flag = false;
          this.$store.commit('login', flag);
          this.$router.push("/DzMine");
          console.log("退出登录");
        },
        goBack() {
          this.$router.push("/DzMine")
        },
        exits() {
          if (this.username) {
            return
          } else {
            if (confirm("确认退出登录吗？")) {
              this.$router.push({name: "DzMine", params: {username: ""}})
              this.exit()
            } else {
              return
            }
          }
        }
      }
    }
</script>

<style scoped>

  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 0.5rem;
  }
  header .iconfont{
    margin-left: 0.2rem;
  }
  .shezhi {
    font-size: 0.18rem;
    margin-left: 1.2rem;
  }

  .exitLogin {
    text-align: center;
    font-size: 0.24rem;
    padding: 0.1rem 0;
    border-bottom: 0.01rem solid #eee;
    border-top: 0.01rem solid #eee;
  }

</style>
