<template>
  <div id="app">
    <NavBar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  created() {
    this.$store.dispatch("getTradeResult");
    this.$store.dispatch("product/initApp")
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #929292;
  height: 650px;
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
  transition: opacity .7s ease-in-out;
  opacity: 0;
}
</style>
