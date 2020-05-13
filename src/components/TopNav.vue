<template>
<div class="top">
   <div class="container">
      <div class="row">
         <div class="col-sm-12">
            <nav class="top-nav">
               <ul id="headerButtons">
                  <li class="navButton">
                     <NavLink exact activeclass="selected" to="/">
                        <img src={homeIcon} />
                     </NavLink>
                  </li>
                  <li class="navButton">
                     <NavLink activeclass="selected" to="/about">
                        <img src={aboutIcon} />
                     </NavLink>
                  </li>
                  <li class="navButton">
                     <NavLink activeclass="selected" to="/projects">
                        <img src={projects} />
                     </NavLink>
                  </li>
                  <li class="navButton">
                     <NavLink activeclass="selected" to="/blog">
                        <img src={blogIcon} />
                     </NavLink>
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