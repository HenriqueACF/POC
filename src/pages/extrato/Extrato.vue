<template>
  <div class="container">
    <p class="subTitle">Escolha uma opção de extrato:</p>
  <div class="btns row justify-between ">
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon="chevron_left"  label="Tarifas"/>
      <Buttons class="btn" icon="chevron_left" label="Mês anterior"/>
      <Buttons class="btn" icon="chevron_left" label="Por período" @click="extratoPeriodo"/>
      <Buttons class="btn" icon="chevron_left" label="Voltar" @click="voltar"/>
    </div>
    <div class="column  q-gutter-xl">
      <Buttons class="btn" icon-right="chevron_right"  label="Mês atual"/>
      <Buttons class="btn" icon-right="chevron_right" label="Últimos lançamentos"/>
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
  methods:{
    extratoPeriodo(){
      this.$router.push('/ExtratoPeriodo')
    },
    voltar(){
      this.$router.push('/')
    }
  }
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