<template>
  <div class="container">
    <p class="subTitle">Transações disponíveis</p>
  </div>
  <div class="btns row justify-between ">
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon="chevron_left"  label="Saldo" />
      <Buttons class="btn" icon="chevron_left" label="Pagamento" to='/Pagamento' />
    </div>
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon-right="chevron_right"  label="Extrato" />
      <Buttons class="btn" icon-right="chevron_right" label="Transferência" />
    </div>
  </div>
  <div class="warning">
    <p class="p">
      <strong>Obs:</strong> Essa máquina <strong>não</strong> é responsiva ao
      toque(touchscreen) <br />
      <strong>Utilize os botões laterais.</strong>
    </p>
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
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
  margin-left: 2%;
  margin-right: 2%;
}

.btn{
  width: 400px;
}

.warning {
  display: flex;
  align-items: center;
  border: 2px solid #e20613;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 90px;
  width: 510px;
  margin-left: 4%;
  margin-top: 100px;
}

.p {
  color: #e20613;
  font-size: 18px;
}
</style>