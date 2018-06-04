<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <section>
      <h1>Hello World!</h1>
      <p>This is a Vue.js base project with <router-link to="components">Spectre.css based components</router-link>, <router-link to="forms">VeeValidate powered forms</router-link> and <router-link to="icons">Feather Icons</router-link>.</p>
      <p><a href="https://github.com/axios/axios">Axios HTTP client</a> is integrated with a barebones base config at <code>/src/http-common.js</code>.<br>See this component's <code>getPosts()</code> method at <code>/src/views/HelloWorld.vue</code> for an example on how to do API requests.</p>
      <p>This project is meant to be a minimal starting point for a Vue.js SPA.</p>
    </section>
    <section>
      <h2>Links</h2>
      <div class="external-links">
        <div
          class="btn btn-text-icon"
          v-for="(link, index) in links" :key="index"
        >
            <feather-external-link></feather-external-link>
            <a :href="link.url" target="_blank">{{ link.title }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { HTTP } from '@/http-common';

export default {
  data() {
    return {
      links: [],
      posts: {},
    };
  },
  methods: {
    getLinks() {
      const links = [];
      links.push(
        {
          url: 'https://vuejs.org/v2/guide/',
          title: 'Vue.js',
        },
        {
          url: 'https://vuejs-templates.github.io/webpack/',
          title: 'Vue Webpack',
        },
        {
          url: 'https://github.com/axios/axios',
          title: 'Axios HTTP Client',
        },
        {
          url: 'https://picturepan2.github.io/spectre/getting-started.html',
          title: 'Spectre.css',
        },
        {
          url: 'http://vee-validate.logaretm.com/index.html',
          title: 'VeeValidate',
        },
        {
          url: 'https://feathericons.com/',
          title: 'Feather Icons',
        },
      );
      this.links = links;
    },
    getPosts() {
      // "import { HTTP } from '@/http-common'" on the component
      // for base configuration and access to HTTP
      HTTP.get('/posts')
        .then((response) => {
          // eslint-disable-next-line
          console.log('example of an api request response using axios and a base config at /src/http-common.js');
          // eslint-disable-next-line
          console.log(response.data);
          // We don't need anything like "const self = this"
          // when using ES6 arrow functions for promises
          this.posts = response.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
  },
  created() {
    this.getLinks();
    this.getPosts();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// File with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars';

section {
  margin-bottom: $unit-16
}

.external-links {
  .btn {
    margin-right: $layout-spacing;
    margin-bottom: $layout-spacing;
  }

  .btn:last-child {
    margin-right: 0;
  }
}
</style>
