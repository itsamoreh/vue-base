<template>
  <div class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      msg: 'Button Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';
</style>
