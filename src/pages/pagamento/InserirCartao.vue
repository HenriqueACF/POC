<template>
  <div class="container">
    <div class="warning">
      <img class="img" src="../../assets/cartao-fora.png" />
      <h5>
        Insira e retire seu cartão para <br />
        confirmar a operação.
      </h5>
    </div>
  </div>
  <Buttons
    class="btn"
    texto="Cancelar"
    icone="chevron_left"
    @click="cancelar"
  />
</template>

<script>
import Buttons from "../../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  created() {
    setTimeout(() => this.$router.push({ path: "/aguardandopagamento" }), 5000);
  },
  methods: {
    cancelar() {
      this.$router.push("/operacaoCancelada");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
}
.warning {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #081f60;
  margin-bottom: 6vh;
}
.img {
  width: 200px;
  height: 200px;
  margin-top: 50px;
}

.btn {
  margin-left: 2%;
  width: 400px;
}
</style>