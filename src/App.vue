<template>
  <div id="app">
    <span class='icon-en'></span>
    <span class='icon-menu'></span>
    <div class="text">abcfefg</div>
  </div>
</template>

<script>
export default {}
// rem适配
document.addEventListener('DOMContentLoaded', () => {
  const html = document.querySelector('html')
  let fontSize = window.innerWidth / 10
  fontSize = fontSize > 50 ? 50 : fontSize
  html.style.fontSize = fontSize + 'px'
})
</script>

<style lang="scss">
  @import './assets/style/global.scss';
  .icon-en {
    font-size: 30px;
    color: red
  }
  .text {
    font-family: 'cabin';
    font-size: px(45);
  }
</style>
