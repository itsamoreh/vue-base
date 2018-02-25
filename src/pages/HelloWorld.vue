<template>
  <!-- eslint-disable -->
  <div class="container grid-xl">
    <h1>Hello World!</h1>
    <p>This is a Vue.js base project with <router-link to="components">Spectre.css based components</router-link>, and <router-link to="icons">Feather Icons</router-link>.</p>
    <hr>
    <h2>Links</h2>
    <div class="external-links">
      <a 
        :href="link.url"
        v-for="(link, index) in links" :key="index"
      >
        <s-button class="btn-text-icon">
            <feather-external-link></feather-external-link>
            {{ link.title }}
        </s-button>
      </a>
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
  a {
    display: inline-block;
    margin-right: $layout-spacing;
  }

  a:last-child {
    margin-right: 0;
  }
}
</style>
