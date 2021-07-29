<template>
  <div class="container">
    <p class="subTitle">Digite a sua senha:</p>
    <div class="dashboa">
        <q-input filled v-model="text" />
        <Buttons texto="Cancelar" />
        <Buttons texto="Confirmar" to='/codigoDeBarras'/>
    </div>
  </div>
    
</template>

<script>
import { ref } from 'vue'
import Buttons from '../components/Buttons.vue'
export default {
  components:{
    Buttons
  },
  setup () {
    return {
      text: ref('')
    }
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