// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// Router
import router from './router';

// Global UI Components
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Code from './components/Code';
import Label from './components/Label';

// Vue Feather Icons
import VueFeatherIcon from './icons/vue-feather-icons';

// Global Component Registration
Vue.component('s-button', Button);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-code', Code);
Vue.component('s-label', Label);

// Vue Feather Icon Registration
Vue.use(VueFeatherIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});