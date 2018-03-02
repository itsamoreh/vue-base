<template>
  <div class="btn-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup',
  data() {
    return {
      msg: 'Button Group',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';

// Button groups
.btn-group {
  display: inline-flex;
  flex-wrap: wrap;

  .btn {
    flex: 1 0 auto;
    &:first-child:not(:last-child) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
    &:not(:first-child):not(:last-child) {
      border-radius: 0;
      margin-left: -$border-width;
    }
    &:last-child:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      margin-left: -$border-width;
    }
    &:focus,
    &:hover,
    &:active,
    &.active {
      z-index: $zindex-0;
    }
  }

  &.btn-group-block {
    display: flex;

    .btn {
      flex: 1 0 0;
    }
  }
}
</style>
