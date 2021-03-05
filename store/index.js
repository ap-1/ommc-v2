export const state = () => ({
  authenticated: false,
})

export const mutations = {
  setUserState(state, value) {
    state.authenticated = value
  },
}
