<template>
<div class="top">
   <div class="container">
      <div class="row">
         <div class="col-sm-12">
            <nav class="top-nav">
               <ul id="headerButtons">
                  <li class="navButton">
                    <router-link to="/">
                        <img src='../assets/images/home.png' />
                     </router-link>
                  </li>
                  <li class="navButton">
                     <router-link to="/about">
                         <img src='../assets/images/user.png' /> 
                     </router-link>
                  </li>
                  <li class="navButton">
                      <router-link to="/projects">
                       <img src='../assets/images/folder.png' />
                     </router-link>
                  </li>
                  <li class="navButton">
                     <router-link to="/blog">
                        <img src='../assets/images/blog.png' />
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
  name: 'TopNav'
 }
</script>

<style>

</style>