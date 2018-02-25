<template>
  <div class="container grid-xl">
    <h1>Page Header</h1>
  </div>
</template>

<script>
export default {
  name: 'NewPage',
  data() {
    return {
      msg: 'New Page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';
</style>
