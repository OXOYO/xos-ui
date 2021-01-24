<template>
  <div class="x-desktop" @contextmenu.stop="onContextmenu">
    <!-- 边栏 -->
    <div
      v-for="name in bars"
      :key="name"
      :class="'bar_' + name"
    >
      <slot :name="name"></slot>
    </div>
    <!-- 触发角 -->
    <div
      v-for="name in corners"
      :key="name"
      :class="'corner_' + name"
      @mouseover="onCornerHover(name)"
    >
      <slot :name="name"></slot>
    </div>
    <!-- 主体内容 -->
    <div class="x-desktop-content">
      <slot></slot>
    </div>
    <!-- 壁纸 -->
    <div v-if="wallpaper" class="wallpaper">
      <slot name="wallpaper"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Desktop',
    props: {
      bars: {
        type: Array,
        default () {
          return ['top', 'right', 'bottom', 'left']
        }
      },
      corners: {
        type: Array,
        default () {
          return ['top-left', 'top-right', 'bottom-right', 'bottom-left']
        }
      },
      wallpaper: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {}
    },
    methods: {
      onContextmenu () {
        console.log('onContextmenu')
      },
      onCornerHover (name) {
        console.log('onCornerHover', name)
      }
    }
  }
</script>
