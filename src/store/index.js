import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"
import product from "./modules/product"

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cost: 0,
    sale: 0,
    balance: 0,
  },

  getters: {
    getTradeResult(state) {
      return {
        purchase: state.cost,
        sale: state.sale,
        balance: state.balance,
      }
    },
    getProduct(){
      
    }
  },

  mutations: {
    // updateTradeResult ile tradeResult objesi içinde kontrol yapılarak state'deki purchase, sale, balance state'leri güncelenecek.

    uptadeTradeResult(state, payLoad) {

      //İf ile payLoad içerisinde count değeri bulunup bulunmadığı kontrol edilir.
      // payLoad.count var ise 

      if (payLoad.count) {

        //Maliyetin hesaplanması için adet fiyatı ile satın alış fiyatı çarpılıyor
        console.log(payLoad)
        state.cost += (payLoad.purchase * payLoad.count);
        state.sale += payLoad.sale * payLoad.count;


      } else {

        state.cost += payLoad.purchase;
        state.sale += parseFloat(payLoad.sale);

      }

      state.balance += parseFloat(state.sale) - parseFloat(state.cost);
    }
  },

  actions: {

    setTradeResult({ state, commit }, tradeResult) {

      // Mutations'da tanımlı olan uptadeTradeResult'a tradeResult objesi commit edildi.
      //tradeResult objesinin içinde purchase: product.productPrice, sale: 0, count: product.productPiece var.

      commit("uptadeTradeResult", tradeResult);

      //uptadeTradeResult ile state'deki cost,sale ve balance değerleri güncellendi.
      //Güncellemenin ardından tradeData objesinin içine cost ve sale değerleri atıyor :D 

      let tradeData = {
        purchase: state.cost,
        sale: state.sale
      }

      // firebase'e pruchase ve sale değerlerini put metodu ile yolluyoruz
      Axios.put("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/trade-result.json", tradeData)
        .then(response => console.log(response))
    },

    getTradeResult({ commit }) {
      Axios.get("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/trade-result.json")
        .then(response => {
          commit("uptadeTradeResult", response.data)
        })
    }
  },
  modules: {
    product
  },
})
