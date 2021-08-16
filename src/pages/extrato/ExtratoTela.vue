<template>
  <div class="container">
    <p class="subTitle">Esse é o extrato do período solicitado:</p>
    <div class="btns row justify-between">
      <div class="column q-gutter-xl">
        <Buttons class="btn" icon="keyboard_arrow_up" />
        <Buttons class="btn" icon="keyboard_arrow_down" />
        <Buttons
          class="btn"
          icon="chevron_left"
          label="Editar período"
          @click="editarPeriodo"
        />
        <Buttons
          class="btn"
          icon="chevron_left"
          label="Imprimir"
          @click="imprimirExtrato"
        />
      </div>
      <div class="column q-gutter-xl">
        <div class="q-pa-md" style="width:30vw">
          <q-carousel
            v-model="slide"
            vertical
            transition-prev="slide-down"
            transition-next="slide-up"
            swipeable
            animated
            control-color="white"
            navigation-icon="radio_button_unchecked"
            navigation
            padding
            arrows
            height="300px"
            class="bg-grey-7 text-white  rounded-borders"
          >
            <q-carousel-slide name="page1" class="column no-wrap flex-center">
              <q-icon name="receipt" size="56px" />
              <div class="q-mt-sm">
                <span>BANPARÁ | AGÊNCIA - {{agencia}} | CONTA:{{conta}} - {{nome}}</span>
                <span>Extrato para simples conferência | Expedido em {{data}} às {{hora}}</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="page2" class="column no-wrap flex-center">
              <div class="q-mt-sm">
                <span>DATA|HISTÓRICO|Nº DOCUMENTO|VALOR(R$)</span>
                <br>
                <span>10/02 | Saldo Anterior |   30,50</span>
                <br>
                <span>13/02 |Depósito Recebido | 001234 |30,50</span>
                <br>
                <span>10/02 | Cartão | 001234 | 30,50</span>
                <br>
                <span>10/02 |Saque Caixa Eletrônico | 30,50</span>
                <br>
                <span>10/02 | Cartão | 001234 |  30,50</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="page3" class="column no-wrap flex-center">
              <q-icon name="savings" size="56px"/>
              <div class="q-mt-md text-center">
                  <span>10/02 | Saldo Atual | 1.000</span>
              </div>
            </q-carousel-slide>
            <q-carousel-slide name="page4" class="column no-wrap flex-center">
              <div class="q-mt-md text-center">
                
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
        <Buttons
          class="btn"
          icon-right="chevron_right"
          label="Finalizar operação"
          @click="finalizarExtrato"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Buttons from "../../components/Buttons.vue";
export default {
  components: {
    Buttons,
  },
  data() {
    return {
      slide: ref("page1"),
      agencia:'Pedreira',
      conta: '435325',
      nome:'Vincente José Malheiros da Fonseca Filho',
      data:'23/07/2021',
      hora:'14:36'
    };
  },
  methods: {
    editarPeriodo () {
      this.$router.push('/ExtratoPeriodo')
    },
    imprimirExtrato(){
      this.$router.push('/ImprimirExtrato')
    },
    finalizarExtrato(){
      this.$router.push('/Finalizarextrato')
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

.btns {
  margin-top: 60px;
  margin-left: 2%;
  margin-right: 2%;
}

.btn {
  width: 400px;
}
</style>