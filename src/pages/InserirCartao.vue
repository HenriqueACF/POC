<template>
  <div class="container">
      <div class="warning">
          <img class="img" src="../assets/cartao-fora.png"/>
          <h5>Insira e retire seu cartão para <br/>
              confirmar a operação.
          </h5>
      </div>
  </div>
  <Buttons class="btn" texto="Cancelar" icone='chevron_left' to='/operacaoCancelada' />
</template>

<script>
import Buttons from '../components/Buttons.vue'
export default {
    components:{
        Buttons
    }
}
</script>

<style scoped>
    .container{
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
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
    }

    .btn{
        margin-left: 2%;
        width: 400px;
    }
</style>