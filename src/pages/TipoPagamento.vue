<template>
  <div class="container">
    <p class="subTitle">Escolha o tipo de pagamento:</p>
  </div>
  <div class="btns">
    <Buttons texto="Convênio" to="/senhapagamento" icone='chevron_left'/>
    <Buttons texto="Reimpressão de comprovante" icone='chevron_left' class="btn2"/>
    <Buttons texto="Voltar" icone='chevron_left' to='/pagamento' />
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

  .btn2{
    width: 400px;
    margin-top: 70px;
    margin-bottom: 100px;
  }
</style>