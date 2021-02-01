<template>
  <div class="x-wallpaper" :style="style"></div>
</template>

<script>
  export default {
    name: 'wallpaper',
    props: {
      image: String,
      color: String,
      size: {
        type: String,
        default: 'auto',
        validator (value) {
          return ['auto', 'contain', 'cover'].includes(value)
        }
      }
    },
    computed: {
      style () {
        const style = {}
        if (this.image) {
          style.backgroundImage = `url(${this.image})`
        }
        if (this.color) {
          style.backgroundColor = this.color
        }
        if (this.size) {
          style.backgroundSize = this.size
        }
        return style
      }
    }
  }
</script>
