<template>
  <div class="container">
    <p class="subTitle">Transações disponíveis</p>
  </div>
  <Buttons texto="Saldo" icone="chevron_left" />
  <Buttons texto="Extrato"/>
  <Buttons texto="Pagamento" to='/pagamento'/>
  <Buttons texto="Transferência"/>
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
  
</style>