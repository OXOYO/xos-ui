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
        default: 'cover',
        validator (value) {
          return ['auto', 'contain', 'cover'].includes(value)
        }
      },
      repeat: {
        type: String,
        default: 'no-repeat',
        validator (value) {
          return ['repeat-x', 'repeat-y', 'repeat', 'space', 'round', 'no-repeat'].includes(value)
        }
      },
      position: {
        type: String,
        default: 'center'
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
        if (this.repeat) {
          style.backgroundRepeat = this.repeat
        }
        style.backgroundPosition = this.position
        return style
      }
    }
  }
</script>
