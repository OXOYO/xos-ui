<template>
  <div :class="['x-taskbar', 'x-taskbar_mode__' + mode, 'x-taskbar_size__' + size ]">
    <div class="x-taskbar__background" :style="backgroundStyle"></div>
    <div class="x-taskbar__content" :style="contentStyle">
      <TaskbarApp
        v-for="(item, index) in apps"
        :key="index"
        :info="item"
        :index="index"
      ></TaskbarApp>
    </div>
  </div>
</template>

<script>
  import TaskbarApp from './taskbar-app'
  export default {
    name: 'Taskbar',
    components: {
      TaskbarApp
    },
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
      },
      // 应用列表
      apps: {
        type: Array
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
      },
      contentStyle () {
        return {}
      }
    }
  }
</script>
