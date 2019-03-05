<template>
    <div class="content">
      <bawangcan-content-nav :dinnerData="dinnerData"></bawangcan-content-nav>
      <bawangcan-content-section :detailsData="detailsData"></bawangcan-content-section>
      <bawangcan-content-vip :vipData="vipData"></bawangcan-content-vip>
    </div>
</template>

<script>
    import BawangcanContentNav from "./BawangcanContentNav";
    import BawangcanContentSection from "./BawangcanContentSection";
    import BawangcanContentVip from "./BawangcanContentVip";
    export default {
        name: "BawangcanContent",
      props:["dinnerData","detailsData","vipData"],
      components: {BawangcanContentVip, BawangcanContentSection, BawangcanContentNav}
    }
</script>

<style scoped>
.content{
  background:#f7f7f7;
}
</style>
