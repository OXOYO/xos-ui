<template>
  <div class="x-desktop">
    <!-- 边栏 -->
    <div
      v-for="name in bars"
      :key="name"
      :class="'bar_' + name"
      @contextmenu.stop.prevent="onContextmenu($event, { name: 'bar', position: name })"
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
    <div class="x-desktop__content" @contextmenu.stop.prevent="onContextmenu($event, { name: 'content' })">
      <slot></slot>
    </div>
    <!-- 壁纸 -->
    <div v-if="wallpaper" class="x-desktop__wallpaper">
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
      onContextmenu (e, params) {
        console.log('onContextmenu', e, params)
        /*
        const { name, position } = params
        switch (name) {
          case 'bar':

            break
          case 'content':

            break
        }
        */
      },
      onCornerHover (name) {
        console.log('onCornerHover', name)
      }
    }
  }
</script>
