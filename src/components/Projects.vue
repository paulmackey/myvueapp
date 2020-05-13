<template>
<div class="wrapper about_">
   <section id="projects">
      <div class="container">
         <div class="row">
            <div class="col-sm-12">
               <h2 class="pull-left">Projects</h2>
               <a class='pull-right view-all ' href="/projects">View All</a>
            </div>
            <div class="col-sm-4" v-for="items in data" :key="items.status">
               <div animateIn="fadeInLeft" isVisible={true}>
                  <div class="mt-3 project-wrap">
                     <div class="card shadow-lg">
                        <div class='ribbon ribbon-top-right orange'>
                           <span class='orange'>{data.status}</span>
                        </div>
                        <img class="card-img-top py-5" src={data.thumbnail}>
                        <div class="card-body">
                           <h3 class="card-title">{data.title}</h3>
                           <p class="card-text">{data.description}</p>
                        </div>
                        <div class="card-footer text-right">
                           visit
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
 import data from '../projects.json'
 export default {
  name: 'Projects',
    data() {
      return {
            data: {
      items: []
            }
      }
    },
    methods: {
      getPost() {
         data.forEach(element => this.data.items.push(element));
      }
    },
    created() {
      this.getPost()
    }
 }
</script>

<style>

</style>