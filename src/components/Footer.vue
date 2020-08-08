<template>
  <div class="footer-wrap">
    <footer class="flex">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 text-right">
            <a target="_blank" href="https://www.linkedin.com/in/paul-mackey-25543098/">
              <i class="fa fa-2x fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="less">
.footer {
  font-size: 17px;
}

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
</style>