<template>
  <div class="app">
    <SimpleSlider />
    <Projects page="home" />
    <ContactForm />
    <Posts page="home" />
  </div>
</template>

<script>
import SimpleSlider from "../components/SimpleSlider";
import ContactForm from "../components/ContactForm";
import Posts from "../components/Posts";
import Projects from "../components/Projects";
export default {
  name: "Home",
  components: {
    SimpleSlider,
    ContactForm,
    Posts,
    Projects,
  },
};
</script>

<style scoped></style>