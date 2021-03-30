<template>
  <div class="container fail-page">
    <div class="row flex">
      <div class="col-sm-12">
        <h1>Oops, looks like something went wrong!</h1>
        <router-link to="/">
          <span>Back to Form</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmissionFail",
};
</script>

<style scoped>
.fail-page {
  padding: 60px 0;
}
</style>