<template>
  <div>
    <s-button v-on:click.native="toggle()" class="btn-text-icon">
      <feather-arrow-up-right></feather-arrow-up-right> Toggle Modal
    </s-button>
    <div
      class="modal" id="modal-id"
      v-bind:class="{ 'active': active }"
    >
      <a href="#close" class="modal-overlay" aria-label="Close"></a>
      <div class="modal-container">
        <div class="modal-header">
          <a href="#close" class="btn btn-clear float-right" aria-label="Close"></a>
          <div class="modal-title h5">Modal title</div>
        </div>
        <div class="modal-body">
          <div class="content">
            <!-- content here -->
            Modal body
          </div>
        </div>
        <div class="modal-footer">
          <s-button v-on:click.native="toggle()">Cancel</s-button>
          <s-button v-on:click.native="toggle()" class="btn-primary">Agree</s-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      msg: 'Modal Component',
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';
</style>
