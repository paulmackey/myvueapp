<template>
  <div class="top">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <nav class="top-nav">
            <ul id="headerButtons">
              <li class="navButton">
                <router-link to="/">
                  <img src="../assets/images/home.png" />
                </router-link>
              </li>
              <li class="navButton">
                <router-link to="/about">
                  <img src="../assets/images/user.png" />
                </router-link>
              </li>
              <li class="navButton">
                <router-link to="/projects">
                  <img src="../assets/images/folder.png" />
                </router-link>
              </li>
              <li class="navButton">
                <router-link to="/blog">
                  <img src="../assets/images/blog.png" />
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopNav",
};
</script>

<style lang="less">
.top {
  background: var(--blue);
  background: url("../assets/images/banner_bg.jpg");
  box-shadow: 6px 6px 13px 0px rgba(0, 0, 0, 0.19);
  width: 100%;
  z-index: 9899;
  font-size: 3em;
  position: fixed;
}

nav.top-nav li {
  display: inline;
}

.selected {
  background: var(--blue);
}

nav.top-nav li {
  float: left;
}

nav.top-nav a {
  display: block;
  margin: 0 10px;
}

nav.top-nav #headerButtons {
  float: right;
}
</style>