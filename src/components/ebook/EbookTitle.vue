<template>
  <transition name="side-down">
    <div class="title" v-show="menuVisible">
      <div class="icon-wrapper">
        <span class="icon-back"></span>
      </div>
      <div class="icon-setting">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'

  export default {
    name: 'EbookTitle',
    mixins: [ebookMixin]
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/global.scss';

  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: px(48);
    background: #fff;
    box-shadow: 0 px(8) px(8) rgba(0, 0, 0, .15);
    z-index: 151;
    display: flex;
    font-size: px(25);

    .icon-wrapper {
      @include center;
      padding: 0 px(10);
    }

    .icon-setting {
      flex: 1;
      @include right;
    }
  }

</style>
