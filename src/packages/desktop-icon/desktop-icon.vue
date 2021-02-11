<template>
  <div
    :class="['x-desktop-icon', 'x-desktop-icon_size--' + size ]"
    @click="onClick"
    @contextmenu.stop.prevent="onContextmenu"
  >
    <div class="x-desktop-icon__icon">
      <img :src="icon">
    </div>
    <div class="x-desktop-icon__title">{{ title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'desktop-icon',
    props: {
      size: {
        type: String,
        default: 'medium',
        validator (value) {
          return ['large', 'medium', 'small', 'mini'].includes(value)
        }
      },
      icon: String,
      title: String
    },
    methods: {
      onClick () {
        console.log('desktop icon click')
      },
      onContextmenu () {
        console.log('desktop icon contextmenu')
      }
    }
  }
</script>
