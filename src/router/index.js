import Vue from 'vue';
import Router from 'vue-router';
// Pages
import Components from '@/pages/Components';
import Icons from '@/pages/Icons';
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
      path: '/components',
      name: 'Components',
      component: Components,
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons,
    },
  ],
});
