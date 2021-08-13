<template>
  <div class="container">
    <p class="subTitle">Escolha uma opção de extrato:</p>
  <div class="btns row justify-between ">
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon="chevron_left"  label="Tarifas" to=''/>
      <Buttons class="btn" icon="chevron_left" label="Mês anterior" to=''/>
      <Buttons class="btn" icon="chevron_left" label="Por período" to='/ExtratoPeriodo'/>
      <Buttons class="btn" icon="chevron_left" label="Voltar" to='/'/>
    </div>
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon-right="chevron_right"  label="Mês atual" to=''/>
      <Buttons class="btn" icon-right="chevron_right" label="Últimos lançamentos" to=''/>
    </div>
  </div>
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
  padding-top: 10px;
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
  width: 400px;
}
</style>