<template>
  <div class="wrapper about_" :class="page">
    <TopNav />
    <section id="projects">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 page-header">
            <h2 class="pull-left">Projects</h2>
            <router-link to="/projects" class="pull-right view-all">View All</router-link>
          </div>
          <div
            class="col-sm-4"
            v-for="(projects,index) in projects"
            :key="projects.status + '_' + index"
          >
            <div animateIn="fadeInLeft" isVisible="{true}">
              <div class="mt-3 project-wrap">
                <div class="card shadow-lg">
                  <div class="ribbon ribbon-top-right orange">
                    <span class="orange">{{projects.status}}</span>
                  </div>
                  <img class="card-img-top py-5" :src="projects.thumbnail" />
                  <div class="card-body">
                    <h3 class="card-title">{{projects.title}}</h3>
                    <p class="card-text">{{projects.description}}</p>
                  </div>
                  <div class="card-footer text-right">
                    <a
                      class="Button-primary"
                      target="_blank"
                      :href="projects.url"
                    >
                      <span class="">
                        <span class="">
                          <span>
                            Visit Site
                          </span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import data from "../projects.json";
import TopNav from "../components/TopNav";
export default {
  name: "Projects",
  components: {
    TopNav,
  },
  props: ["page"], // must declare props this template accepts
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    getProjects() {
      if (this.page === "home") {
        // if we're on the home page, return 3, else return all
        data
          .filter((i, index) => index < 3)
          .forEach((element) => this.projects.push(element));
      } else {
        data.forEach((element) => this.projects.push(element));
      }
    },
  },
  created() {
    this.getProjects();
  },
};
</script>

<style>
</style>