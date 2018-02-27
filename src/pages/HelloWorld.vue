<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <h1>Hello World!</h1>
    <p>This is a Vue.js base project with <router-link to="components">Spectre.css based components</router-link>, <router-link to="forms">VeeValidate powered forms</router-link> and <router-link to="icons">Feather Icons</router-link>.</p>
    <hr>
    <h2>Links</h2>
    <div class="external-links">
      <s-button 
        class="btn-text-icon"
        v-for="(link, index) in links" :key="index"
      >
          <feather-external-link></feather-external-link>
          <a :href="link.url">{{ link.title }}</a>
      </s-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      links: [],
    };
  },
  methods: {
    getLinks() {
      const links = [];
      links.push(
        {
          url: 'https://vuejs.org/v2/guide/',
          title: 'Vue.js Docs',
        },
        {
          url: 'https://vuejs-templates.github.io/webpack/',
          title: 'Vue Webpack Docs',
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
  },
  mounted() {
    this.getLinks();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';

hr {
  margin: $layout-spacing-lg 0;
  border-color: transparent;
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
