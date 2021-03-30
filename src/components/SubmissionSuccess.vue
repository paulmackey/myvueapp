<template>
  <div class="container success-page">
    <div class="row flex">
      <div class="col-sm-12">
        <h2>You're Awesome! Thank you for your submission!</h2>
        <router-link to="/">
          <span>Back to Home</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SubmissionSuccess",
};
</script>

<style scoped>
.success-page {
  padding: 60px 0;
}
</style>