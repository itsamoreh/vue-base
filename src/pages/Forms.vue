<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <section>
      <h1>Forms</h1>
      <p>Form Validation is handled by <a href="http://vee-validate.logaretm.com/index.html">VeeValidate</a>, styles are globally referenced in: <s-code>/src/assets/scss/elements/_forms.scss</s-code></p>
    </section>

    <section>
      <h3>Inputs (With Validation)</h3>
      <div class="form-group">
        <label class="form-label" for="name-example-1">Full Name</label>
        <!-- Add form classes e.g. ('form-input'), error classes (elements/_forms.scss) and other attributes -->
        <!-- Refer to VeeValidate Docs for more: http://vee-validate.logaretm.com/index.html -->
        <input 
          v-validate="'required'" 
          :class="{'form-input': true, 'is-error': errors.has('name') }"
          v-model="name" 
          id="name-example-1" name="name" type="text" placeholder="Full Name"
        >
        <p v-show="errors.has('name')" class="form-input-hint">{{ errors.first('name') }}</p>
      </div>
      <!-- v-model example {{ email }} -->
      <code>{{ name }}</code>
      <div class="form-group">
        <label class="form-label" for="email-example-1">Email Address</label>
        <!-- Add form classes e.g. ('form-input'), error classes (elements/_forms.scss) and other attributes -->
        <!-- Refer to VeeValidate Docs for more: http://vee-validate.logaretm.com/index.html -->
        <input 
          v-validate="'required|email'" 
          :class="{'form-input': true, 'is-error': errors.has('email') }"
          v-model="email" 
          id="email-example-1" name="email" type="text" placeholder="Email"
        >
        <p v-show="errors.has('email')" class="form-input-hint">{{ errors.first('email') }}</p>
      </div>
      <!-- v-model example {{ email }} -->
      <code>{{ email }}</code>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;label class=&quot;form-label&quot; for=&quot;email-example-1&quot;&gt;Email Address&lt;/label&gt;
  &lt;!-- Add form classes e.g. ('form-input'), error classes (elements/_forms.scss) and other attributes --&gt;
  &lt;!-- Refer to VeeValidate Docs for more: http://vee-validate.logaretm.com/index.html --&gt;
  &lt;input 
    v-validate=&quot;'required|email'&quot; 
    :class=&quot;{'form-input': true, 'is-error': errors.has('email') }&quot;
    v-model=&quot;email&quot; 
    id=&quot;email-example-1&quot; name=&quot;email&quot; type=&quot;text&quot; placeholder=&quot;Email&quot;
  &gt;
  &lt;p v-show=&quot;errors.has('email')&quot; class=&quot;form-input-hint&quot;&gt;{{ errors.first('email') }}&lt;/p&gt;
&lt;/div&gt;
&lt;!-- v-model example {{ email }} --&gt;
&lt;code&gt;{{ email }}&lt;/code&gt;</s-code>
    </section>

    <section>
      <h3>Selects</h3>
      <div class="form-group">
        <select class="form-select">
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;select class=&quot;form-select&quot;&gt;
    &lt;option&gt;Choose an option&lt;/option&gt;
    &lt;option&gt;Slack&lt;/option&gt;
    &lt;option&gt;Skype&lt;/option&gt;
    &lt;option&gt;Hipchat&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Radios</h3>
      <div class="form-group">
        <label class="form-label">Gender</label>
        <label class="form-radio">
          <input type="radio" name="gender" checked>
          <span class="form-icon"></span> Male
        </label>
        <label class="form-radio">
          <input type="radio" name="gender">
          <span class="form-icon"></span> Female
        </label>
      </div>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;label class=&quot;form-label&quot;&gt;Gender&lt;/label&gt;
  &lt;label class=&quot;form-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;gender&quot; checked&gt;
    &lt;span class=&quot;form-icon&quot;&gt;&lt;/span&gt; Male
  &lt;/label&gt;
  &lt;label class=&quot;form-radio&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;gender&quot;&gt;
    &lt;span class=&quot;form-icon&quot;&gt;&lt;/span&gt; Female
  &lt;/label&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Switches</h3>
      <div class="form-group">
        <label class="form-switch">
          <input type="checkbox">
          <span class="form-icon"></span> Send me emails with news and tips
        </label>
      </div>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;label class=&quot;form-switch&quot;&gt;
    &lt;input type=&quot;checkbox&quot;&gt;
    &lt;span class=&quot;form-icon&quot;&gt;&lt;/span&gt; Send me emails with news and tips
  &lt;/label&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Checkboxes</h3>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox">
          <span class="form-icon"></span> Remember me
        </label>
      </div>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;label class=&quot;form-checkbox&quot;&gt;
    &lt;input type=&quot;checkbox&quot;&gt;
    &lt;span class=&quot;form-icon&quot;&gt;&lt;/span&gt; Remember me
  &lt;/label&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Horizontal Form</h3>
      <form class="form-horizontal">
        <div class="form-group">
          <div class="col-3 col-sm-12">
            <label class="form-label" for="name-example-2">Name</label>
          </div>
          <div class="col-9 col-sm-12">
            <input class="form-input" type="text" id="name-example-2" placeholder="Name">
          </div>
        </div>
        <!-- form structure -->
      </form> 
      <s-code lang="html">&lt;form class=&quot;form-horizontal&quot;&gt;
  &lt;div class=&quot;form-group&quot;&gt;
    &lt;div class=&quot;col-3 col-sm-12&quot;&gt;
      &lt;label class=&quot;form-label&quot; for=&quot;name-example-2&quot;&gt;Name&lt;/label&gt;
    &lt;/div&gt;
    &lt;div class=&quot;col-9 col-sm-12&quot;&gt;
      &lt;input class=&quot;form-input&quot; type=&quot;text&quot; id=&quot;name-example-2&quot; placeholder=&quot;Name&quot;&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;!-- form structure --&gt;
&lt;/form&gt;</s-code>
    </section>

    <section>
      <h3>Form Icons</h3>
      <div class="form-group has-icon-left">
        <input type="text" class="form-input" placeholder="...">
        <feather-user class="form-icon icon"></feather-user>
      </div>
      <div class="form-group has-icon-right">
        <input type="text" class="form-input" placeholder="...">
        <span class="form-icon loading"></span>
      </div>
      <s-code lang="html">&lt;div class=&quot;form-group has-icon-left&quot;&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-input&quot; placeholder=&quot;...&quot;&gt;
  &lt;feather-user class=&quot;form-icon icon&quot;&gt;&lt;/feather-user&gt;
&lt;/div&gt;
&lt;div class=&quot;form-group has-icon-right&quot;&gt;
  &lt;input type=&quot;text&quot; class=&quot;form-input&quot; placeholder=&quot;...&quot;&gt;
  &lt;span class=&quot;form-icon loading&quot;&gt;&lt;/span&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Input Types</h3>
      <form class="form-horizontal" action="#forms">
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="email-example-2">Email</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="email" id="email-example-2" placeholder="Email" value="example@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="url-example-1">URL</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="url" id="url-example-1" placeholder="URL" value="https://github.com/itsamoreh/vue-base">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="search-example-1">Search</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="search" id="search-example-1" placeholder="Search">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="tel-example-1">Tel</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="tel" id="tel-example-1" placeholder="Tel" value="1-(888)-888-8888">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="password-example-1">Password</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="password" id="password-example-1" placeholder="Password" value="123456789">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="number-example-1">Number</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="number" id="number-example-1" placeholder="00" value="66">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="date-example-1">Date</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="date" id="date-example-1" value="2016-12-31">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="color-example-1">Color</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="color" id="color-example-1" value="#4582EC">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="file-example-1">File</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="file" id="file-example-1">
          </div>
        </div>
      </form>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;div class=&quot;col-3&quot;&gt;
    &lt;label class=&quot;form-label&quot; for=&quot;date-example-1&quot;&gt;Date&lt;/label&gt;
  &lt;/div&gt;
  &lt;div class=&quot;col-9&quot;&gt;
    &lt;input class=&quot;form-input&quot; type=&quot;date&quot; id=&quot;date-example-1&quot; value=&quot;2016-12-31&quot;&gt;
  &lt;/div&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Input Groups</h3>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon">...</span>
          <input type="text" class="form-input" placeholder="...">
          <s-button class="btn-primary input-group-btn">Submit</s-button>
        </div>
      </div>
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;div class=&quot;input-group&quot;&gt;
    &lt;span class=&quot;input-group-addon&quot;&gt;...&lt;/span&gt;
    &lt;input type=&quot;text&quot; class=&quot;form-input&quot; placeholder=&quot;...&quot;&gt;
    &lt;s-button class=&quot;btn-primary input-group-btn&quot;&gt;Submit&lt;/s-button&gt;
  &lt;/div&gt;
&lt;/div&gt;</s-code>
    </section>

    <section>
      <h3>Disabled inputs</h3>
      <div class="form-group">
        <label class="form-label" for="input-disabled-1">Message</label>
        <textarea class="form-input" id="input-disabled-1" placeholder="Textarea" rows="3" disabled=""></textarea>
      </div> 
      <s-code lang="html">&lt;div class=&quot;form-group&quot;&gt;
  &lt;label class=&quot;form-label&quot; for=&quot;input-disabled-1&quot;&gt;Message&lt;/label&gt;
  &lt;textarea class=&quot;form-input&quot; id=&quot;input-disabled-1&quot; placeholder=&quot;Textarea&quot; rows=&quot;3&quot; disabled=&quot;&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</s-code>
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
  name: 'Forms',
  data() {
    return {
      msg: 'Forms Page',
      email: '',
      name: '',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';

section {
  margin-bottom: $unit-16;
}

form,
.form-group {
  max-width: $size-sm;
}

.form-group:not(:last-child) {
  margin-bottom: $layout-spacing;
}
</style>
