<template>
  <div class="card">
    <div v-if="$slots['img']" class="card-image">
      <slot name="img" class="img-responsive"></slot>
    </div>
    <div v-if="$slots['title'] || $slots['subtitle']" class="card-header">
      <div v-if="$slots['title']" class="card-title h5">
        <slot name="title"></slot>
      </div>
      <div v-if="$slots['subtitle']" class="card-subtitle text-gray">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <div v-if="$slots['body']" class="card-body">
      <slot name="body"></slot>
    </div>
    <div v-if="$slots['cta']" class="card-footer">
      <s-button class="btn-block btn-primary"><slot name="cta">Call To Action</slot></s-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      msg: 'Card Component',
      imgSrc: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';

.card-image {
  height: 250px;

  img {
    height: 100%;
  }
}
</style>
