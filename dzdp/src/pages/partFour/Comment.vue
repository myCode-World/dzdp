<template>
    <div class="comment">
      <comment-content :bannerData="banner.bannerData" :commentData="banner.commentData" :navData="banner.navData"></comment-content>
      <comment-footer></comment-footer>
    </div>
</template>

<script>
    import banner from "../../data/comment"
    import CommentContent from "../../components/Comment/CommentContent";
    import CommentFooter from "../../components/Comment/CommentFooter";
    export default {
        name: "Comment",
      data(){
        return {
          banner
        }
      },
      components: {CommentFooter, CommentContent}
    }
</script>

<style scoped>
.comment{
  background:#f7f7f7;
}
  .comment{
    display: flex;
    height:100%;
    flex-direction: column;
  }
</style>
