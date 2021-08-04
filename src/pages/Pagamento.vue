<template>
  <div class="container">
    <p class="subTitle">Escolha o tipo de pagamento:</p>
  </div>
  <div class="btns">
    <Buttons class="btn" texto="CONVÊNIO/DARF/REIMPRESSÃO" icone='chevron_left' to='/tipoPagamento' />
    <Buttons texto="Voltar" icone='chevron_left' to='/' />
  </div>
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
    padding-top: 30px;
  }

  .subTitle{
    display: flex;
    justify-content: center;
    font-size: 25px;
    color: #081F60;
    font-weight: 800;
  }
  
  .btns{
    display: flex;
    flex-direction: column;
    margin-left: 2%;
    margin-top: 50px;
  }

  .btn{
    width: 400px;
    margin-top: 50px;
    margin-bottom: 90px;
  }
</style>