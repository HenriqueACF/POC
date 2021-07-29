<template>
  <div class="container">
    <p class="subTitle">Escolha o tipo de pagamento:</p>
  </div>
  <Buttons texto="Convênio" to="/senhapagamento"/>
  <Buttons texto="Reimpressão de comprovante" />
</template>

<script>
import Buttons from '../components/Buttons.vue'
export default {    
    components:{
        Buttons
    }
}
</script>

<style>
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
  
</style>