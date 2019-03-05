<template>
  <div class="content">
    <comment-header :bannerData="bannerData"></comment-header>
    <comment-content-section :commentData="commentData"></comment-content-section>
    <comment-content-nav :navData="navData"></comment-content-nav>
  </div>
</template>

<script>
    import CommentContentSection from "./CommentContentSection";
    import CommentContentNav from "./CommentContentNav";
    import CommentHeader from "./CommentHeader";
    export default {
        name: "CommentContent",
      props:["bannerData","commentData","navData"],
      components: {CommentHeader, CommentContentNav, CommentContentSection}
    }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow: auto;
  }
</style>
