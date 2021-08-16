<template>
  <div class="container column">
    <div class="warning">
      <img class="img" src="../../assets/cartao-fora.png" />
      <h5>
        Insira e retire seu cartão para <br />
        confirmar a operação.
      </h5>
    </div>
    <Buttons
      class="btn"
      texto="Cancelar"
      icone="chevron_left"
      @click="cancelar"
    />
  </div>
</template>

<script>
import Buttons from "../../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  created() {
    setTimeout(
      () => this.$router.push({ path: "/aguardandoTransferencia" }),
      5000
    );
  },
  methods:{
    cancelar(){
      this.$router.push('/transferenciaCancelada')
    }
  }
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
  margin-bottom: 10px;
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