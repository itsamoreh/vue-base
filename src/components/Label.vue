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
@import '~vars-mixins';

// Labels
.label {
  @include label-base();
  @include label-variant(lighten($body-font-color, 5%), $bg-color-dark);
  display: inline-block;
  padding-left: $control-padding-x;
  padding-right: $control-padding-x;

  // Label rounded
  &.label-rounded {
    border-radius: 5rem;
  }

  // Label colors
  &.label-primary {
    @include label-variant($light-color, $primary-color);
  }

  &.label-secondary {
    @include label-variant($primary-color, $secondary-color);
  }

  &.label-success {
    @include label-variant($light-color, $success-color);
  }

  &.label-warning {
    @include label-variant($light-color, $warning-color);
  }

  &.label-error {
    @include label-variant($light-color, $error-color);
  }
}
</style>
