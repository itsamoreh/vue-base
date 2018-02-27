<template>
  <div class="container grid-xl">
    <section>

      <h1>Icons</h1>
      <p>Use icons in components as follows:</p>
      <s-code lang="html">&lt;feather-star&gt;&lt;/feather-star&gt;
&lt;!-- or --&gt;
&lt;feather-icon type=&quot;star&quot;&gt;&lt;/feather-icon&gt;</s-code>
      <p>Add new icons to: <s-code>/src/icons/components/</s-code></p>
    </section>
    <div class="input-group search">
      <span class="input-group-addon addon-primary addon-lg">
        <feather-search class="form-icon"></feather-search>
      </span>
      <input v-model="searchQuery" type="text" class="form-input input-lg">
    </div>
    <div class="icons-container">
      <div
        class="text-icon-spacing"
        v-for="icon in filteredIcons" :key="icon"
      >
        <div class="text-icon">
          <feather-icon class="icon" :type="icon"></feather-icon>
          {{ icon }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  computed: {
    filteredIcons() {
      return this.icons.filter(icon =>
        icon.toLowerCase().indexOf(this.searchQuery.toLowerCase()) > -1,
      );
    },
  },
  data() {
    return {
      searchQuery: '',
      iconSelected: 'star',
      icons: [],
      iconsFiltered: [],
    };
  },
  methods: {
    getIcons() {
      const icons = [];
      icons.push('activity');
      icons.push('airplay');
      icons.push('alert-circle');
      icons.push('alert-octagon');
      icons.push('alert-triangle');
      icons.push('align-center');
      icons.push('align-justify');
      icons.push('align-left');
      icons.push('align-right');
      icons.push('anchor');
      icons.push('aperture');
      icons.push('arrow-down-left');
      icons.push('arrow-down-right');
      icons.push('arrow-down');
      icons.push('arrow-left');
      icons.push('arrow-right');
      icons.push('arrow-up-left');
      icons.push('arrow-up-right');
      icons.push('arrow-up');
      icons.push('at-sign');
      icons.push('award');
      icons.push('bar-chart-2');
      icons.push('bar-chart');
      icons.push('battery-charging');
      icons.push('battery');
      icons.push('bell-off');
      icons.push('bell');
      icons.push('bluetooth');
      icons.push('bold');
      icons.push('book');
      icons.push('bookmark');
      icons.push('box');
      icons.push('briefcase');
      icons.push('calendar');
      icons.push('camera-off');
      icons.push('camera');
      icons.push('cast');
      icons.push('check-circle');
      icons.push('check-square');
      icons.push('check');
      icons.push('chevron-down');
      icons.push('chevron-left');
      icons.push('chevron-right');
      icons.push('chevron-up');
      icons.push('chevrons-down');
      icons.push('chevrons-left');
      icons.push('chevrons-right');
      icons.push('chevrons-up');
      icons.push('chrome');
      icons.push('circle');
      icons.push('clipboard');
      icons.push('clock');
      icons.push('cloud-drizzle');
      icons.push('cloud-lightning');
      icons.push('cloud-off');
      icons.push('cloud-rain');
      icons.push('cloud-snow');
      icons.push('cloud');
      icons.push('codepen');
      icons.push('command');
      icons.push('compass');
      icons.push('copy');
      icons.push('corner-down-left');
      icons.push('corner-down-right');
      icons.push('corner-left-down');
      icons.push('corner-left-up');
      icons.push('corner-right-down');
      icons.push('corner-right-up');
      icons.push('corner-up-left');
      icons.push('corner-up-right');
      icons.push('cpu');
      icons.push('credit-card');
      icons.push('crop');
      icons.push('crosshair');
      icons.push('delete');
      icons.push('disc');
      icons.push('download-cloud');
      icons.push('download');
      icons.push('droplet');
      icons.push('edit-2');
      icons.push('edit-3');
      icons.push('edit');
      icons.push('external-link');
      icons.push('eye-off');
      icons.push('eye');
      icons.push('facebook');
      icons.push('fast-forward');
      icons.push('feather');
      icons.push('file-minus');
      icons.push('file-plus');
      icons.push('file-text');
      icons.push('file');
      icons.push('film');
      icons.push('filter');
      icons.push('flag');
      icons.push('folder');
      icons.push('github');
      icons.push('gitlab');
      icons.push('globe');
      icons.push('grid');
      icons.push('hash');
      icons.push('headphones');
      icons.push('heart');
      icons.push('help-circle');
      icons.push('home');
      icons.push('image');
      icons.push('inbox');
      icons.push('info');
      icons.push('instagram');
      icons.push('italic');
      icons.push('layers');
      icons.push('layout');
      icons.push('life-buoy');
      icons.push('link-2');
      icons.push('link');
      icons.push('list');
      icons.push('loader');
      icons.push('lock');
      icons.push('log-in');
      icons.push('log-out');
      icons.push('mail');
      icons.push('map-pin');
      icons.push('map');
      icons.push('maximize-2');
      icons.push('maximize');
      icons.push('menu');
      icons.push('message-circle');
      icons.push('message-square');
      icons.push('mic-off');
      icons.push('mic');
      icons.push('minimize-2');
      icons.push('minimize');
      icons.push('minus-circle');
      icons.push('minus-square');
      icons.push('minus');
      icons.push('monitor');
      icons.push('moon');
      icons.push('more-horizontal');
      icons.push('more-vertical');
      icons.push('move');
      icons.push('music');
      icons.push('navigation-2');
      icons.push('navigation');
      icons.push('octagon');
      icons.push('package');
      icons.push('paperclip');
      icons.push('pause-circle');
      icons.push('pause');
      icons.push('percent');
      icons.push('phone-call');
      icons.push('phone-forwarded');
      icons.push('phone-incoming');
      icons.push('phone-missed');
      icons.push('phone-off');
      icons.push('phone-outgoing');
      icons.push('phone');
      icons.push('pie-chart');
      icons.push('play-circle');
      icons.push('play');
      icons.push('plus-circle');
      icons.push('plus-square');
      icons.push('plus');
      icons.push('pocket');
      icons.push('power');
      icons.push('printer');
      icons.push('radio');
      icons.push('refresh-ccw');
      icons.push('refresh-cw');
      icons.push('repeat');
      icons.push('rewind');
      icons.push('rotate-ccw');
      icons.push('rotate-cw');
      icons.push('save');
      icons.push('scissors');
      icons.push('search');
      icons.push('server');
      icons.push('settings');
      icons.push('share-2');
      icons.push('share');
      icons.push('shield');
      icons.push('shopping-cart');
      icons.push('shuffle');
      icons.push('sidebar');
      icons.push('skip-back');
      icons.push('skip-forward');
      icons.push('slack');
      icons.push('slash');
      icons.push('sliders');
      icons.push('smartphone');
      icons.push('speaker');
      icons.push('square');
      icons.push('star');
      icons.push('stop-circle');
      icons.push('sun');
      icons.push('sunrise');
      icons.push('sunset');
      icons.push('tablet');
      icons.push('tag');
      icons.push('target');
      icons.push('thermometer');
      icons.push('thumbs-down');
      icons.push('thumbs-up');
      icons.push('toggle-left');
      icons.push('toggle-right');
      icons.push('trash-2');
      icons.push('trash');
      icons.push('trending-down');
      icons.push('trending-up');
      icons.push('triangle');
      icons.push('tv');
      icons.push('twitter');
      icons.push('type');
      icons.push('umbrella');
      icons.push('underline');
      icons.push('unlock');
      icons.push('upload-cloud');
      icons.push('upload');
      icons.push('user-check');
      icons.push('user-minus');
      icons.push('user-plus');
      icons.push('user-x');
      icons.push('user');
      icons.push('users');
      icons.push('video-off');
      icons.push('video');
      icons.push('voicemail');
      icons.push('volume-1');
      icons.push('volume-2');
      icons.push('volume-x');
      icons.push('volume');
      icons.push('watch');
      icons.push('wifi-off');
      icons.push('wifi');
      icons.push('wind');
      icons.push('x-circle');
      icons.push('x-square');
      icons.push('x');
      icons.push('zap');
      icons.push('zoom-in');
      icons.push('zoom-out');
      this.icons = icons;
    },
  },
  mounted() {
    this.getIcons();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// Global scss file with vars and mixins (aliased in webpack.base.conf.js)
@import '~vars-mixins';

section {
  margin-bottom: $unit-16
}

.search {
  margin-bottom: $layout-spacing-lg;
}

.icons-container {
  display: flex;
  flex-wrap: wrap;
  margin-left: -$layout-spacing;
  margin-right: -$layout-spacing;
}
.text-icon-spacing {
  padding: $layout-spacing;
  width: 25%;

  .icon {
    margin-right: $layout-spacing;
  }
}
.text-icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: $layout-spacing;
  border: 1px solid $border-color;

  &:hover {
    @include control-shadow($border-color);
    svg {
      color: $primary-color;
    }
  }
}
</style>
