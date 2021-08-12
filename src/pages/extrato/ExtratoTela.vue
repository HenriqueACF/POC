<template>
  <div class="container">
    <p class="subTitle">Esse é o extrato do período solicitado:</p>
  <div class="btns row justify-between ">
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon="keyboard_arrow_up"/>
      <Buttons class="btn" icon="keyboard_arrow_down" />
      <Buttons class="btn" icon="chevron_left" label="Editar período" to='/ExtratoPeriodo'/>
      <Buttons class="btn" icon="chevron_left" label="Imprimir" to='/ImprimirExtrato'/>
    </div>
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon-right="chevron_right" label="Finalizar operação" to='/Finalizarextrato'/>
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
  width: 400px;
}
</style>