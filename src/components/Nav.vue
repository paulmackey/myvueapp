<template>
  <Slide :closeOnNavigation="true">
    <router-link to="/about">
      <span>About</span>
    </router-link>
    <router-link to="/projects">
      <span>Projects</span>
    </router-link>
    <router-link to="/blog">
      <span>Blog</span>
    </router-link>
  </Slide>
</template>

<script>
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
  components: {
    Slide, // Register your component
  },
};
</script>

<style lang="less">
/* Position and sizing of burger button */

.bm-burger-button {
  /* position: fixed; */
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* Position and sizing of clickable cross button */

.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */

.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */

/* Morph shape necessary with bubble or elastic */

.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */

.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */

.bm-item {
  display: inline-block;
}

/* Styling of overlay */

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

#headerButtons {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.bm-item-list #headerButtons li:not(:first-child) {
  text-align: left;
}

.bm-item-list #headerButtons li:not(:first-child) img {
  margin-right: 15px;
}

.navButton a {
  color: #fff;
  padding: 10px;
}
</style>