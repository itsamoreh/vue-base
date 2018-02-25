// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// Global UI Components
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Code from './components/Code';
import Label from './components/Label';

// Router
import router from './router';

// Global Component Registration
Vue.component('a-button', Button);
Vue.component('a-button-group', ButtonGroup);
Vue.component('a-code', Code);
Vue.component('a-label', Label);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
