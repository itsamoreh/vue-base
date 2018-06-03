<template>
  <div id="app">
    <router-view class="view-content" />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss">
// File with vars-mixins and base styles (aliased in webpack.base.conf.js)
@import '~base';

.view-content {
  margin-top: $unit-16;
}
</style>
