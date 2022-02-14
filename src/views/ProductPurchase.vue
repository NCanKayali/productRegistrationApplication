<template>
  <div class="urun-islemleri">
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
        @click.prevent="saved"
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
    };
  },
  methods: {
    saved() {
      this.$store.dispatch("saveProduct", this.product);
      this.resetInput();
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
  },
  beforeRouteLeave(to, from, next) {
    if (
      this.product.productName.length > 0 ||
      this.product.productPiece > 0 ||
      this.product.productPiece > 0 ||
      this.product.productDescription.length > 0
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
</style>