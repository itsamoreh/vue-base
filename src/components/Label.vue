<template>
  <span class="label">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Label',
  data() {
    return {
      msg: 'Label Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';
</style>
