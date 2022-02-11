import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsList: [],
  },
  getters: {
    purchasePrice(state) {
      console.log(state.productsList.productPiece)
    }
  },
  mutations: {
    setProductsList(state, payload) {
      state.productsList.unshift(payload)
    }
  },
  actions: {
  },
})
