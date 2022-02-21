import Axios from "axios";
import router from "../../router/index"


const state = {
    productList: [],
}

const getters = {
    getProductList: state => state.productList,
    getProduct(state) {
        return key => state.productList.filter(item => {
            return item.key == key
        })
    }
}


const mutations = {
    setProductList(state, product) {
        state.productList.push(product)
    }
}

const actions = {

    productSell({ state }, payLoad) {

        //payLoad içinde key:this.selectedProductKey,count: this.productCount var 

        let product = state.productList.filter(element => {
            return element.key == payLoad.key;
        })
        if (product) {

            let totalCount = product[0].productPiece - payLoad.count

            Axios.patch("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products/" + payLoad.key + "/" + ".json", { productPiece: totalCount })

            product[0].productPiece = totalCount
        }
    },

    initApp({ commit }) {
        Axios.get("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products.json")
            .then(response => {
                let data = response.data
                for (let key in data) {
                    data[key].key = key;
                    commit("setProductList", data[key])
                }
            })

    },
    saveProduct({ commit }, product) {

        // kaydet buttonuna tıklayınca saveProduct çalışır.
        //firebase product objesine inputa girilen değerler post metodu ile gönderilir.

        Axios.post("https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products.json", product)

        //Mutations'da tanımlı setProductList'a inputtan alınan product verileri atıldı.

        commit("setProductList", product)

        //  Set purchase, sale and balance in footer
        //  tradeResult isimli bir obje oluşturuldu ve obje içerisine product verileri içerisindeki adet ve fiyat bilgisi eklendi
        //  Sale, default 0 olarak tanımlandı.

        //saveProduct çağrıldığında router'ın ana path'e gitmesi için replace kullanıldı

        router.replace("/")

    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}