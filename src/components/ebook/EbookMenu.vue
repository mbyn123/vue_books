<template>
  <div>
    <transition name="side-up">
      <div class="menu" :class="{'hind-box-show':settingVisible >= 0}" v-show="menuVisible">
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
          <span class="icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <EbookSettingFont></EbookSettingFont>
    <EbookSettingFontPopup></EbookSettingFontPopup>
  </div>
</template>

<script>
  import EbookSettingFont from '../../components/ebook/EbookSettingFont'
  import EbookSettingFontPopup from '../../components/ebook/EbookSettingFontPopup'
 import { ebookMixin } from '../../utils/mixin'

 export default {
    name: 'EbookMenu',
    mixins: [ebookMixin],
    components: {
      EbookSettingFont,
      EbookSettingFontPopup
    },
   methods: {
      // 点击打开，修改字体大小的功能栏
      showSetting (key) {
        this.setSettingVisible(key) // 修改字体大小功能栏的状态，显示
      }
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
    &.hind-box-show {
      box-shadow: none
    }
    .icon-wrapper {
      flex:1;
      @include center;
      .icon-progress{
        font-size: px(30);
      }
    }
  }
</style>
