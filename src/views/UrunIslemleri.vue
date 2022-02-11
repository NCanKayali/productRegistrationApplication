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
        v-model="productsList.productName"
      />

      <label for="piece">Adet</label>
      <input
        type="text"
        id="piece"
        placeholder="Ürün adedini giriniz..."
        v-model.number="productsList.productPiece"
      />

      <label for="price">Ürünün Fiyatı</label>
      <input
        type="text"
        id="price"
        placeholder="Ürün fiyatını giriniz..."
        v-model.number="productsList.productPrice"
      />

      <label for="description">Açıklama</label>
      <textarea
        name="description"
        id="description"
        placeholder="Ürüne ait bir açıklama giriniz"
        v-model="productsList.productDescription"
      ></textarea>
      <button class="btn" @click.prevent="saved">Kaydet</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productsList: {
        productName: "",
        productPiece: "",
        productPrice: "",
        productDescription: "",
      },
    };
  },
  methods: {
    saved() {
      if (
        this.productsList.productName &&
        this.productsList.productPiece &&
        this.productsList.productPrice &&
        this.productsList.productDescription
      )
      {

        if(this.productsList.productPiece && this.productsList.productPrice > 0 )
        {
          this.$store.commit("setProductsList", this.productsList);
        }
        
        else{
          confirm("ADET VE FİYAT BÖLÜMLERİ RAKAM OLMALI")
        }
      }
      
        else{
        confirm("BOŞ ALAN BIRAKILAMAZ")
      }
    },
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
  background-color: rgb(54, 139, 236);
  color: white;
  margin-top: 30px;
}
</style>