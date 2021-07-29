<template>
  <div class="container">
    <p class="subTitle">Insira o código manualmente:</p>
    <div class="dashboard">
      <img class="cdg" src="../assets/codigo.jpeg" />
    </div>
    <div class="input">
      <q-input class="inputs" filled v-model="codigo.n1"  />
      <q-input class="inputs" filled v-model="codigo.n2"  />
      <q-input class="inputs" filled v-model="codigo.n3"  />
      <q-input class="inputs menor" filled v-model="codigo.n4"  />
      <q-input class="inputs" filled v-model="codigo.n5"  />
    </div>
    <Buttons class="btn" texto='Confirmar' to='/'/>
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
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
  }
}
</script>

<style scoped>
.container {
  padding-top: 30px;
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
  height: 160px;
  margin-bottom: 40px;
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
    margin: 20px;
}

.inputs{
    margin-left: 10px;
    width: 100px;
}
.menor{
    width: 50px;
}
.btn{
    display: flex;
    left: 75%;
    margin-top: 45px;
}
</style>