<template>
  <div class="container">
    <p class="subTitle">Digite a sua senha:</p>
    <q-input class="input" filled v-model="password" type="password" max-lenght="8"/>
    <div class="dashboard">
        <div class="warning">
          <p>
            <strong>Utilize o teclado numérico</strong> localizado <br/>
            abaixo da tela para digitar a sua senha.
          </p>
        </div>
        <div class="buttons">
          <Buttons texto="Cancelar" icone='chevron_left' class="btn" @click="cancelar" />
          <Buttons texto="Confirmar" icon-right="chevron_right" class="btn" @click="confirmar"/>
        </div>
    </div>
  </div>
    
</template>

<script>
import Buttons from '../../components/Buttons.vue'
export default {
  components:{
    Buttons
  },
  setup () {
    return {
      password:''
    }
  },
  methods:{
    confirmar(){
      this.$router.push('/codigoDeBarras')
    },
    cancelar(){
      this.$router.push('/operacaoCancelada')
    }
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

  .dashboard{
    margin-top: 130px;
  }

  .input{
    margin-top: 60px;
    margin-left: 32%;
    margin-bottom: 60px;
    width: 500px;
    font-size: 25px;
  }

  .warning{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #081F60;
    font-size: 18px;
    margin-left: 40px;
    border:2px solid #081F60;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 400px;
    margin-bottom: 60px;
  }

  .buttons{
    display: flex;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 2%;
  }

  .btn{
    width: 400px;
  }
</style>