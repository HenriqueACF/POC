<template>
  <div class="container">
      <div class="warning">
          <img class="img" src="../assets/banpara.png"/>
          <h5>Aguarde enquanto confirmamos <br/>
              o seu pagamento.
          </h5>
      </div>
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
        display: flex;
        justify-content: center;
        margin-bottom: 60px;
    }
    .warning{
        display: flex;
        justify-content: center;
        flex-direction: column;
        color: #081F60;
    }
    .img{
        justify-content: center;
        width: 200px;
        height: 200px;
        margin-top: 60px;
    }

    .btn{
        margin-left: 1%;
    }
</style>