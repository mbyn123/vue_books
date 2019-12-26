<template>
  <div>
    <transition name="side-up">
      <div class="menu-wrapper" :class="{'hind-box-show':settingVisible >= 0}" v-show="menuVisible">
        <!-- 目录 -->
        <div class="icon-wrapper">
          <span class="icon-menu"></span>
        </div>
        <!-- 设置进度 -->
        <div class="icon-wrapper">
          <span class="icon-progress"></span>
        </div>
        <!-- 设置主题 -->
        <div class="icon-wrapper" @click="showSetting(1)">
          <span class="icon-bright"></span>
        </div>
        <!-- 设置字体 -->
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <!-- 字体大小，组件 -->
    <EbookSettingFont/>
    <!-- 字体风格，组件 -->
   <EbookSettingFontPopup/>
    <!-- 阅读器主题，组件 -->
   <EbookSettingTheme/>
  </div>
</template>

<script>
  import EbookSettingFont from '../../components/ebook/EbookSettingFont'
  import EbookSettingFontPopup from '../../components/ebook/EbookSettingFontPopup'
  import EbookSettingTheme from '../../components/ebook/EbookSettingTheme'
 import { ebookMixin } from '../../utils/mixin'

 export default {
    name: 'EbookMenu',
    mixins: [ebookMixin],
    components: {
      EbookSettingFont,
      EbookSettingFontPopup,
      EbookSettingTheme
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

  .menu-wrapper {
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
