<template>
  <div class="footer">
    <h2 class="left">Can Kayalı</h2>
    <div class="right">
      <p>
        Alış Tutarı:
        <span class="red">{{ getTradeResult.purchase | currency }} TL</span>
      </p>
      <p>
        Satış Tutarı:
        <span class="green">{{ getTradeResult.sale | currency }} TL</span>
      </p>
      <p>
        Bakiye:
        <span class="blue">{{ getTradeResult.balance | currency }} TL</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapGetters(["getTradeResult"]),
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

.red {
  background-color: rgb(194, 2, 2);
  color: white;
  border-radius: 5px;
  padding: 0 5px;
  margin-right: 5px;
}

.green {
  background-color: green;
  color: white;
  border-radius: 5px;
  padding: 0 5px;
  margin-right: 5px;
}

.blue {
  background-color: blue;
  color: white;
  border-radius: 5px;
  padding: 0 5px;
  margin-right: 5px;
}
</style>