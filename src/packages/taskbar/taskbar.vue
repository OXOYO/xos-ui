<template>
  <div :class="['x-taskbar', 'x-taskbar_' + mode + '_' + size ]">
    <div class="x-taskbar__background" :style="backgroundStyle"></div>
    <div class="x-taskbar__content">
      <h1>TODO taskbar</h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Taskbar',
    props: {
      mode: {
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].includes(value)
        }
      },
      size: {
        type: String,
        default: 'medium',
        validator (value) {
          return ['large', 'medium', 'small', 'mini'].includes(value)
        }
      },
      wallpaper: {
        type: Object,
        default () {
          return {
            image: '',
            color: ''
          }
        }
      }
    },
    computed: {
      backgroundStyle () {
        const { image, color } = this.wallpaper
        const style = {}
        if (image) {
          style.backgroundImage = `url(${image})`
        } else if (color) {
          style.backgroundColor = color
        }
        return style
      }
    }
  }
</script>
