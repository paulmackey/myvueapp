<template>
  <div class="app">
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped lang="less"></style>