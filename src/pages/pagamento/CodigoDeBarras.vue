<template>
  <div class="container">
    <div class="dashboard">
      <img class="cdg" src="../../assets/codigo.jpeg" />
    </div>
    <div class="warning">
      <p class="p">
        Coloque o <strong>documento na área de leitura</strong> <br />
        indicada ou <strong>pressione qualquer tecla para inserir <br />
        manualmente</strong> o codigo de barra.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    setTimeout(() => this.$router.push({ path: "/senhacodigodebarras" }), 5000);
  }
};
</script>

<style scoped>
.container {
  padding-top: 30px;
}

.dashboard {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
}

.cdg {
  display: flex;
  justify-content: center;
  height: 160px;
  padding-bottom: 20px;
}

.warning{
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #2F368E;
    border-radius: 25px;
    height: 120px;
    width: 450px;
    margin-left: 34%;
}
.p{
    color: #2F368E;
    font-size: 18px;
}
</style>