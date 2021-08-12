<template>
  <div class="container">
      <div class="warning">
          <img class="img" src="../../assets/check.png"/>
          <h5>Extrato impresso<br/>
              com sucesso.
          </h5>
          <h6>
              Retire o extrato <br/>
              no local indicado.
          </h6>
      </div>
  </div>
</template>

<script>
export default {
    created() {
    setTimeout(() => this.$router.push({ path: "/extratofinalizado" }), 5000);
  }
}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
    }
    .warning{
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #081F60;
    }
    .img{
        width: 200px;
        height: 200px;
        margin-top: 50px;
    }
</style>