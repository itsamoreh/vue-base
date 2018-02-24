<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
// Scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';
// Scss file with base styles (aliased in webpack.base.conf.js)
@import '~base-styles';
</style>
