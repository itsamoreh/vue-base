<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <section>
      <h1>Components</h1>
      <p><a href="https://picturepan2.github.io/spectre/getting-started.html">SpectreCSS based components</a>, component styles are scoped in each component at: <s-code>/src/components/*.vue</s-code></p>
    </section>

    <section>
      <h3>Card</h3>
      <div class="columns">
        <div class="column col-4 col-sm-12">
          <s-card>
            <!-- All available slots -->
            <img slot="img" src="../assets/img/424423-unsplash.jpg" alt="alt text">
            <span slot="title">Heading</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="body">Lorem ipsum dolor sit amet</span>
            <span slot="cta">Call To Action</span>
          </s-card>
        </div>
        <div class="column col-4 col-xs-12">
          <s-card>
            <!-- Include only needed slots -->
            <span slot="cta">Card Button</span>
          </s-card>
        </div>
      </div>
      <s-code lang="html">&lt;s-card&gt;
  &lt;img slot=&quot;img&quot; src=&quot;../assets/img/424423-unsplash.jpg&quot; alt=&quot;alt text&quot;&gt;
  &lt;span slot=&quot;title&quot;&gt;Heading&lt;/span&gt;
  &lt;span slot=&quot;subtitle&quot;&gt;Subtitle&lt;/span&gt;
  &lt;span slot=&quot;body&quot;&gt;Lorem ipsum dolor sit amet&lt;/span&gt;
  &lt;span slot=&quot;cta&quot;&gt;Call To Action&lt;/span&gt;
&lt;/s-card&gt;

&lt;s-card&gt;
  &lt;!-- Include only needed slots --&gt;
  &lt;span slot=&quot;cta&quot;&gt;Card Button&lt;/span&gt;
&lt;/s-card&gt;</s-code>
    </section>

    <!-- Component Group Template -->
    <section>
      <h3>Modals</h3>
      <!-- Component(s) Here -->
      <s-modal></s-modal>
      <s-code lang="html">SLOTS WIP</s-code>
    </section>

    <section>
      <h2>Buttons</h2>
      <s-button>Default Button</s-button>
      <s-button class="btn-primary">Primary Button</s-button>
      <s-button class="btn-link">Link Button</s-button>
      <s-code lang="html">&lt;s-button&gt;Default Button&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary&quot;&gt;Primary Button&lt;/s-button&gt;
&lt;s-button class=&quot;btn-link&quot;&gt;Link Button&lt;/s-button&gt;</s-code>
    </section>
    <section>
      <h3>Button Colors</h3>
      <s-button class="btn-success">Success Button</s-button>
      <s-button class="btn-error">Error Button</s-button>
      <s-code lang="html">&lt;s-button class=&quot;btn-success&quot;&gt;Success Button&lt;/s-button&gt;
&lt;s-button class=&quot;btn-error&quot;&gt;Error Button&lt;/s-button&gt;</s-code>
    </section>
    <section>
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
    </section>
    <section>
      <h3>Button Shapes</h3>
      <s-button class="btn-action"><feather-menu></feather-menu></s-button>
      <s-button class="btn-action circle"><feather-star></feather-star></s-button>
      <s-button class="btn-primary btn-action"><feather-menu></feather-menu></s-button>
      <s-button class="btn-primary btn-action circle"><feather-star></feather-star></s-button>
      <s-code lang="html">&lt;s-button class=&quot;btn-action&quot;&gt;&lt;feather-menu&gt;&lt;/feather-menu&gt;&lt;/s-button&gt;
&lt;s-button class=&quot;btn-action circle&quot;&gt;&lt;feather-star&gt;&lt;/feather-star&gt;&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary btn-action&quot;&gt;&lt;feather-menu&gt;&lt;/feather-menu&gt;&lt;/s-button&gt;
&lt;s-button class=&quot;btn-primary btn-action circle&quot;&gt;&lt;feather-star&gt;&lt;/feather-star&gt;&lt;/s-button&gt;</s-code>
    </section>
    <section>
      <h3>Button States</h3>
      <s-button class="active">Active</s-button>
      <s-button class="disabled">Disabled</s-button>
      <s-button class="loading">Loading</s-button>
      <s-code lang="html">&lt;s-button class=&quot;active&quot;&gt;Active&lt;/s-button&gt;
&lt;s-button class=&quot;disabled&quot;&gt;Disabled&lt;/s-button&gt;
&lt;s-button class=&quot;loading&quot;&gt;Loading&lt;/s-button&gt;</s-code>
    </section>
    <section>
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
    </section>

    <section>
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
    </section>
    
    <!-- Component Group Template -->
    <section class="d-hide">
      <h3>Title</h3>
      <!-- Component(s) Here -->
      <s-code lang="html"></s-code>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Components',
  data() {
    return {
      msg: 'Components Page',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';

section {
  margin-bottom: $unit-16;
}
</style>
