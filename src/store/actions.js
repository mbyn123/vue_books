const actions = {
 setFileName: ({ commit }, filename) => {
   return commit('SET_FILENAME', filename)
 },
 setMenuVisible: ({ commit }, visible) => {
  return commit('SET_MENU_VISIBLE', visible)
 },
 setSettingVisible: ({ commit }, settingVisible) => {
  return commit('SET_SETTINGVISIBLE', settingVisible)
 },
  setDefaultFontSize: ({ commit }, defaultFontSize) => {
   return commit('SET_DEFAULTFONTSIZE', defaultFontSize)
  },
  setCurrentBook: ({ commit }, currentBook) => {
   return commit('SET_CURRENTBOOK', currentBook)
  },
  setDefaultFontFamily: ({ commit }, defaultFontFamily) => {
   return commit('SET_DEFAULTFONTFAMILY', defaultFontFamily)
  },
  setFontFamilyVisible: ({ commit }, fontFamilyVisible) => {
   return commit('SET_FONTFAMILYVISIBLE', fontFamilyVisible)
  }
}
export default actions
