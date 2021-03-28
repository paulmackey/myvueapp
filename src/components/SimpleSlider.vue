<template>
  <div>
    <div class="hero-wrap slick-slide">
      <img class="hero" src="../assets/images/bg-2.jpg" />

      <aside class>
        <h1 class="mt-3">Paul Mackey</h1>
        <h2>Software Engineer</h2>
        <h3>DevÉire</h3>

        <!-- <div class="social-icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/paul-mackey-25543098/"
          >
            <i class="fa fa-linkedin" />
          </a>
        </div> -->

        <!-- <p class="text-emoji">\ (•◡•) /</p> -->

        <!-- <router-link to="/about">
          <img src="../assets/images/user.png" /> About Me
        </router-link>

        <router-link to="/projects">
          <img src="../assets/images/folder.png" /> Projects
        </router-link>

        <router-link to="/blog">
          <img src="../assets/images/blog.png" /> Blog
        </router-link> -->
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleSlider",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  width: 100%;
  object-fit: cover;
  max-width: none;
  min-height: 400px;
}
.hero-wrap {
  position: relative;
}
aside h1,
aside h2,
aside h3,
aside p {
  color: #fff;
}

aside h1,
aside h2 {
  margin: 2rem 0;
  font-weight: normal;
}

aside {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.slick-slide aside img {
  display: inline-block;
  margin: 0 5px 0 20px;
}

.slick-slide aside a {
  color: #fff;
  text-decoration: none;
}

.home .slick-slider p {
  font-size: 1.375rem;
  margin: 1.5rem 0;
  font-weight: 300;
}

.text-emoji {
  font-size: 1.5rem;
  font-weight: 300;
}

.social-icons {
  padding: 0.25rem 0;
  font-size: 3rem;
  margin-bottom: 2rem;
}

.social-icons a {
  padding: 0 0.625rem;
}

</style>