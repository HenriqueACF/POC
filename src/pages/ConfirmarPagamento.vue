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
            Código de Barras: 0000000 0000000 0000000 0 0000000
          </div>
          <q-space/>
          <div class="text-h6">Rede Celpa</div>
          <div class="text-h6">Valor:R$246,00</div>
        </q-card-section>
      </q-card>
    </div>
      <div class="buttons">
        <Buttons
          texto="Não"
          icone="chevron_left"
          to="/SenhaCodigoDeBarras"
        />
        <Buttons
          texto="Sim"
          icon-right="chevron_right"
          to="/codigoDeBarras"
        />
      </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Buttons from "../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  setup() {
    return {
      text: ref(""),
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

.dashboard {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.card{
    width: 70vw;
    height: 200px;
    margin-bottom: 120px;
    color: #081f60;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 15px;
}
</style>