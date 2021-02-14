<style lang="less">
  .xos {
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>

<template>
  <div class="xos-example">
    <XDesktop>
      <!--<div slot="top">top</div>-->
      <!--<div slot="right">right</div>-->
      <!--<div slot="bottom">bottom</div>-->
      <!--<div slot="left">left</div>-->
      <XTaskbar slot="top" mode="horizontal" :wallpaper="wallpaper" :apps="taskbarApps"></XTaskbar>
      <XTaskbar slot="right" mode="vertical" :wallpaper="wallpaper" :apps="taskbarApps"></XTaskbar>
      <XTaskbar slot="bottom" mode="horizontal" :wallpaper="wallpaper" :apps="taskbarApps"></XTaskbar>
      <XTaskbar slot="left" mode="vertical" :wallpaper="wallpaper" :apps="taskbarApps"></XTaskbar>
      <div slot="top-left">C1</div>
      <div slot="top-right">C2</div>
      <div slot="bottom-left">C3</div>
      <div slot="bottom-right">C4</div>
      <div class="xos-desktop-content">
        <h1>TODO Desktop Content</h1>
        <XDesktopApp size="medium" icon="http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png" title="Test"></XDesktopApp>
      </div>
      <XWallpaper slot="wallpaper" :image="wallpaper.image" :color="wallpaper.color"></XWallpaper>
      <XLoading></XLoading>
    </XDesktop>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        wallpaper: {
          image: require('./assets/wallpaper.jpg'),
          color: ''
        },
        taskbarApps: [
          { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
          // { icon: 'http://oxoyo.co/X-WebDesktop-Vue/static/apps/GoFire/logo.png' },
        ]
      }
    }
  }
</script>
