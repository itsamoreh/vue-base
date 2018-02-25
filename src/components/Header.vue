<template>
  <header>
    <nav class="navbar container grid-xl">
      <section class="navbar-section">
        <router-link to="/">
          <span class="navbar-brand">vue-base</span>
        </router-link>
      </section>
      <section class="navbar-section">
        <router-link to="components">
          <s-button class="btn-link">Components</s-button>
        </router-link>
        <router-link to="icons">
          <s-button class="btn-link">Icons</s-button>
        </router-link>
        <router-link to="download">
          <s-button class="btn-primary btn-text-icon">
            <feather-github></feather-github>
            Github
          </s-button>
        </router-link>
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
@import '~vars-mixins';

// Navbar
.navbar {
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: $unit-16;
  height: $unit-16;

  .navbar-section {
    align-items: center;
    display: flex;
    flex: 1 0 0;

    &:not(:first-child):last-child {
      justify-content: flex-end;
    }
  }

  .navbar-brand {
    font-size: $font-size-lg;
    font-weight: 500;
    text-decoration: none;
  }
}

a {
  margin: 0 $layout-spacing;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>
