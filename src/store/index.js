import Vue from 'vue'
import Vuex from 'vuex'
import Products from "./products"
import Axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Products
  },

  state: {
    purchase: 0.0,
    sale: 0.0,
    balance: 0.0

  },

  getters: {
    getTradeResult(state) {
      return {
        purchase: state.purchase,
        sale: state.sale,
        balance: state.balance
      }
    }
  },

  mutations: {
    uptadeTradeResult(state, payLoad) {
      if (payLoad.count) {

        state.purchase += parseFloat(payLoad.purchase) * parseInt(payLoad.count);
        state.sale += parseFloat(payLoad.sale) * parseInt(payLoad.count);

      }else{

        state.purchase += parseFloat(payLoad.purchase) ;
        state.sale += parseFloat(payLoad.sale) ;

      }

      state.balance += parseFloat(state.sale) - parseFloat(state.purchase);

    }
  },

  actions: {
    setTradeResult({ state, commit }, tradeResult) {
      commit("uptadeTradeResult", tradeResult);

      let tradeData = {
        purchase: state.purchase,
        sale: state.sale
      }
      Axios.put("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products.json", tradeData)
      // .then(response => {
      //   console.log(response)
      // })
    },

    getTradeResult({ commit }) {
      Axios.get("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products.json")
        .then(response => {
          commit("uptadeTradeResult",response.data)
        })
    }
  },
})
