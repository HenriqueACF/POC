<template>
  <div class="container">
    <div class="warning">
      <img class="img" src="../../assets/banpara.png" />
      <h5>
        Aguarde enquanto confirmamos <br />
        o seu pagamento.
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  created() {
    setTimeout(() => this.$router.push({ path: "/pagamentorealizado" }), 5000);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
.warning {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #081f60;
}
.img {
  width: 200px;
  height: 200px;
  margin-top: 50px;
}
</style>