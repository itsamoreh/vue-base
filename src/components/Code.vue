<template>
  <pre class="code">
    <code><slot></slot></code>
  </pre>
</template>

<script>
export default {
  name: 'Code',
  data() {
    return {
      msg: 'Code Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';
</style>
