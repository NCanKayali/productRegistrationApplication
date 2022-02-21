<template>
  <div class="product-sell">
    <form class="sell-form">
      <h2>Ürün Çıkışı</h2>
      <hr />
      <div class="product-show">
        <label class="product-name" for="">Ürün Adı :</label><br />
        <select
          class="show-select"
          v-model="selectedProductKey"
          @change="productChanced"
        >
          <option selected disabled>Lütfen bir ürün seçin...</option>
          <option
            v-for="(item, index) in getProductList"
            :key="index"
            :value="item.key"
            :disabled="item.count == 0"
          >
            {{ item.productName }}
          </option>
        </select>
      </div>
      <transition name="fade" mode="out-in">
        <div class="selected-product">
          <div class="piece-and-priece">
            <span class="orange">Stok:{{ selectedProduct.productPiece }}</span>
            <span class="red"
              >Fiyat:{{ selectedProduct.productPrice | currency }}</span
            >
          </div>
          <p class="product-description">
            {{ selectedProduct.productDescription }}
          </p>
        </div>
      </transition>
      <h3>Adet:</h3>
      <input
        v-model="productCount"
        placeholder="Satış miktarı giriniz"
        class="count-input"
        type="number"
      />
      <br />
      <button @click.prevent="sellProccess" class="save-btn">Kaydet</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Axios from "axios";

export default {
  data() {
    return {
      selectedProductKey: "",
      selectedProduct: "",
      productCount: null,
      wasButtonClicked:false
    };
  },
  computed: {
    ...mapGetters("product", ["getProductList"]),
  },
  methods: {
    productChanced() {
      Axios.get(
        "https://urun-ekleme-uygulamasi-default-rtdb.firebaseio.com/products.json"
      ).then((response) => {
        this.selectedProduct = response.data[this.selectedProductKey];
      });
    },

    sellProccess() {
      let product = {
        key: this.selectedProductKey,
        count: this.productCount,
      };
      this.$store.dispatch("product/productSell", product);
      this.wasButtonClicked = true
      this.$router.push("/");
    },
  },
    beforeRouteLeave(to, from, next) {
    if (this.selectedProduct.length > 0 && this.productCount > 0 && !this.wasButtonClicked) {
      if (
        confirm(
          "Kayıt edilmemiş değişiklikler var. Çıkarsanız veriler silincek kabul ediyor musunuz?"
        )
      ) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
}}
</script>

<style>
.save-btn {
  background-color: green;
  color: white;
  margin: 15px 0;
  width: 100px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.count-input {
  width: 300px;
  margin-left: 20px;
}

h3 {
  margin: 10px 10px 10px 5px;
  padding: 0;
}
.product-sell {
  margin: 0;
  padding: 0;
  min-height: 645px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.sell-form {
  width: 500px;
  min-height: 320px;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
}

.orange {
  background-color: orange;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.product-show {
  padding: 20px 10px;
}
.product-name {
  font-weight: 700;
}

.show-select {
  width: 400px;
  height: 25px;
  margin-left: 40px;
  margin-top: 10px;
}
.selected-product {
  border: 2px dashed orange;
  min-height: 150px;
}

.piece-and-priece {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.piece-and-priece span {
  margin-left: 20px;
}
.product-description {
  margin: 10px 20px;
  min-height: 70px;
  border: 2px solid rgb(0, 153, 255);
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
  opacity: 0;
}
</style>