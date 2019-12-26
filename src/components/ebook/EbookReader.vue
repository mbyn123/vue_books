<template>
  <div class="EbookReader">
    <div id="read"></div>
    <div class="ebook-reader-mask"
         @touchstart="starts"
         @touchend="ends"
    ></div>
  </div>
</template>

<script>
  import Epub from 'epubjs'
  import { ebookMixin } from '../../utils/mixin'
import { getFontFamily, saveFontFamily,getFontSize,saveFontSize } from '../../utils/localStorage'
  export default {
    name: 'EbookReader',
    mounted () {
      const fileName = this.$route.params.fileName.split('|').join('/')// 动态路由，以书籍名称作为路径，来实现访问
      // 将当前电子书资源路径，存入vuex中，然后调用initEpub()方法，渲染弟子书
      this.setFileName(fileName).then(() => {
        this.initEpub()
      })
    },
    mixins: [ebookMixin],
    methods: {
      // 渲染电子书
      initEpub () {
        //获取电子书资源路径
        const url = 'http://192.168.8.110:8081/epub/BusinessandManagement/' + this.fileName + '.epub'
        // 生成book
        this.book = new Epub(url)
        this.setCurrentBook(this.book) // 将当前book对象传入vuex,可以让其他功能获取到这个对象，更改电子书默认配置
        // 生成rendition，用来渲染
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        // 加载电子书字体风格的样式文件
        this.rendition.hooks.content.register(contents => {
          Promise.all([
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/daysOne.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/cabin.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/montserrat.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/font/tangerine.css`)
          ])
        })
        // 通过rendition.display渲染，加载，初始化电子书，并从localStroge中获取到当前弟子书的相关配置
        this.rendition.display().then(() => {
          //获取缓存中的电子书字体风格配置
          this.initFontFamily()
          //获取缓存中的电子书字体大小配置
          this.initFontSize()
        })
      },
      // 触摸开始，翻页
      starts (event) {
        this.touchStartX = event.changedTouches[0].clientX // 开始触摸的位置
        this.touchStartTime = event.timeStamp // 触摸时间
      },
      // 触摸结束，翻页
      ends (event) {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX
        const time = event.timeStamp - this.touchStartTime
        if (offsetX > 40 && time < 500) {
          this.renditionPrev()
        } else if (offsetX < -40 && time < 500) {
          this.renditionNext()
        } else {
          this.hideMenuAndTitle()
        }
        event.preventDefault()
        event.stopPropagation()
      },
      // 上一页
      renditionPrev () {
        this.rendition.prev()
      },
      // 下一页
      renditionNext () {
        this.rendition.next()
      },
      // 菜单栏，显示隐藏
      hideMenuAndTitle () {
        this.setMenuVisible(!this.menuVisible)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      // 从缓存中获取电子书的字体风格配置
      initFontFamily () {
        let fontFamily = getFontFamily(this.fileName)
        if (!fontFamily) {
          saveFontFamily(this.fileName, this.defaultFontFamily)
        } else {
          this.rendition.themes.font(fontFamily)
          this.currentBook.rendition.themes.font(fontFamily)
          this.setDefaultFontFamily(fontFamily)
        }
      },
      // 从缓存中获取电子书的字体大小配置
      initFontSize(){
        let fontSize = getFontSize(this.fileName)
        if (!fontSize) {
          saveFontSize(this.fileName, this.defaultFontFamily)
        } else {
          this.rendition.themes.fontSize(fontSize)
          this.setDefaultFontSize(fontSize)
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/style/global";

  .EbookReader {
    width: 100%;
    height: 100%;

    .ebook-reader-mask {
      position: absolute;
      top: 0;
      left: 0;
      background: transparent;
      z-index: 150;
      width: 100%;
      height: 100%;
    }
  }

</style>
