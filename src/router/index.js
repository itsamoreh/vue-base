import Vue from 'vue';
import Router from 'vue-router';

// Views
import HelloWorld from '@/views/HelloWorld';
import Icons from '@/views/Icons';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/icons',
      name: 'Icons',
      component: Icons,
    },
  ],
});
