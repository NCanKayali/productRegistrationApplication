<template>
  <div class="nav">
    <router-link class="menu" active-class="ticking" exact to="/">Ürün Listesi</router-link>
    <router-link class="menu" active-class="ticking" to="/urun-islemleri">Ürün İşlemleri</router-link>
    <router-link class="menu" active-class="ticking" to="/urun-cikisi">Ürün Çıkışı</router-link>
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
  color: rgb(173, 173, 173);
  text-decoration: none;
  font-size: 18px;
  margin-left: 15px;
}

.ticking{
  color:rgb(255, 255, 255)
}
</style>