<template>
  <div>
    <h1>Hello World!</h1>
  </div>
</template>

<script>
export default {
  name: 'OnoGame',
  data() {
    return {
      msg: 'Hello World!',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';
</style>
