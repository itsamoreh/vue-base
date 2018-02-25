<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <h1>Components</h1>

    <div class="component-group">
      <h2>Buttons</h2>
      <s-button>Default Button</s-button>
      <s-button class="btn-primary">Primary Button</s-button>
      <s-button class="btn-link">Link Button</s-button>
      <s-code lang="html">&lt;s-button&gt;Default Button&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary&quot;&gt;Primary Button&lt;/s-button&gt;
&lt;s-button class=&quot;btn-link&quot;&gt;Link Button&lt;/s-button&gt;</s-code>
    </div>
    <div class="component-group">
      <h3>Button Colors</h3>
      <s-button class="btn-success">Success Button</s-button>
      <s-button class="btn-error">Error Button</s-button>
      <s-code lang="html">&lt;s-button class=&quot;btn-success&quot;&gt;Success Button&lt;/s-button&gt;
&lt;s-button class=&quot;btn-error&quot;&gt;Error Button&lt;/s-button&gt;</s-code>
    </div>
    <div class="component-group">
      <h2>Button Sizes</h2>
      <s-button class="btn-lg">Large</s-button>
      <s-button>Normal</s-button>
      <s-button class="btn-sm">Small</s-button>
      <s-button class="btn-primary btn-lg">Large</s-button>
      <s-button class="btn-primary">Normal</s-button>
      <s-button class="btn-primary btn-sm">Small</s-button>
      <s-code lang="html">&lt;s-button class=&quot;btn-lg&quot;&gt;Large&lt;/s-button&gt;
&lt;s-button&gt;Normal&lt;/s-button&gt;
&lt;s-button class=&quot;btn-sm&quot;&gt;Small&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary btn-lg&quot;&gt;Large&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary&quot;&gt;Normal&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary btn-sm&quot;&gt;Small&lt;/s-button&gt;</s-code>
    </div>
    <div class="component-group">
      <h3>Button Shapes</h3>
      <s-button class="btn-action"><feather-menu></feather-menu></s-button>
      <s-button class="btn-action circle"><feather-star></feather-star></s-button>
      <s-button class="btn-primary btn-action"><feather-menu></feather-menu></s-button>
      <s-button class="btn-primary btn-action circle"><feather-star></feather-star></s-button>
      <s-code lang="html">&lt;s-button class=&quot;btn-action&quot;&gt;&lt;feather-menu&gt;&lt;/feather-menu&gt;&lt;/s-button&gt;
&lt;s-button class=&quot;btn-action circle&quot;&gt;&lt;feather-star&gt;&lt;/feather-star&gt;&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary btn-action&quot;&gt;&lt;feather-menu&gt;&lt;/feather-menu&gt;&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary btn-action circle&quot;&gt;&lt;feather-star&gt;&lt;/feather-star&gt;&lt;/s-button&gt;</s-code>
    </div>
    <div class="component-group">
      <h3>Button States</h3>
      <s-button class="active">Active</s-button>
      <s-button class="disabled">Disabled</s-button>
      <s-button class="loading">Loading</s-button>
      <s-code lang="html">&lt;s-button class=&quot;active&quot;&gt;Active&lt;/s-button&gt;
&lt;s-button class=&quot;disabled&quot;&gt;Disabled&lt;/s-button&gt;
&lt;s-button class=&quot;loading&quot;&gt;Loading&lt;/s-button&gt;</s-code>
    </div>
    <div class="component-group">
      <h3>Button Groups</h3>
      <s-button-group>
        <s-button>First Button</s-button>
        <s-button>Second Button</s-button>
        <s-button>Third Button</s-button>
      </s-button-group>
      <s-code lang="html">&lt;s-button-group&gt;
    &lt;s-button&gt;First Button&lt;/s-button&gt;
    &lt;s-button&gt;Second Button&lt;/s-button&gt;
    &lt;s-button&gt;Third Button&lt;/s-button&gt;
&lt;/s-button-group&gt;</s-code>
    </div>

    <div class="component-group">
      <h3>Labels</h3>
      <s-label>Default Label</s-label>
      <s-label class="label-primary">Primary Label</s-label>
      <s-label class="label-secondary">Secondary Label</s-label>
      <s-label class="label-success label-rounded">Success Label</s-label>
      <s-label class="label-warning label-rounded">Warning Label</s-label>
      <s-label class="label-error label-rounded">Error Label</s-label>
      <s-code lang="html">&lt;s-label class=&quot;label-primary&quot;&gt;Primary Label&lt;/s-label&gt;
&lt;s-label class=&quot;label-secondary&quot;&gt;Secondary Label&lt;/s-label&gt;
&lt;s-label class=&quot;label-success label-rounded&quot;&gt;Success Label&lt;/s-label&gt;
&lt;s-label class=&quot;label-warning label-rounded&quot;&gt;Warning Label&lt;/s-label&gt;
&lt;s-label class=&quot;label-error label-rounded&quot;&gt;Error Label&lt;/s-label&gt;</s-code>
    </div>
    <!-- Component Group Template -->
    <div class="d-hide component-group">
      <h3>Title</h3>
      <!-- Component(s) Here -->
      <s-code lang="html"></s-code>
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
  margin-bottom: $unit-16;
}
</style>
