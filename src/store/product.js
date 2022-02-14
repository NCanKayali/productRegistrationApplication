import Axios from "axios";
import router from "../router/index"


const state = {
    productList: [],
}

const getters = {
    getProductList(state){
        return state.productList
    },
    getMyName(state){
       return state.myName
    }

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
                console.log(product)
                commit("setProductList", product)
            })

           //  Set purchase, sale and balance in footer

           let tradeResult = {
               purchase: product.productPrice,
               sale:0,
               count: product.productPiece
           };

           dispatch("setTradeResult", tradeResult)
           router.replace("/")

    }
}




export default {
    state,
    getters,
    mutations,
    actions
}