import Vue from 'vue';
import Router from 'vue-router';
import OnoGame from '@/components/OnoGame';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'OnoGame',
      component: OnoGame,
    },
  ],
});
