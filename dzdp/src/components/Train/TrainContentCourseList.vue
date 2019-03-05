<template>
  <div class="courseList">
    <train-content-course-list-main-course :lisData="lisData"></train-content-course-list-main-course>
    <train-content-course-list-main-course-details :detailsData="detailsData"></train-content-course-list-main-course-details>
  </div>
</template>

<script>
    import TrainContentCourseListMainCourse from "./TrainContentCourseListMainCourse";
    import TrainContentCourseListMainCourseDetails from "./TrainContentCourseListMainCourseDetails";
    export default {
        name: "TrainContentCourseList",
      props:["lisData","detailsData"],
      components: {TrainContentCourseListMainCourseDetails, TrainContentCourseListMainCourse}
    }
</script>

<style scoped>
  /*courseList*/
  .courseList{
    width:100%;
    background:#eeeeee;
  }


</style>
