<template>
  <div class="container">
    <p class="subTitle">Confirmar novamente os dados para transfêrencia?</p>
    <div class="dashboard">
      <q-card bordered class="bg-grey-4 card">
        <q-card-section>
          <p class="text-h6 titleCard">Transfêrencia | Conta Corrente > Conta Corrente</p>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="cardSection">
          <div class="cardSection2">
            <div class="text-h6"><strong>Agência: </strong>47-Pedreira</div>
            <q-space/>
            <div class="text-h6"><strong>Favorecido: </strong>Vincente José Malheiros da Fonseca Filho</div>
          </div>
          <div class="cardSection2">
            <div class="text-h6"><strong>Conta</strong>435325</div>
            <q-space/>
            <div class="text-h6"><strong>Valor:</strong>R$35,00</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
      <div class="buttons">
        <Buttons
          texto="Não"
          icone="chevron_left"
          to="/InformeContaCorrente"
        />
        <Buttons
          texto="Sim"
          icon-right="chevron_right"
          to="/inserirCartaoTransferencia"
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