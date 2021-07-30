<template>
  <div class="container">
      <div class="warning">
          <img class="img" src="../assets/cancelar.png"/>
          <h4>Operação Cancelada!</h4>
          <h5>Aguarde, você será redirecionado à <br/>
              tela inicial em alguns segundos.
          </h5>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
    }
    .warning{
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #081F60;
    }
    .img{
        width: 200px;
        height: 200px;
        margin-top: 60px;
        margin-left: 55px;
    }
</style>