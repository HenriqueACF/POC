<template>
  <div class="container">
    <p class="subTitle">Informe os dados favorecidos</p>
    <div class="box row justify-between">
      <div class="input justify-between row">
        <span>Agência</span><q-input outlined v-model="agencia"/> 
        <span>Conta</span><q-input outlined v-model="conta" />
        <span>Valor(R$)</span><q-input outlined v-model="valor"/>
      </div>
      <div class="column q-gutter-xl">
        <q-card class="my-card-top">
          <q-card-section>
              <span>Limite diario para a mesma titularidade</span>
              <p>R$ 5.000,00</p>
          </q-card-section>
        </q-card>
        <q-card class="my-card-bottom">
          <q-card-section>
              <span>Limite diario para diferente titularidade</span>
              <p>R$ 1.000,00</p>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="warning">
      <p class="p">
        <strong>Obs:</strong> Essa máquina <strong>não</strong> é responsiva ao
        toque(touchscreen) <br />
        <strong>Utilize os botões laterais.</strong>
      </p>
    </div>
    <div class="row justify-between">
    <Buttons
      style="margin-left: 2%"
      icon="chevron_left"
      label="Voltar"
      to="/"
    />
    <Buttons
      style="margin-right: 2%"
      icon-right="chevron_right"
      label="Confirmar"
      to="/confirmarContaCorrente"
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
      agencia: "",
      conta: "",
      valor: "",
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

.btns {
  margin-top: 60px;
  margin-left: 2%;
  margin-right: 2%;
}

.btn {
  width: 400px;
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
  margin-top: 70px;
  margin-bottom: 60px;
}

.p {
  color: #e20613;
  font-size: 18px;
}
</style>