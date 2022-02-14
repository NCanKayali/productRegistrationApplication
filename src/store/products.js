import Axios from "axios";


const state = {
    productList: []
}

const getters = {

}


const mutations = {
    setProductList(state, payLoad) {
        state.productList.unshift(payLoad)
    }
}


const actions = {
    saveProduct({ commit , dispatch }, product) {
        Axios.post("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products.json", product)
            .then((response) => {
                product.id = response.data.name
                commit("setProductList", product)
            })

           //  Set purchase, sale and balance in footer

           let tradeResult = {
               purchase: product.productPrice,
               sale:0,
               count: product.productPiece
           };

           dispatch("setTradeResult", tradeResult)

    }
}




export default {
    state,
    getters,
    mutations,
    actions
}