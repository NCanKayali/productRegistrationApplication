<template>
  <div class="urun-listesi">
    <div v-if="showMe" class="no-products">
      <h2>Ürün Listesi</h2>
      <div class="line"></div>
      <div class="content">
        <h5>Henüz Burada Bir Kayıt Bulamadık</h5>
        <p>
          Kayıt eklemek için
          <a href="/urun-islemleri">Ürün İşlemleri</a> menüsünden
          yararlanabilirsiniz
        </p>
      </div>
    </div>

    <div v-else class="list-table">
      <h2>Ürün Listesi</h2>
      <div class="line"></div>
      <table>
        <tr>
          <th>İd</th>
          <th>Ürün Adı</th>
          <th>Adet</th>
          <th>Fiyat</th>
          <th>Açıklama</th>
        </tr>
        <tbody>
          <tr v-for="(product, index) in hasProduct" :key="index">
            <td>238472847</td>
            <td>{{ product.productName }}</td>
            <td>{{ product.productPiece }}</td>
            <td class="color">{{ product.productPrice }}</td>
            <td>{{ product.productDescription }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMe: true,
      hasProduct: "",
    };
  },
  mounted() {
    if (this.$store.state.productsList.length) {
      this.hasProduct = this.$store.state.productsList;
      this.showMe = false;
    }
  },
  computed:{
    // changeColor(){

    // }
  }
};
</script>

<style>
.urun-listesi {
  margin: 0;
  padding: 0;
  height: 600px;
}
h2,
h5,
p {
  margin: 0;
  padding: 0;
}

.no-products {
  width: 700px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(231, 231, 231);
  box-shadow: 0 0 12px 1px black;
}

.line {
  border-bottom: 1px solid rgb(202, 200, 200);
  margin: 10px 0;
}

.content {
  background-color: wheat;
  padding: 10px 20px;
}

.list-table {
  background-color: white;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding: 15px 20px 25px 20px;
}
table{
width: 700px;
text-align: center;
}

table,th, td{
  border: 1px solid rgb(172, 172, 172);
  border-collapse: collapse;
}

th{
  padding: 10px;
  text-align: left;
}

td{
  padding: 15px;
  background-color: #c7c7c7;
}
</style>