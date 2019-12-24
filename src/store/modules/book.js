const book = {
  state: {
    menuVisible: false
  },
  mutations: {
    'SET_MENU_VISIBLE': (state, visible) => {
      state.menuVisible = visible
   }
  }
}

export default book
