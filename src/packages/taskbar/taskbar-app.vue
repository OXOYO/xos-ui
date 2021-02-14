<template>
  <div
    class="x-taskbar-app"
    @click="onClick"
    @contextmenu.stop.prevent="onContextmenu"
  >
    <div class="x-taskbar-app__icon" style="position: relative;">
      <img :src="info.icon">
      <span style="position: absolute; top: 0; left: 50%;">{{ index }}</span>
<!--      <span style="background: red;">{{ index }}</span>-->
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
