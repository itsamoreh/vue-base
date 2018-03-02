<template>
  <header>
    <nav class="navbar container grid-xl">
      <section class="navbar-section">
        <router-link to="/" class="navbar-brand">
          vue-base
        </router-link>
      </section>
      <section class="navbar-section navbar-mobile-menu">
        <s-button class="btn-primary btn-action"><feather-menu></feather-menu></s-button>
      </section>
      <section class="navbar-section hide-sm">
        <router-link to="base">
          <s-button class="btn-link">Base</s-button>
        </router-link>
        <router-link to="components">
          <s-button class="btn-link">Components</s-button>
        </router-link>
        <router-link to="forms">
          <s-button class="btn-link">Forms</s-button>
        </router-link>
        <router-link to="icons">
          <s-button class="btn-link">Icons</s-button>
        </router-link>
        <s-button class="btn-primary btn-text-icon navbar-btn-github">
          <a target="_blank" href="https://github.com/itsamoreh/vue-base">
            <feather-github></feather-github>
            Github
          </a>
        </s-button>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  data() {
    return {
      msg: 'Header Bar / Navbar Component',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';

.navbar-btn-github {
  margin-left: $control-padding-x;
}
</style>
