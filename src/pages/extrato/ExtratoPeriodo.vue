<template>
  <div class="container">
    <p class="subTitle" style="padding-bottom:2vh">Informe o período e confirme para gerar o extrato:</p>
    <div class="box row justify-around">
      <div class="input justify-around column" style="width:30vw">
        <div class="row justify-around q-pb-md">
          <span style="font-size:25px">Data Inicial</span><q-input outlined v-model="dataInicial" />
        </div>
        <div class="row justify-around">
          <span style="font-size:25px; margin-right:2vh">Data Final</span><q-input outlined v-model="dataFinal" />
        </div>
      </div>
    </div>
    <div class="row justify-between" style="margin-top:43vh">
      <Buttons
        style="margin-left: 2%"
        icon="chevron_left"
        label="Voltar"
        @click="voltar"
      />
      <Buttons
        style="margin-right: 2%"
        icon-right="chevron_right"
        label="Confirmar"
        @click="extratoTela"
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
  methods:{
    voltar(){
      this.$router.push('/extrato')
    },
    extratoTela(){
      this.$router.push('/extratoTela')
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 7vh;
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