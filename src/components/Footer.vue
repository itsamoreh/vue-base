<template>
  <footer>
    <div class="container grid-xl text-center">
      <div>Made with <feather-heart class="heart"></feather-heart> by <a href="https://amorkumar.com">Amor Kumar</a></div>
      <div>Licensed under the <a href="https://github.com/itsamoreh/vue-base/blob/master/LICENSE">MIT License</a></div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: 'Footer Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';

footer > .container {
  margin-top: $unit-16;
  margin-bottom: $layout-spacing-lg;
}

.heart {
  margin-bottom: -1px;
  height: .75rem;
  width: .75rem;
  fill: $primary-color;
  stroke: $primary-color;
}
</style>
