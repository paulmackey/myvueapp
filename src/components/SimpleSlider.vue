<template>
  <div>
        <div class="hero-wrap">
          <img class="hero" src="../assets/images/bg-2.jpg" />

          <aside>
              <h1 class="mt-3">Paul Mackey</h1>
              <p>Software Engineer</p>
              <p>DevÉire</p>
              <p class=""></p>

              <div class="social-icons">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/paul-mackey-25543098/"
                >
                  <i class="fa fa-linkedin" />
                </a>

              </div>

              <p class="text-emoji">\ (•◡•) /</p>

             <router-link to="/about">
                <img src={aboutIcon} /> About Me
            </router-link>

             <router-link to="/about">
                <img src={aboutIcon} /> About Me
            </router-link>

             <router-link to="/about">
                <img src={aboutIcon} /> About Me
            </router-link>
          </aside>
        </div>
  </div>
</template>

<script>
 export default {
  name: 'SimpleSlider'
 }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>