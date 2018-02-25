<template>
  <div class="container grid-xl">
    <h1>Components</h1>

    <div class="component-group">
      <h2>Buttons</h2>
      <a-button>Default Button</a-button>
      <a-button class="btn-primary">Primary Button</a-button>
      <a-button class="btn-link">Link Button</a-button>
      <a-code lang="html">&lt;a-button&gt;Default Button&lt;/a-button&gt;
&lt;a-button class=&quot;btn-primary&quot;&gt;Primary Button&lt;/a-button&gt;
&lt;a-button class=&quot;btn-link&quot;&gt;Link Button&lt;/a-button&gt;</a-code>
    </div>
    <div class="component-group">
      <h3>Button Colors</h3>
      <a-button class="btn-success">Success Button</a-button>
      <a-button class="btn-error">Error Button</a-button>
      <!-- eslint-disable -->
      <a-code lang="html">&lt;a-button class=&quot;btn-success&quot;&gt;Success Button&lt;/a-button&gt;
&lt;a-button class=&quot;btn-error&quot;&gt;Error Button&lt;/a-button&gt;</a-code>
    </div>
    <div class="component-group">
      <h2>Button Sizes</h2>
      <a-button class="btn-lg">Large</a-button>
      <a-button>Normal</a-button>
      <a-button class="btn-sm">Small</a-button>
      <a-button class="btn-primary btn-lg">Large</a-button>
      <a-button class="btn-primary">Normal</a-button>
      <a-button class="btn-primary btn-sm">Small</a-button>
      <a-code lang="html">&lt;a-button class=&quot;btn-lg&quot;&gt;Large&lt;/a-button&gt;
&lt;a-button&gt;Normal&lt;/a-button&gt;
&lt;a-button class=&quot;btn-sm&quot;&gt;Small&lt;/a-button&gt;
&lt;a-button class=&quot;btn-primary btn-lg&quot;&gt;Large&lt;/a-button&gt;
&lt;a-button class=&quot;btn-primary&quot;&gt;Normal&lt;/a-button&gt;
&lt;a-button class=&quot;btn-primary btn-sm&quot;&gt;Small&lt;/a-button&gt;</a-code>
    </div>
    <div class="component-group">
      <h3>Button Shapes</h3>
      <a-button class="btn-action">A</a-button>
      <a-button class="btn-action circle">A</a-button>
      <a-code lang="html">&lt;a-button class=&quot;btn-action&quot;&gt;B&lt;/a-button&gt;
&lt;a-button class=&quot;btn-action circle&quot;&gt;B&lt;/a-button&gt;</a-code>
    </div>
    <div class="component-group">
      <h3>Button States</h3>
      <a-button class="active">Active</a-button>
      <a-button class="disabled">Disabled</a-button>
      <a-button class="loading">Loading</a-button>
      <a-code lang="html">&lt;a-button class=&quot;active&quot;&gt;Active&lt;/a-button&gt;
&lt;a-button class=&quot;disabled&quot;&gt;Disabled&lt;/a-button&gt;
&lt;a-button class=&quot;loading&quot;&gt;Loading&lt;/a-button&gt;</a-code>
    </div>
    <div class="component-group">
      <h3>Button Groups</h3>
      <a-button-group>
        <a-button>First Button</a-button>
        <a-button>Second Button</a-button>
        <a-button>Third Button</a-button>
      </a-button-group>
      <a-code lang="html">&lt;a-button-group&gt;
    &lt;a-button&gt;First Button&lt;/a-button&gt;
    &lt;a-button&gt;Second Button&lt;/a-button&gt;
    &lt;a-button&gt;Third Button&lt;/a-button&gt;
&lt;/a-button-group&gt;</a-code>
    </div>

    <div class="component-group">
      <h3>Labels</h3>
      <a-label>Default Label</a-label>
      <a-label class="label-primary">Primary Label</a-label>
      <a-label class="label-secondary">Secondary Label</a-label>
      <a-label class="label-success label-rounded">Success Label</a-label>
      <a-label class="label-warning label-rounded">Warning Label</a-label>
      <a-label class="label-error label-rounded">Error Label</a-label>
      <a-code lang="html">&lt;a-label class=&quot;label-primary&quot;&gt;Primary Label&lt;/a-label&gt;
&lt;a-label class=&quot;label-secondary&quot;&gt;Secondary Label&lt;/a-label&gt;
&lt;a-label class=&quot;label-success label-rounded&quot;&gt;Success Label&lt;/a-label&gt;
&lt;a-label class=&quot;label-warning label-rounded&quot;&gt;Warning Label&lt;/a-label&gt;
&lt;a-label class=&quot;label-error label-rounded&quot;&gt;Error Label&lt;/a-label&gt;</a-code>
    </div>
    <!-- Component Group Template -->
    <div class="d-hide component-group">
      <h3>Title</h3>
      <!-- Component(s) Here -->
      <a-code lang="html"></a-code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data() {
    return {
      msg: 'Components',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';

.component-group {
  margin-bottom: $layout-spacing;
}
</style>
