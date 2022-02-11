<template>
  <div class="nav">
    <router-link class="menu" to="/">Ürün Listesi</router-link>
    <router-link class="menu" to="/urun-islemleri">Ürün İşlemleri</router-link>
    <router-link class="menu" to="/urun-cikisi">Ürün Çıkışı</router-link>
  </div>
</template>

<script>
export default {
    name:"Navbar",
};
</script>

<style scoped>
.nav {
  height: 45px;
  background-color: rgb(117, 3, 194);
  display: flex;
  align-items: center;
}

.menu {
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin-left: 15px;
}
</style>