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
          <s-button v-on:click.native="toggle()" class="btn-primary">Agree</s-button>
          <s-button v-on:click.native="toggle()">Cancel</s-button>
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
@import '~vars-mixins';

// Modals
.modal {
  align-items: center;
  bottom: 0;
  display: none;
  justify-content: center;
  left: 0;
  opacity: 0;
  overflow: hidden;
  padding: $layout-spacing;
  position: fixed;
  right: 0;
  top: 0;

  &:target,
  &.active {
    display: flex;
    opacity: 1;
    z-index: $zindex-4;

    .modal-overlay {
      background: rgba($bg-color, .75);
      bottom: 0;
      cursor: default;
      display: block;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }

    .modal-container {
      animation: slide-down .2s ease 1;
      max-width: $control-width-md;
      width: 100%;
      z-index: $zindex-0;
    }
  }

  &.modal-sm {
    .modal-container {
      max-width: $control-width-sm;
      padding: 0 $unit-2;
    }
  }

  &.modal-lg {
    .modal-overlay {
      background: $bg-color-light;
    }

    .modal-container {
      box-shadow: none;
      max-width: $control-width-lg;
    }
  }
}

.modal-container {
  @include shadow-variant(.2rem);
  background: $bg-color-light;
  border-radius: $border-radius;
  display: block;
  padding: 0 $unit-4;

  .modal-header {
    padding: $unit-4;
  }

  .modal-body {
    max-height: 50vh;
    overflow-y: auto;
    padding: $unit-4;
    position: relative;
  }

  .modal-footer {
    padding: $unit-4;
    text-align: right;
  }
}
</style>
