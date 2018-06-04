<!--

Naked view level component.

Organize view level components in a logical folder structure e.g.:

/src/views/user/
  Profile.vue
  Dashboard.vue
  Settings.vue

-->

<template>
  <div class="container grid-xl">
    <h1>Page Header</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// File with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';
</style>
