<template>
  <div id="app">
    <s-header></s-header>
    <router-view class="view-content" />
    <s-footer></s-footer>
  </div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    's-header': Header,
    's-footer': Footer,
  },
};
</script>

<style lang="scss">
// Scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';
// Scss file with base styles (aliased in webpack.base.conf.js)
@import '~base-styles';

// Make sure the footer is always at the bottom,
// even if page content is not enough to fill the viewport
.view-content {
  min-height: calc(100vh - #{$unit-16 * 2}); // Viewport height - (Header height + Header bottom)
}
</style>
