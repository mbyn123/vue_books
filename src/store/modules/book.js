const book = {
  state: {
    fileName: '',
    menuVisible: false, // 菜单栏，标题栏是否隐藏
    settingVisible: -1, // 四个设置栏，是否隐藏 0 字体设置栏 1 主题设置栏 2 进度条设置栏 3目录设置栏
    defaultFontSize: 16, // 默认字体大小
    currentBook: null, // 当前电子书对象
    defaultFontFamily: 'Default', // 默认字体风格
    fontFamilyVisible: false, // 字体风格设置栏，是否隐藏
    defaultTheme: 'Default' // 默认选中主题
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
    },
    'SET_DEFAULTTHEME': (state, defaultTheme) => {
      state.defaultTheme = defaultTheme
    }
  }
}

export default book
