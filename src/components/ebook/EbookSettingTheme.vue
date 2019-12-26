<template>
  <transition name="side-up">
    <div class="setting-wrapper" v-show=" menuVisible && settingVisible===1">
      <div class="setting-theme">
        <div class="setting-theme-item" v-for="(item,index) in themeList" :key="index" @click="setTheme(item.name)">
          <div class="preview" :style="{background:item.style.body.background}" :class="{'selected':item.name===defaultTheme}"></div>
          <div class="text">{{item.alias}}</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {ebookMixin} from '../../utils/mixin'
  import {saveTheme} from '../../utils/localStorage'

  export default {
    name: 'EbookSettingTheme',
    mixins: [ebookMixin],
    methods: {
      // 切换主题
      setTheme(name){
        // 改变vuex中的默认主题
        this.setDefaultTheme(name).then(() => {
          this.currentBook.rendition.themes.select(this.defaultTheme)//改变当前电子书的主题
        })
        // 保存主题设置，存入缓存中
        saveTheme(this.fileName,name)
        this.initGlobalStyle() // 设置全局主题，样式
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../assets/style/global.scss';
.setting-wrapper{
  background: #fff;
  position: absolute;
  bottom:px(48);
  left:0;
  width: 100%;
  box-shadow: 0 px(-8) px(8) rgba(0, 0, 0, .15);
  z-index: 150;
  .setting-theme{
    font-size: px(14);
    display: flex;
    .setting-theme-item{
      padding: px(5);
      flex:1;
      display: flex;
      flex-direction: column;
      .preview{
        height: px(50);
        &.selected{
          box-shadow: 0 px(1) px(3) 0 rgba(0, 0, 0, .50);
        }
      }
      .text{
        flex:1;
        text-align: center;
        padding-top: px(5);
      }
    }
  }
}
</style>
