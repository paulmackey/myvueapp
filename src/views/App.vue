<template>
  <div class="app">
    <Nav />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Nav from "../components/Nav";
import Footer from "../components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style lang="less">
@import "../assets/styles/buttons.css";

/** GENERAL **/
body {
  font-size: 16px;
  overflow-x: hidden;
  font-family: "Roboto", sans-serif;
  background: #f6f6f6;
  margin: 0;
  --blue: #1e88e5;
  --boxShadow: rgba(0, 0, 0, 0.1) 0px 20px 30px 0px;
}

img {
  max-width: 100%;
  height: auto;
}

p {
  font-size: 16px;
}
.butter-float-right {
  float: right;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: "Lato", sans-serif;
  font-weight: 600;
}

h2,
h3 {
  font-weight: 500;
}

h1,
h2 {
  /* font-family: Reem Kufi, sans-serif; */
  /* font-size: 3rem; */
  font-weight: 700;
  line-height: 3rem;
  margin-top: 150px;
}

strong {
  font-weight: 600;
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

.flex {
  display: flex;
  align-items: center;
}

/** Home page **/

.home {
  h2 {
    margin-top: 30px;
    font-size: 3rem;
    display: inline-block;
  }
}

.project-page.view-all,
.blog-page.view-all,
.blog-page .footer {
  display: none;
}

.view-all {
  font-size: 20px;
  margin-top: 30px;
}

.header_scroll {
  padding-top: 60px;
}

.scroll-down {
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

.icon {
  display: inline-block;
}

.hero {
  width: 100%;
  object-fit: cover;
  max-width: none;
  min-height: 500px;
}

aside h1,
aside h2,
aside h3,
aside p {
  color: #fff;
}

aside {
  position: absolute;
  top: 110px;
  margin: auto;
  text-align: center;
  width: 100%;
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
}

.social-icons a {
  padding: 0 0.625rem;
}

#blog,
#projects {
  padding: 15px 0 60px 0;
}

.home #blog,
.home #projects {
  padding: 40px 0 85px 0;
}

.home #blog {
  background: url("../assets/images/blog-bg.jpg") no-repeat center fixed;
  background-size: auto auto;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  min-height: 390px;
}

.home #blog h2 {
  color: #fff;
}

.home #blog .view-all {
  color: #fff;
}

.wrapper {
  font-weight: 300;
  font-size: 16px;
  margin-left: auto;
  /* margin-bottom: 40px; */
  -webkit-transition: top 4s ease;
  transition: top 4s ease;
  /* padding: 0 100; */
  color: #000;
}

.wrapper.single,
.wrapper.about {
  margin-bottom: 100px;
}

/** SINGLE POST **/
.single .card-body {
  text-align: left;
}

/** CONTACT FORM **/
form {
  padding: 30px;
}

textarea {
  border-radius: 0 !important;
}
input[type="text"],
input[type="email"] {
  height: 40px;
  border-radius: 0;
}

.mailme a {
  color: #000;
  text-decoration: none;
}
.mailme i {
  margin-right: 7px;
}

/** ABOUT **/

.mainDetails {
  padding: 25px 35px;
  border-bottom: 2px solid var(--blue);
}

#mainArea {
  padding: 0 40px;
  section {
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
  }

  section:last-child {
    border-bottom: 0;
  }

  article {
    padding-bottom: 20px;
  }
}

.sectionTitle h3,
.sectionContent h4 {
  font-size: 24px;
}

/** HEADER **/
.logo {
  border: 0.5rem solid rgba(255, 255, 255, 0.2);
  max-height: 10rem;
}

header {
  display: block;
  /* background:rgba(0,0,0,0.5); */
  width: 100%;
  padding: 30px 0;
  overflow: auto;
  color: #fff;
}

.home .top {
  display: none;
}

.lead img {
  max-height: 440px;
  width: 100%;
  object-fit: cover;
  object-position: bottom;
}

.move-up {
  margin-top: -100px;
}

.category {
  text-transform: uppercase;
  font-weight: bold;
  color: #e08127;
}
.boxshadow {
  box-shadow: var(--boxShadow);
}

.top {
  background: var(--blue);
  background: url("../assets/images/banner_bg.jpg");
  box-shadow: 6px 6px 13px 0px rgba(0, 0, 0, 0.19);
  width: 100%;
  z-index: 9899;
  font-size: 3em;
  position: fixed;
}

/** NAV **/

/* Position and sizing of burger button */

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

.bm-burger-button {
  /* position: fixed; */
  position: fixed;
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */

.bm-burger-bars {
  /* background: #373a47; */
  background: #fff !important;
}

/* Position and sizing of clickable cross button */

.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */

.bm-cross {
  background: #bdc3c7;
}

/* General sidebar styles */

/* Morph shape necessary with bubble or elastic */

.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */

.bm-item-list {
  color: #b8b7ad;
  padding: 0.8em;
}

/* Individual item */

.bm-item {
  display: inline-block;
}

/* Styling of overlay */

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

#headerButtons {
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.bm-item-list #headerButtons li:not(:first-child) {
  text-align: left;
}

.bm-item-list #headerButtons li:not(:first-child) img {
  margin-right: 15px;
}

.navButton a {
  color: #fff;
  padding: 10px;
}

/** SIDEBAR **/

.sidenav a {
  font-size: 18px;
  color: #fff;
  text-decoration: none;
  display: block;
  &:hover {
    color: #f1f1f1;
  }
}

/** MAIN **/

.main {
  /* margin-left: 25%; /* Same as the width of the sidenav */
  font-size: 28px;
  /* Increased text to enable scrolling */
  padding: 0px 10px;
  overflow: hidden;
}

/** FOOTER **/

.footer-wrap {
  position: relative;
}

footer {
  color: #fff;
  background-color: rgb(51, 76, 106);
  height: 70px;
  position: absolute;
  bottom: -70px;
  width: 100%;
}

footer i.fa {
  margin-left: 10px;
  color: #fff;
}

.footer {
  display: none;
}

.blog-page .footer {
  display: block;
}

.butter-icon {
  width: 100%;
  max-width: 200px;
  height: auto;
}

.footer {
  font-size: 17px;
}

/** Projects **/

.author {
  font-size: 14px;
  font-style: italic;
  margin-bottom: 15px;
}

.project-wrap .card {
  min-height: 350px;
  background: #fff;
  /* padding: 15px; */
  box-shadow: 6px 7px 9px 0 rgba(0, 0, 0, 0.15) !important;
  border-top: 4px solid var(--blue);
}

.btn-info {
  background-color: #0889cb !important;
  border-color: #0889cb !important;
  padding: 8px 60px 8px 8px;
  position: relative;
}

.btn.btn-info span:after {
  content: "";
  height: 2px;
  display: inline-block;
  position: absolute;
  left: 0;
  width: 30px;
  top: 50%;
  background: #fff;
  transition: all;
}

.card-title {
  margin-top: 0px;
  font-weight: 700;
}

.card-body {
  min-height: 200px;
  text-align: center;
}

.card-title a {
  color: #000;
  text-decoration: none !important;
}

.card-img-top {
  width: auto;
  height: 170px;
  object-fit: contain;
  padding: 0 15px;
}

.img-part {
  border-radius: 5px;
  margin: 0px;
  border: 1px solid #dddddd;
  padding: 5px;
  background: #fff;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* ================ Ribbons ======================= */

/* common */

.ribbon {
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  &.orange::before,
  &.orange::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid #bd610b !important;
  }

  &.purple::before,
  &.purple::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    border: 5px solid purple !important;
  }

  span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: #3498db;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 "Lato", sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
  }

  span.purple {
    background-color: #aa3191;
  }

  span.orange {
    background-color: #e08127;
  }
}

/* top right*/
.ribbon-top-right {
  top: -10px;
  right: -10px;
  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }

  span {
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
  }
}

.home section {
  position: relative;
  padding: 10em 10%;
  background: #fff;
  text-align: center;
}

section::before,
section::after {
  position: absolute;
  content: "";
  pointer-events: none;
}

/* ================ MEDIA QUERY - SIZE = 1024 ======================= */

@media screen and (min-width: 1024px) and (max-width: 1024px) {
}

/* ================ MEDIA QUERY - MAX 980 ======================= */

@media screen and (max-width: 980px) {
}

/* ================ MEDIA QUERY - MAX 800 ======================= */

@media screen and (max-width: 800px) {
}

/* ================ MEDIA QUERY - MAX 768 ======================= */

@media screen and (min-width: 768px) and (max-width: 800px) {
}

/* ================ MEDIA QUERY - MAX 640 ======================= */

@media screen and (max-width: 640px) {
}

/* ================ MEDIA QUERY - MAX 600 ======================= */

@media screen and (max-width: 600px) {
}

/* ================ MEDIA QUERY - MAX 480 ======================= */

@media screen and (max-width: 480px) {
  h1 {
    font-size: 3rem;
  }
}

/* ================ MEDIA QUERY - MAX 360 ======================= */

@media screen and (max-width: 360px) {
}

/* ================ MEDIA QUERY - MAX 320 ======================= */

@media screen and (max-width: 320px) {
}
</style>