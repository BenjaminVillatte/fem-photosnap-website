export const state = () => ({
  menuOpened: false
})

export const getters = {
  isMenuOpened(state) {
    return state.menuOpened
  }
}

export const mutations = {
  TOGGLE(state) {
    state.menuOpened = !state.menuOpened
  },
  SET(state, value) {
    state.menuOpened = value
  }
}

export const actions = {
  toggle({commit}) {
    commit('TOGGLE')
  },
  closeMenu({commit}) {
    commit('SET', false)
  }
}