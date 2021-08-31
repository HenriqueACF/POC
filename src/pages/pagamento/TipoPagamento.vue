<template>
  <div class="container">
    <p class="subTitle">Escolha o tipo de pagamento:</p>
  </div>
  <div class="btns">
    <Buttons texto="Convênio" icone='chevron_left' class="btn" @click="convenio"/>
    <Buttons texto="Reimpressão de comprovante" icone='chevron_left' class="btn"/>
    <Buttons texto="Voltar" icone='chevron_left' to='/pagamento' class="btn" />
  </div>
</template>

<script>
import Buttons from '../../components/Buttons.vue'
export default {    
    components:{
        Buttons
    },
    methods:{
      convenio(){
        this.$router.push('/senhapagamento')
      }
    }
}
</script>

<style scoped>
    .container{
    padding-top: 5vh;
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
    margin-top: 27vh;
  }

  .btn{
    width: 400px;
    margin-top: 6vh;
  }
</style>