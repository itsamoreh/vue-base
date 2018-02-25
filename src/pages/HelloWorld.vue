<template>
  <div class="container grid-xl">
    <h1>Hello World!</h1>
    <p>This is a vue.js base project with <a href="https://picturepan2.github.io/spectre/components.html">spectre.css based components</a>.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';
</style>
