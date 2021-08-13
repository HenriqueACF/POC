<template>
  <div class="container">
    <p class="subTitle">Informe o período e confirme para gerar o extrato:</p>
    <div class="box row justify-around">
      <div class="input justify-around column" style="width:30vw">
        <div class="row justify-around q-pb-md">
          <span style="font-size:25px; margin-right:0px">Data Inicial</span><q-input outlined v-model="dataInicial" />
        </div>
        <div class="row justify-around">
          <span style="font-size:25px; margin-right:20px">Data Final</span><q-input outlined v-model="dataFinal" />
        </div>
      </div>
    </div>
    <div class="row justify-between" style="margin-top:280px">
      <Buttons
        style="margin-left: 2%"
        icon="chevron_left"
        label="Voltar"
        to="/Extrato"
      />
      <Buttons
        style="margin-right: 2%"
        icon-right="chevron_right"
        label="Confirmar"
        to="/ExtratoTela"
      />
    </div>
  </div>
</template>

<script>
import Buttons from "../../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  setup() {
    return {
      dataInicial:'',
      dataFinal:''
    };
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

.btn {
  width: 400px;
}

span,
p {
  color: #081f60;
  font-weight: bold;
  font-size: 14px;
}

</style>