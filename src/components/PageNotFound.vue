<template>
  <div class="container page-not-found">
    <div class="row flex">
      <div class="col-sm-12">
        <h2>Oops! The page you’re looking for can’t be found</h2>
        <router-link to="/">
          <span>Return to Home</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",
};
</script>

<style scoped>
.page-not-found {
  padding: 60px 0;
}
</style>