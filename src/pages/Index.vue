<template>
  <div class="container">
    <p class="subTitle">Transações disponíveis</p>
  </div>
  <div class="btns">
    <Buttons class="btnLeft" texto="Saldo" icone="chevron_left" />
    <Buttons class="btnRight " texto="Extrato" icon-right="chevron_right"/>
    <Buttons class="btnLeft" texto="Pagamento" icone="chevron_left" to='/pagamento'/>
    <Buttons class="btnRight" texto="Transferência" icon-right="chevron_right"/>
  </div>
  <div class="warning">
    <p class="p">
      <strong>Obs:</strong> Essa máquina <strong>não</strong> é responsiva ao toque(touchscreen) <br/>
      <strong>Utilize os botões laterais.</strong>
    </p>
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
    justify-content: space-between;
  }

  .btnLeft{
    display: flex;
    flex-direction: column !important;
    left: 4%;
  }
  
  .warning{
    display: flex;
    align-items: center;
    border: 2px solid #E20613;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    height: 90px;
    width: 510px;
    margin-left: 4%;
    margin-top: 100px;
}
.p{
    color: #E20613;
    font-size: 18px;
}
</style>