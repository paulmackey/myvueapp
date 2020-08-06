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
import { Slide } from 'vue-burger-menu'  // import the CSS transitions you wish to use, in this case we are using `Slide`
export default {
    components: {
        Slide // Register your component
    }
}
</script>

<style scoped>

</style>