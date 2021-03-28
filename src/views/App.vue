<template>
  <div class="app">
    <TopNav />
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
    TopNav
  },
};
</script>

<style scoped lang="less"></style>