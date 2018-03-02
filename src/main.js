// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Axios
import axios from 'axios';
import VueAxios from 'vue-axios';

// VeeValidate
import VeeValidate from 'vee-validate';

// --- Relative Imports --- //

// App Component
import App from './App';

// Router
import router from './router';

// Global UI Components (Alphabetical)
import Button from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Card from './components/Card';
import Code from './components/Code';
import Label from './components/Label';
import Modal from './components/Modal';

// Vue Feather Icons
import VueFeatherIcon from './icons/vue-feather-icons';

// Axios
Vue.use(VueAxios, axios);

// VeeValidate
Vue.use(VeeValidate);

// Global Components (alphabetical)
Vue.component('s-button', Button);
Vue.component('s-button-group', ButtonGroup);
Vue.component('s-card', Card);
Vue.component('s-code', Code);
Vue.component('s-label', Label);
Vue.component('s-modal', Modal);

// Vue Feather Icon
Vue.use(VueFeatherIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
