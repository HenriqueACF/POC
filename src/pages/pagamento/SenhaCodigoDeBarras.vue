<template>
  <div class="container">
    <p class="subTitle">Insira o código manualmente:</p>
    <div class="dashboard">
      <img class="cdg" src="../../assets/codigo.jpeg" />
    </div>
    <div class="input">
      <q-input class="inputs" filled v-model="codigo.n1" />
      <q-input class="inputs" filled v-model="codigo.n2"  />
      <q-input class="inputs" filled v-model="codigo.n3"  />
      <q-input class="inputs menor" filled v-model="codigo.n4"  />
      <q-input class="inputs" filled v-model="codigo.n5"  />
    </div>
    <div class="footer">
      <div class="warning">
        <p><strong>Utilize o teclado numérico</strong> localizado <br/>
          abaixo da tecla para digitar código.
        </p>
      </div>
      <Buttons class="btn" texto='Confirmar' icon-right='chevron_right' @click="confirmar"/>
    </div>
  </div>
</template>

<script scoped>
import Buttons from "../../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  setup(){
      return{
          codigo:{
              n1:'',
              n2:'',
              n3:'',
              n4:'',
              n5:''
          }
      }
  },
  methods:{
    confirmar(){
      this.$router.push('/confirmarPagamento')
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 5vh;
}

.dashboard {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
}

.cdg {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  margin-bottom: 4vh;
}
.subTitle {
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #081f60;
  font-weight: 800;
}

.input{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 7vh;
}

.inputs{
    margin-left: 10px;
    width: 100px;
}
.menor{
    width: 50px;
}
.btn{
    margin-right: 2%;
    width: 400px;
}

.footer{
  display: flex;
  justify-content: space-between;
  margin-top: 27vh;
}

.warning{
  border: 2px solid #081f60;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color:#081f60;
  width: 300px;
  margin-left: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}
</style>