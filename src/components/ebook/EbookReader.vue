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
  import { mapGetters } from 'vuex'
  export default {
    name: 'EbookReader',
    mounted () {
      this.initEpub()
    },
    computed: {
      ...mapGetters(['menuVisible'])
    },
    methods: {
      // 渲染电子书
      initEpub () {
        //获取电子书资源路径
        const fileName = this.$route.params.fileName.split('|').join('/')// 动态路由，以书籍名称作为路径，来实现访问
        const url = 'http://192.168.8.110:8081/epub/Biomedicine/' + fileName + '.epub'
        // 生成book
        this.book = new Epub(url)
        console.log(this.book)
        // 生成rendition，用来渲染
        this.rendition = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default'
        })
        // 通过rendition.display渲染电子书
        this.rendition.display()
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
        this.$store.dispatch('setMenuVisible', !this.menuVisible)
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
