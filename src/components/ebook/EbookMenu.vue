<template>
  <transition name="side-up">
    <div class="menu" v-show="menuVisible">
      <div class="icon-wrapper">
        <span class="icon-menu"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-progress"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-bright"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-A"></span>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'EbookMenu',
    computed: {
      ...mapGetters(['menuVisible'])
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/global.scss';

  .menu {
    width: 100%;
    height: px(48);
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #fff;
    box-shadow: 0 px(-8) px(8) rgba(0, 0, 0, .15);
    z-index: 151;
    font-size: px(25);
    .icon-wrapper {
      flex:1;
      @include center;
      .icon-progress{
        font-size: px(30);
      }
    }
  }
</style>
