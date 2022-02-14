<template>
  <div class="urun-islemleri">
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <form class="product-form">
      <h2>Ürün İşlemleri</h2>
      <div class="line"></div>
      <label for="name">Ürün Adı</label>
      <input
        type="text"
        id="name"
        placeholder="Ürün adını giriniz..."
        v-model="product.productName"
      />

      <label for="piece">Adet</label>
      <input
        type="number"
        id="piece"
        placeholder="Ürün adedini giriniz..."
        v-model.number="product.productPiece"
      />

      <label for="price">Ürünün Fiyatı</label>
      <input
        type="number"
        id="price"
        placeholder="Ürün fiyatını giriniz..."
        v-model.number="product.productPrice"
      />

      <label for="description">Açıklama</label>
      <textarea
        name="description"
        id="description"
        placeholder="Ürüne ait bir açıklama giriniz"
        v-model="product.productDescription"
      ></textarea>
      <button
        class="btn"
        :class="{ active: !checkInputLength }"
        :disabled="checkInputLength"
        @click="saved"
      >
        Kaydet
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        productName: "",
        productPiece: null,
        productPrice: null,
        productDescription: "",
      },
      wasButtonClicked: false,
    };
  },
  methods: {
    saved() {
      this.wasButtonClicked = true;
      this.$store.dispatch("saveProduct", this.product);
      // this.resetInput();
    },

    resetInput() {
      this.productsList.productName = "";
      this.productsList.productPiece = "";
      this.productsList.productPrice = "";
      this.productsList.productDescription = "";
    },
  },
  computed: {
    checkInputLength() {
      if (
        this.product.productName.length > 0 &&
        this.product.productPiece > 0 &&
        this.product.productPiece > 0 &&
        this.product.productDescription.length > 0
      ) {
        return false;
      } else {
        return true;
      }
    },
    isLoading() {
      if (this.wasButtonClicked) {
        return {
          display: "inline",
        };
      } else {
        return {
          display: "none",
        };
      }
    },
  },
  beforeRouteLeave(to, from, next) {
    if (
      (this.product.productName.length > 0 ||
        this.product.productPiece > 0 ||
        this.product.productPiece > 0 ||
        this.product.productDescription.length > 0) &&
      !this.wasButtonClicked
    ) {
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
  },
};
</script>

<style >
.urun-islemleri {
  margin: 0;
  padding: 0;
  height: 600px;
}

.product-form {
  background-color: rgb(226, 226, 226);
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 470px;
  padding: 30px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
}

.line {
  border-bottom: 1px solid rgb(202, 200, 200);
  margin: 10px 0;
}
label {
  margin-bottom: 15px;
}
input {
  margin-bottom: 10px;
  height: 30px;
}
textarea {
  height: 100px;
}

.btn {
  width: 60px;
  height: 25px;
  padding: 5px;
  border: none;
  border-radius: 2px;
  background-color: rgb(107, 165, 231);
  color: white;
  margin-top: 30px;
}

.active {
  background-color: rgb(54, 139, 236);
}

/* LOADİNG SCREAN */

.loading {
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999999;
}
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  top: calc(100% / 2);
  left: calc(100% / 2);
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}

@keyframes lds-ripple {
  0% {
    top: 28px;
    left: 28px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: -1px;
    left: -1px;
    width: 58px;
    height: 58px;
    opacity: 0;
  }
}
</style>