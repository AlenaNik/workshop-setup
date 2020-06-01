import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    emoji: []
  },
  mutations: {
    INCREMENT_EMOJI(state, value) {
      state.emoji.push(value)
    }
  },
  actions: {
    updateEmoji({state, commit}, value) {
      if(state.emoji) {
        commit('INCREMENT_EMOJI', value)
      }
    }
  },
  modules: {}
})
