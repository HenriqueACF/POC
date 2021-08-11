<template>
  <div class="container">
    <p class="subTitle">Escolha a modalidade de transferência</p>
  <div class="btns row justify-between ">
      <Buttons class="btn" icon="chevron_left"  label="Conta Corrente > Conta Corrente" to='/senhaContaCorrente'/>
      <Buttons class="btn" icon-right="chevron_right" label="Conta Corrente > Conta Poupança"  />
  </div>
  <div class="warning">
    <p class="p">
      <strong>Obs:</strong> Essa máquina <strong>não</strong> é responsiva ao
      toque(touchscreen) <br />
      <strong>Utilize os botões laterais.</strong>
    </p>
  </div>
  <Buttons style="margin-left:2%" icon='chevron_left' label="Voltar" to="/" />
  </div>
</template>

<script>
import Buttons from "../../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
};
</script>

<style scoped>
.container {
  padding-top: 30px;
}

.subTitle {
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #081f60;
  font-weight: 800;
}

.btns{
  margin-top: 60px;
  margin-left: 2%;
  margin-right: 2%;
}

.btn{
  width: 600px;
}

.warning {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e20613;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 90px;
  width: 510px;
  margin-left: 2%;
  margin-top: 100px;
  margin-bottom: 60px;
}

.p {
  color: #e20613;
  font-size: 18px;
}
</style>