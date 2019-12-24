<template>
    <transition name="side-up">
      <div class="font-bar" v-show="menuVisible && settingVisible === 0">
        <div class="setting-font-size">
          <div class="preview" :style="{fontSize:fontSizeList[0].fontSize+'px'}">A</div>
          <div class="select">
            <div class="select-wrapper" v-for="item in fontSizeList" :key="item.index" @click="setFontSize(item.fontSize)">
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize === item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview" :style="{fontSize:fontSizeList[fontSizeList.length-1].fontSize+'px'}">A</div>
        </div>
      </div>
    </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import { FONT_SIZE_LIST } from '../../utils/book'

  export default {
    name: 'EbookSettingFont',
    mixins: [ebookMixin],
    data () {
      return {
        fontSizeList: FONT_SIZE_LIST
      }
    },
    methods: {
      // 点击改变，电子书默认字体大小
      setFontSize (fontsize) {
        // 改变默认字体大小
        this.setDefaultFontSize(fontsize)
        // 从vuex中获取到当前book对象，更改默认字体配置
        this.currentBook.rendition.themes.fontSize(fontsize)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/global.scss';
.font-bar{
  width:100%;
  height:px(60);
  background: #fff;
  box-shadow: 0 px(-8) px(8) rgba(0, 0, 0, .15);
  position: absolute;
  bottom:px(48);
  left:0;
  z-index: 150;
  .setting-font-size{
    /*flex: 2;*/
    display: flex;
    height: 100%;
    .preview {
      flex: 0 0 px(40);
      @include center;
    };
    .select {
      flex:1;
      display: flex;
      .select-wrapper {
        display: flex;
        align-items: center;
        flex: 1;
        &:first-child {
          .line {
            &:first-child {
              border-top: none;
            }
          }
        }
        &:last-child {
          .line {
            &:last-child {
              border-top: none;
            }
          }
        }
        .line {
          height:0;
          border-top: px(1) solid #ccc;
          flex: 1;
        }
        .point-wrapper {
          position: relative;
          /*flex: 0 0 0;*/
          width: 0;
          height: px(7);
          border-left: px(1) solid #ccc;
          .point {
            position: absolute;
            top:px(-8);
            left:px(-10);
            width:px(20);
            height:px(20);
            border-radius: 50%;
            background: #fff;
            box-shadow:0 px(4) px(4) rgba(0,0,0,.15);
            @include center;
            .small-point {
              width:px(5);
              height: px(5);
              background: #333;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
}
</style>
