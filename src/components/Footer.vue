<template>
  <div class="footer">
    <h2 class="left">Can Kayalı</h2>
    <div class="right">
      <p>
        Alış Tutarı:
        <span class="red">{{ purchasePrice }} TL</span>
      </p>
      <p>Satış Tutarı: <span class="green">{{}} TL</span></p>
      <p>Bakiye: <span class="blue">{{}} TL</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    purchasePrice() {
      let totalPurchase = 0;
      const productList = this.$store.state.productsList;
      productList.forEach((item) => {
        totalPurchase += item.productPiece * item.productPrice;
      });
      return totalPurchase;
    },
  },
  created() {
    console.log(this.purchasePrice);
  },
};
</script>

<style>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: rgb(146, 193, 247);
}

.left {
  margin-left: 10px;
}

.right {
  display: flex;
  margin-right: 10px;
}
</style>