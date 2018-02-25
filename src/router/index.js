import Vue from 'vue';
import Router from 'vue-router';
// Pages
import Components from '@/pages/Components';
import HelloWorld from '@/pages/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/styleguide',
      name: 'Components',
      component: Components,
    },
  ],
});
