<template>
  <div class="wrapper single">
    <TopNav />
    <div class="lead">
      <img src="../assets/images/blog_lede.png" />
    </div>
    <div class="container">
      <div class="col-sm-12">
        <div class="well move-up boxshadow">
          <div class="card">
            <div class="card-body pt-5">
              <span
                class="category"
                v-for="(category,index) in post.data.categories"
                :key="index"
              >{{category.name}}</span>
              <h1 class="is-size-2 mt-0">{{ post.data.title }}</h1>
              <p class="author">By Paul Mackey on {{formatDate(post.data.published)}}</p>
              <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
              <div class="content" v-html="post.data.body"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { butter } from "../buttercms";
import TopNav from "../components/TopNav";
export default {
  name: "Post",
  components: {
    TopNav,
  },
  data() {
    return {
      post: {},
    };
  },
  methods: {
    getPost() {
      butter.post
        .retrieve(this.$route.params.slug)
        .then((res) => {
          // console.log(res.data)
          this.post = res.data;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    formatDate(date) {
      return new Date(date).toDateString();
    },
  },
  created() {
    this.getPost();
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style>
.butter-float-right {
  float: right;
}

.single .card-body {
  text-align: left;
}

pre {
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-left: 3px solid #f36d33;
  color: #666;
  page-break-inside: avoid;
  font-family: monospace;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 1.6em;
  max-width: 100%;
  overflow: auto;
  padding: 1em 1.5em;
  display: block;
  word-wrap: break-word;
}

strong {
  font-weight: 600;
}
</style>