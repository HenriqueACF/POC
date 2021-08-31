<template>
  <div class="container">
    <p class="subTitle">Escolha o tipo de pagamento:</p>
  </div>
  <div class="btns">
    <Buttons class="btn" texto="CONVÊNIO/DARF/REIMPRESSÃO" icone='chevron_left' @click="tipoPagamento" />
    <Buttons texto="Voltar" icone='chevron_left' @click="voltar" />
  </div>
</template>

<script>
import Buttons from '../../components/Buttons.vue'
export default {    
    components:{
        Buttons
    },
    methods:{
      voltar(){
        this.$router.push('/')
      },
      tipoPagamento(){
        this.$router.push('/tipoPagamento')
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
    margin-top: 12vh;
  }

  .btn{
    width: 400px;
    margin-top: 22vh;
  }
</style>