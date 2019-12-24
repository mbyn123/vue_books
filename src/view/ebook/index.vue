<template>
    <div calss="ebook">
      <EbookTitle></EbookTitle>
      <EbookReader></EbookReader>
      <EbookMenu></EbookMenu>
    </div>
</template>

<script>
import EbookReader from '../../components/ebook/EbookReader.vue'
import EbookMenu from '../../components/ebook/EbookMenu'
import EbookTitle from '../../components/ebook/EbookTitle'
export default {
  name: 'index',
  components: {
    EbookReader,
    EbookMenu,
    EbookTitle
  }
}
</script>

<style scoped lang="scss">
.ebook{
  position: relative;
  left: 0;
  top:0;
  width:100%;
  height:100%;
  overflow: hidden;
}
</style>
