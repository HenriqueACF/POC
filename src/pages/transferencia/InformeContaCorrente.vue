<template>
  <div class="container">
    <p class="subTitle">Informe os dados favorecidos</p>
    <div class="box row justify-around">
      <div class="input justify-around column" style="width:50vw">
        <div class="row">
          <span style="font-size:25px; margin-right:20px">Agência</span><q-input outlined v-model="agencia" />
        </div>
        <div class="row">
          <span style="font-size:25px; margin-right:45px">Conta</span><q-input outlined v-model="conta" />
        </div>
        <div class="row">
          <span style="font-size:25px">Valor(R$)</span><q-input outlined v-model="valor" />
        </div>
      </div>
      <div class="column q-gutter-xl">
        <q-card class="my-card-top bg-grey-4">
          <q-card-section>
            <span>Limite diario para a mesma titularidade</span>
            <p>{{limiteTitular}}</p>
          </q-card-section>
        </q-card>
        <q-card class="my-card-bottom bg-grey-4">
          <q-card-section>
            <span>Limite diario para diferente titularidade</span>
            <p>{{limiteDiferente}}</p>
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
        @click="voltar"
      />
      <Buttons
        style="margin-right: 2%"
        icon-right="chevron_right"
        label="Confirmar"
        @click="confirmar"
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
      limiteTitular: 'R$ 5.000,00',
      limiteDiferente:'R$ 1.000,00'
    };
  },
  methods:{
    voltar(){
      this.$router.push('/')
    },
    confirmar(){
      this.$router.push('/confirmarContaCorrente')
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 6vh;
}

.subTitle {
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #081f60;
  font-weight: 800;
}

.btns {
  margin-top: 20vh;
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
  height: 12vh;
  width: 510px;
  margin-left: 2%;
  margin-top: 10vh;
  margin-bottom: 10vh;
}

span,
p {
  color: #081f60;
  font-weight: bold;
  font-size: 14px;
}

.p {
  color: #e20613;
  font-size: 18px;
}
</style>