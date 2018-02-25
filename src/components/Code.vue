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
@import '~vars-mixins';

// Codes
code {
  @include label-base();
  @include label-variant($code-color, lighten($code-color, 33%));
  font-size: 85%;
}

.code {
  border-radius: $border-radius;
  color: $body-font-color;
  position: relative;

  &::before {
    color: $gray-color;
    content: attr(data-lang);
    font-size: $font-size-sm;
    position: absolute;
    right: $layout-spacing;
    top: $unit-h;
  }

  code {
    background: $bg-color;
    color: inherit;
    display: block;
    line-height: 1.5;
    overflow-x: auto;
    padding: 1rem;
    width: 100%;
  }
}
</style>
