<template>
  <div id="app">
    <a-header></a-header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    'a-header': Header,
  },
};
</script>

<style lang="scss">
// Scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';
// Scss file with base styles (aliased in webpack.base.conf.js)
@import '~base-styles';
</style>
