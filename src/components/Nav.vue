<template>
 <Slide>
  <div class="sidenav">
     <ul id="headerButtons">
        <li class="navButton">
           <router-link to="/about">
              <img src='../assets/images/user.png' /> About Me
           </router-link>
        </li>
        <li class="navButton">
           <router-link to="/projects">
              <img src='../assets/images/folder.png' /> Projects
           </router-link>
        </li>
        <li class="navButton">
           <router-link to="/blog">
              <img src='../assets/images/blog.png' /> Blog
           </router-link>
        </li>
     </ul>
  </div>
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