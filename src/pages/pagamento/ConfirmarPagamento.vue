<template>
  <div class="container">
    <p class="subTitle">Deseja efetuar esse pagamento?:</p>
    <div class="dashboard">
      <q-card bordered class="bg-grey-4 card">
        <q-card-section>
          <p class="text-h6 titleCard">Pagamento | Convênio/DARF/Reimpressão</p>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="cardSection">
          <div class="text-h6">
            Código de Barras:{{codigoDeBarras}}
          </div>
          <div class="cardSection2">
            <div class="text-h6">{{nomeBoleto}}</div>
            <q-space/>
            <div class="text-h6">Valor: R${{valor}}</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
      <div class="buttons">
        <Buttons
          texto="Não"
          icone="chevron_left"
          @click="senha"
        />
        <Buttons
          texto="Sim"
          icon-right="chevron_right"
          @click="inserirCartao"
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
      codigoDeBarras:'0000000 0000000 0000000 0 0000000',
      valor:'246,00',
      nomeBoleto:'Equatorial Energia'
    };
  },
  methods:{
    senha(){
      this.$router.push('/SenhaCodigoDeBarras')
    },
    inserirCartao(){
      this.$router.push('/inserirCartao')
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 5vh;
}

.subTitle {
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #081f60;
  font-weight: 800;
}

.dashboard {
  margin-top: 10vh;
  display: flex;
  justify-content: center;
}

.card{
    width: 70vw;
    height: 200px;
    margin-bottom: 29vh;
    color: #081f60;
}

.cardSection2{
  display: flex;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
}

.btn{
  width: 400px;
}
</style>