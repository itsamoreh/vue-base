import Vue from 'vue';
import Router from 'vue-router';

// Pages
import Components from '@/pages/Components';
import Forms from '@/pages/Forms';
import Icons from '@/pages/Icons';
import HelloWorld from '@/pages/HelloWorld';
import Base from '@/pages/Base';

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
      path: '/forms',
      name: 'Forms',
      component: Forms,
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons,
    },
    {
      path: '/base',
      name: 'Base',
      component: Base,
    },
  ],
});
