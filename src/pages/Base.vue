<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <section>
      <h1>Base</h1>
      <p>Base Styles imported globally in: <s-code>/src/assets/scss/base-styles/</s-code></p>
    </section>

    <section>
      <h2>Colors</h2>
      <div class="columns">
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-primary text-light">
            <div class="color-title">#4582EC</div>
            <div class="color-subtitle">Primary</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-secondary text-light">
            <div class="color-title">#98A2AC</div>
            <div class="color-subtitle">Secondary</div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-success text-light">
            <div class="color-title">#7ED685</div>
            <div class="color-subtitle">Success</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-info text-light">
            <div class="color-title">#538BED</div>
            <div class="color-subtitle">Info</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-warning text-light">
            <div class="color-title">#F0AD4E</div>
            <div class="color-subtitle">Warning</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-error text-light">
            <div class="color-title">#D9534F</div>
            <div class="color-subtitle">Error</div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-dark text-light">
            <div class="color-title">#4C5B5C</div>
            <div class="color-subtitle">Dark</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-gray-dark text-light">
            <div class="color-title">#6F8486</div>
            <div class="color-subtitle">Gray dark</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-gray text-light">
            <div class="color-title">#B3C0C1</div>
            <div class="color-subtitle">Gray</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-gray-light text-gray-dark">
            <div class="color-title">#EBEFEF</div>
            <div class="color-subtitle">Gray light</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-border text-gray-dark">
            <div class="color-title">#E6EAEA</div>
            <div class="color-subtitle">Border</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-color text-gray-dark">
            <div class="color-title">#F1F3F3</div>
            <div class="color-subtitle">Background</div>
          </div>
        </div>
        <div class="column col-3 col-md-6">
          <div class="docs-color bg-light text-gray-dark">
            <div class="color-title">#FFF</div>
            <div class="color-subtitle">Light</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2>Headings</h2>
      <div class="columns">
        <div class="column col-12">
          <h1>H1 Heading <small><s-label>40px</s-label></small></h1>
        </div>
        <div class="column col-12">
          <h2>H2 Heading <small><s-label>32px</s-label></small></h2>
        </div>
        <div class="column col-12">
          <h3>H3 Heading <small><s-label>28px</s-label></small></h3>
        </div>
        <div class="column col-12">
          <h4>H4 Heading <small><s-label>24px</s-label></small></h4>
        </div>
        <div class="column col-12">
          <h5>H5 Heading <small><s-label>20px</s-label></small></h5>
        </div>
        <div class="column col-12">
          <h6>H6 Heading <small><s-label>16px</s-label></small></h6>
        </div>
      </div>
      <s-code lang="html">&lt;h1&gt;H1 Heading&lt;/h1&gt;</s-code>
    </section>

    <section>
      <h2>Paragraphs</h2>
      <p>Lorem ipsum dolor sit amet, consectetur <a href="#">adipiscing elit. Praesent risus leo, dictum in vehicula sit amet</a>, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.</p>
      <p>Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up on goofballs.</p>
      <s-code lang="html">&lt;p&gt;Lorem ipsum dolor sit amet, consectetur &lt;a href=&quot;#&quot;&gt;adipiscing elit. Praesent risus leo, dictum in vehicula sit amet&lt;/a&gt;, feugiat tempus tellus. Duis quis sodales risus. Etiam euismod ornare consequat.&lt;/p&gt;</s-code>
    </section>

    <section class="semantic-elements">
      <h2>Semantic Elements</h2>
      <div class="columns">
        <div class="column col-6 col-xs-12">
          <abbr title="Internationalization">I18N</abbr>
          <code class="ml-2">&lt;abbr&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <strong>Bold</strong>
          <code class="ml-2">&lt;strong&gt;</code> <code>&lt;b&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <cite>Citation</cite>
          <code class="ml-2">&lt;cite&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <code>Hello World!</code>
          <code class="ml-2">&lt;code&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <del>Deleted</del>
          <code class="ml-2">&lt;del&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <em>Emphasis</em>
          <code class="ml-2">&lt;em&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <i>Italic</i>
          <code class="ml-2">&lt;i&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <ins>Inserted</ins>
          <code class="ml-2">&lt;ins&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <kbd>Ctrl + S</kbd>
          <code class="ml-2">&lt;kbd&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <mark>Highlighted</mark>
          <code class="ml-2">&lt;mark&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <ruby>
            漢 <rt>kan</rt>
            字 <rt>ji</rt>
          </ruby>
          <code class="ml-2">&lt;ruby&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <s>Strikethrough</s>
          <code class="ml-2">&lt;s&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <samp>Sample</samp>
          <code class="ml-2">&lt;samp&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          Text <sub>Subscripted</sub>
          <code class="ml-2">&lt;sub&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          Text <sup>Superscripted</sup>
          <code class="ml-2">&lt;sup&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <time>20:00</time>
          <code class="ml-2">&lt;time&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <u>Underline</u>
          <code class="ml-2">&lt;u&gt;</code>
        </div>
        <div class="column col-6 col-xs-12">
          <var>x</var> = <var>y</var> + 2
          <code class="ml-2">&lt;var&gt;</code>
        </div>
      </div>
      <s-code lang="html">&lt;abbr title=&quot;Internationalization&quot;&gt;I18N&lt;/abbr&gt;
&lt;strong&gt;Bold&lt;/strong&gt;
&lt;cite&gt;Citation&lt;/cite&gt;
&lt;code&gt;Hello World!&lt;/code&gt;
&lt;del&gt;Deleted&lt;/del&gt;
&lt;em&gt;Emphasis&lt;/em&gt;
&lt;i&gt;Italic&lt;/i&gt;
&lt;ins&gt;Inserted&lt;/ins&gt;
&lt;kbd&gt;Ctrl + S&lt;/kbd&gt;
&lt;mark&gt;Highlighted&lt;/mark&gt;
&lt;ruby&gt;
  漢 &lt;rt&gt;kan&lt;/rt&gt;
  字 &lt;rt&gt;ji&lt;/rt&gt;
&lt;/ruby&gt;
&lt;s&gt;Strikethrough&lt;/s&gt;
&lt;samp&gt;Sample&lt;/samp&gt;
Text &lt;sub&gt;Subscripted&lt;/sub&gt;
Text &lt;sup&gt;Superscripted&lt;/sup&gt;
&lt;time&gt;20:00&lt;/time&gt;
&lt;u&gt;Underline&lt;/u&gt;
&lt;var&gt;x&lt;/var&gt; = &lt;var&gt;y&lt;/var&gt; + 2</s-code>
    </section>

    <section>
      <h2>Blockquotes</h2>
      <blockquote>
        <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.</p>
        <cite>Bill Gates</cite>
      </blockquote>
      <s-code lang="html">&lt;blockquote&gt;
  &lt;p&gt;The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.&lt;/p&gt;
  &lt;cite&gt;Bill Gates&lt;/cite&gt;
&lt;/blockquote&gt;</s-code>
    </section>

    <section>
      <h2>Lists</h2>
      <div class="columns">
        <div class="column">
          <!-- unordered list -->
          <ul>
            <li>list item 1</li>
            <li>list item 2
              <ul>
                <li>list item 2.1</li>
                <li>list item 2.2</li>
                <li>list item 2.3</li>
              </ul>
            </li>
            <li>list item 3</li>
          </ul>
        </div>
        <div class="column">
          <!-- description list -->
          <dl>
            <dt>description list term</dt>
            <dd>description list description</dd>
          </dl>
        </div>
      </div>
      <s-code lang="html">&lt;ul&gt;
  &lt;li&gt;list item 1&lt;/li&gt;
  &lt;li&gt;list item 2
    &lt;ul&gt;
      &lt;li&gt;list item 2.1&lt;/li&gt;
      &lt;li&gt;list item 2.2&lt;/li&gt;
      &lt;li&gt;list item 2.3&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;list item 3&lt;/li&gt;
&lt;/ul&gt;</s-code>
    </section>

    <section>
      <h2>Tables</h2>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          <tr class="active">
            <td>The Shawshank Redemption</td>
            <td>Crime, Drama</td>
            <td>14 October 1994</td>
          </tr>
          <tr>
            <td>Star Trek: Generations</td>
            <td>Action, Adventure, Mystery</td>
            <td>18 November 1994</td>
          </tr>
        </tbody>
      </table>
      <s-code lang="html">&lt;table class=&quot;table table-striped table-hover&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Genre&lt;/th&gt;
      &lt;th&gt;Release Date&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr class=&quot;active&quot;&gt;
      &lt;td&gt;The Shawshank Redemption&lt;/td&gt;
      &lt;td&gt;Crime, Drama&lt;/td&gt;
      &lt;td&gt;14 October 1994&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Star Trek: Generations&lt;/td&gt;
      &lt;td&gt;Action, Adventure, Mystery&lt;/td&gt;
      &lt;td&gt;18 November 1994&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</s-code>
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
  name: 'Base',
  data() {
    return {
      msg: 'Base Page',
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

  &.semantic-elements {
    .column {
      margin-bottom: $layout-spacing;
    }
  }

  blockquote,
  .columns,
  .table, {
    max-width: $size-sm;
  }
}

.columns {
  .docs-color {
    margin: $layout-spacing-lg 0;
    padding: $control-padding-y-lg $control-padding-x-lg;
    border-radius: $border-radius;
  }

  &:first-of-type .docs-color {
    margin-top: 0;
  }
}

.color-subtitle {
  font-size: $font-size-sm;
  opacity: .75;
}
</style>
