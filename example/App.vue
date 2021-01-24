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
  <div class="xos">
    <XDesktop>
      <div slot="top">top</div>
      <div slot="right">right</div>
      <div slot="bottom">bottom</div>
      <div slot="left">left</div>
      <div slot="top-left">C1</div>
      <div slot="top-right">C2</div>
      <div slot="bottom-left">C3</div>
      <div slot="bottom-right">C4</div>
      <h1>TODO Desktop Content</h1>
    </XDesktop>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>
