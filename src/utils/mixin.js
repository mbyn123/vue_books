import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'menuVisible',
      'fileName',
      'settingVisible',
      'defaultFontSize',
      'currentBook'
    ])
  },
  methods: {
    ...mapActions([
      'setMenuVisible',
      'setFileName',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook'
    ])
  }
}
