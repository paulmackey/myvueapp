<template>
  <div id="blog-home" class="wrapper" :class="page">
    <TopNav />
    <section id="blog">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 page-header">
            <h2 class="pull-left">Posts</h2>
            <router-link to="/blog" class="pull-right view-all"
              >View All</router-link
            >
          </div>
          <!-- Create v-for and apply a key for Vue. Example is using a combination of the slug and index -->
          <div
            class="col-sm-6 col-md-4"
            v-for="(post, index) in posts"
            :key="post.slug + '_' + index"
          >
            <div class="mt-4 project-wrap">
              <div class="card shadow-lg">
                <div class="ribbon ribbon-top-right orange">
                  <span class="orange">
                    <a
                      v-for="(category, index) in post.categories"
                      :key="index"
                      >{{ category.name }}</a
                    >
                  </span>
                </div>
                <!-- Bind results using a ':' -->
                <!-- Use a v-if/else if their is a featured_image -->
                <img
                  class="card-img-top"
                  v-if="post.featured_image"
                  :src="post.featured_image"
                  alt
                />
                <img
                  class="card-img-top"
                  v-else
                  src="http://via.placeholder.com/250x250"
                  alt
                />
                <div class="card-body">
                  <h4 class="card-title is-5">
                    <router-link :to="'/blog/' + post.slug">{{
                      post.title
                    }}</router-link>
                  </h4>
                  <div class="author">
                    By Paul Mackey on {{ formatDate(post.published) }}
                  </div>
                  <p class="card-text">{{ post.summary }}</p>
                </div>
                <div class="card-footer text-right">
                  <router-link
                    class="Button-primary"
                    :to="'/blog/' + post.slug"
                  >
                    <span class="">
                      <span class="">
                        <span>
                          View
                          <span class="underline"></span>
                        </span>
                      </span>
                    </span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container buttercms-wrapper">
      <div class="row">
        <div clas="col-sm-12 text-right" style="margin-left: auto">
          <small>Blog posts are powered by</small>
          <a href="https://buttercms.com" target="_blank">
            <img class="butter-icon" src="../assets/images/butterCMSIcon.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.buttercms-wrapper {
  display: block;
  .home & {
    display: none;
    background: transparent;
  }
}

.butter-icon {
  width: 100%;
  max-width: 200px;
  height: auto;
}
</style>
<script>
// import ButterCMS from
import { butter } from "../buttercms";
import TopNav from "../components/TopNav";
export default {
  name: "Post",
  components: {
    TopNav,
  },
  props: ["page"], // must declare props this template accepts
  data() {
    return {
      page_title: "Blog",
      posts: [],
    };
  },
  methods: {
    getPosts() {
      butter.post
        .list({
          page: 1,
          page_size: this.getPageSize(),
        })
        .then((res) => {
          console.log(res.data);
          // TODO Something here with empty categories
          this.posts = res.data.data;
        });
    },
    formatDate(date) {
      return new Date(date).toDateString();
    },
    getPageSize() {
      if (this.page === "home") {
        return 3;
      } else {
        return 999;
      }
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.getPosts();
  },
};
</script>