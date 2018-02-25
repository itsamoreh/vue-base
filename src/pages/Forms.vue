<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <h1>Forms</h1>
    <p>Form Validation is handled by <a href="http://vee-validate.logaretm.com/index.html">VeeValidate</a>, styles are globally referenced in: <s-code>/src/assets/scss/elements/_forms.scss</s-code></p>

    <div class="component-group">
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
    </div>

    <div class="component-group">
      <h3>Selects</h3>
      <div class="form-group">
        <select class="form-select">
          <option>Choose an option</option>
          <option>Slack</option>
          <option>Skype</option>
          <option>Hipchat</option>
        </select>
      </div>
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
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
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
      <h3>Switches</h3>
      <div class="form-group">
        <label class="form-switch">
          <input type="checkbox">
          <span class="form-icon"></span> Send me emails with news and tips
        </label>
      </div>
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
      <h3>Checkboxes</h3>
      <div class="form-group">
        <label class="form-checkbox">
          <input type="checkbox">
          <span class="form-icon"></span> Remember me
        </label>
      </div> 
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
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
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
      <h3>Form Icons</h3>
      <!-- form input with Spectre icon -->
      <div class="form-group has-icon-left">
        <input type="text" class="form-input" placeholder="...">
        <feather-user class="form-icon icon"></feather-user>
      </div>
      <div class="form-group has-icon-right">
        <input type="text" class="form-input" placeholder="...">
        <span class="form-icon loading"></span>
      </div>
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
      <h3>Input Types</h3>
      <form class="form-horizontal" action="#forms">
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="email-example-2">Email</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="email" id="email-example-2" placeholder="Email" value="spectre@example.com" pattern="[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$">
          </div>
        </div>
        <div class="form-group">
          <div class="col-3">
            <label class="form-label" for="url-example-1">URL</label>
          </div>
          <div class="col-9">
            <input class="form-input" type="url" id="url-example-1" placeholder="URL" value="https://github.com/picturepan2/spectre">
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
            <input class="form-input" type="color" id="color-example-1" value="#5755d9">
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
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
      <h3>Input Groups</h3>
      <div class="form-group">
        <div class="input-group">
          <span class="input-group-addon">...</span>
          <input type="text" class="form-input" placeholder="...">
          <s-button class="btn-primary input-group-btn">Submit</s-button>
        </div>
      </div>
      <s-code lang="html"></s-code>
    </div>

    <div class="component-group">
      <h3>Disabled inputs</h3>
      <div class="form-group">
        <label class="form-label" for="input-example-20">Message</label>
        <textarea class="form-input" id="input-example-20" placeholder="Textarea" rows="3" disabled=""></textarea>
      </div> 
      <s-code lang="html"></s-code>
    </div>

    <!-- Component Group Template -->
    <div class="component-group">
      <h3>Title</h3>
      <!-- Component(s) Here -->
      <s-code lang="html"></s-code>
    </div>
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

.component-group {
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
