<template>
  <transition name="popup-slide-up">
  <div class="font-family" v-show="fontFamilyVisible">
    <div class="font-family-list-title">
      <div class="family-list-title-icon" @click="hide">
        <span class="icon-down2"></span>
      </div>
      <div class="family-list-title-text">{{$t('book.selectFont')}}</div>
    </div>
    <div>
      <div class="font-family-list">
        <div class="font-family-list-item" v-for="(item ,index) in fontFamily" :key="index"
             @click="setFamily(item.font)">
          <div class="font-family-list-item-text" :class="{'selected':isSelected(item.font)}">{{item.font}}</div>
          <div class="font-family-list-item-icon" v-show="isSelected(item.font)">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import { FONT_FAMILY_LIST } from '../../utils/book'
  import { saveFontFamily } from '../../utils/localStorage'

  export default {
    name: 'EbookSettingFontPopup',
    mixins: [ebookMixin],
    data () {
      return {
        fontFamily: FONT_FAMILY_LIST
      }
    },
    methods: {
      // 改变默认字体风格
      setFamily (font) {
        // 将字体风格存入，localStroge中
        saveFontFamily(this.fileName, font)
        // 更新vuex中的默认字体风格
        this.setDefaultFontFamily(font)
        // 改变电子书的默认字体风格
        if (font === 'Default') {
          this.currentBook.rendition.themes.font('Times New Roman')
        } else {
          this.currentBook.rendition.themes.font(font)
        }
      },
      // 改变选中字体菜单项的样式
      isSelected (font) {
        return this.defaultFontFamily === font
      },
      // 关闭菜单
      hide () {
        this.setFontFamilyVisible(false)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/global.scss';

  .font-family {
    background: #fff;
    box-shadow: 0 px(-8) px(8) rgba(0, 0, 0, .15);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 152;
    .font-family-list-title {
      display: flex;
      font-size: px(18);
      border-bottom: 1px solid #ccc;
      padding: px(5) 0;
      .family-list-title-icon {
        padding: px(5);
      }
      .family-list-title-text {
        flex: 1;
        @include center
      }
    };
    .font-family-list {
      font-size: px(18);
      .font-family-list-item {
        display: flex;
        padding: px(5);
        .font-family-list-item-text {
          flex: 1;
          &.selected {
            color: #346cb9;
            font-weight: bold;
          }
        ;
        };
        .font-family-list-item-icon {
          .icon-check {
            color: #346cb9;
            font-weight: bold;
          }
        }
      }
    }
  }

</style>
