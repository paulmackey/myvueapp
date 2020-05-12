<template>
  <div class="section" id="blog-post">
    <div class="container center">
      <hr>
      <h1 class="is-size-2">{{ post.data.title }}</h1>
      <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
      <div class="content" v-html="post.data.body"></div>
    </div>
  </div>
</template>

<script>
  import { butter } from '../buttercms'
  export default {
    name: 'Post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            // console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPost()
    }
  }
</script>