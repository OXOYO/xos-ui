<template>
  <div
    class="x-taskbar-app"
    @click="onClick"
    @contextmenu.stop.prevent="onContextmenu"
  >
    <div class="x-taskbar-app__icon" :style="iconStyle">
<!--      <img :src="info.icon">-->
<!--      <div :style="{ backgroundImage: `url(${info.icon})`, width: '100%', height: '100%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }"></div>-->
<!--      <span style="position: absolute; top: 0; left: 50%; font-size: 12px;">{{ index }}</span>-->
<!--      <span style="background: red; min-height: 10px; min-width: 10px; font-size: 12px;">{{ index }}</span>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskbarApp',
    props: {
      info: Object,
      index: Number
    },
    computed: {
      iconStyle () {
        const { icon } = this.info
        return {
          backgroundImage: `url(${icon})`
        }
      }
    },
    methods: {
      onClick () {
        console.log('on taskbar app click')
      },
      onContextmenu () {
        console.log('on taskbar app contextmenu click')
      }
    }
  }
</script>
