<template>
  <div class="container">
    <div class="row flex">
      <div class="col-sm-6">
        <h2 class="text-center">Get in touch</h2>
        <h6 class="text-center my-4">Project suggestions, feedback or just to say hello...</h6>
        <p class="text-center mailme">
          <a href="pmackey@deveire.com">
            <i class="fa fa-envelope text-dark"></i>pmackey@deveire.com
          </a>
        </p>
        <div class="social-icons text-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/paul-mackey-25543098/"
          >
            <i class="fa fa-linkedin text-dark" />
          </a>
        </div>
      </div>
      <div class="col-sm-6">
        <form
          action="/page/success"
          class="form-horizontal"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p class="hidden" hidden>
            <label>
              Don’t fill this out if you're human:
              <input name="bot-field" />
            </label>
          </p>
          <div class="form-group">
            <label>Your Name</label>
            <input class="form-control" type="text" name="name" required />
          </div>
          <div class="form-group">
            <label>Your Email</label>
            <input class="form-control" type="email" name="email" required />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control" name="message" required></textarea>
          </div>
          <div class="form-group">
            <button class="Button-primary" role="button">
              <span class="">
                <span class="">
                  <span>Send</span>
                </span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
};
</script>

<style lang="less">
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
</style>