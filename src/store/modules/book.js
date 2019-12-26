const book = {
  state: {
    fileName: '',
    menuVisible: false, // 菜单栏，标题栏是否隐藏
    settingVisible: -1, // 字体大小设置栏，是否隐藏
    defaultFontSize: 16, // 默认字体大小
    currentBook: null, // 当前电子书对象
    defaultFontFamily: 'Default', // 默认字体风格
    fontFamilyVisible: false // 字体风格设置栏，是否隐藏
  },
  mutations: {
    'SET_FILENAME': (state, filename) => {
      state.fileName = filename
    },
    'SET_MENU_VISIBLE': (state, visible) => {
      state.menuVisible = visible
    },
    'SET_SETTINGVISIBLE': (state, settingVisible) => {
      state.settingVisible = settingVisible
    },
    'SET_DEFAULTFONTSIZE': (state, defaultFontSize) => {
      state.defaultFontSize = defaultFontSize
    },
    'SET_CURRENTBOOK': (state, currentBook) => {
      state.currentBook = currentBook
    },
    'SET_DEFAULTFONTFAMILY': (state, defaultFontFamily) => {
      state.defaultFontFamily = defaultFontFamily
    },
    'SET_FONTFAMILYVISIBLE': (state, fontFamilyVisible) => {
      state.fontFamilyVisible = fontFamilyVisible
    }
  }
}

export default book
