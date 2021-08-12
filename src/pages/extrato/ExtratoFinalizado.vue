<template>
  <div class="container">
      <div class="warning">
          <img class="img" src="../../assets/check.png"/>
          <h5>Operação finalizada!</h5>
          <h6>
              Aguarde, você será redirecionado à <br/>
              tela inicial em alguns segundos.
          </h6>
      </div>
  </div>
</template>

<script>
export default {
    created() {
    setTimeout(() => this.$router.push({ path: "/realizarOperacao" }), 5000);
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