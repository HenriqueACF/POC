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
        <div
          ref="scrollTargetRef"
          class="q-pa-md i"
          style="max-height: 50vh; width: 27vw; overflow: auto"
        >
          <q-infinite-scroll
            @load="onLoadRef"
            :offset="250"
            :scroll-target="scrollTargetRef"
          >
            <div class="caption" icon>
              <q-icon name="receipt" size="56px"/>
              <br/>
              <span
                >BANPARÁ | AGÊNCIA - {{ agencia }} | CONTA:{{ conta }} -
                {{ nome }}</span
              >
              <br/>
              <span
                >Extrato para simples conferência | Expedido em {{ data }} às
                {{ hora }}</span
              >
              <span>DATA|HISTÓRICO|Nº DOCUMENTO|VALOR(R$)</span>
              <br />
              <span>10/02 | Saldo Anterior | 30,50</span>
              <br />
              <span>13/02 |Depósito Recebido | 001234 |30,50</span>
              <br />
              <span>10/02 | Cartão | 001234 | 30,50</span>
              <br />
              <span>10/02 |Saque Caixa Eletrônico | 30,50</span>
              <br />
              <span>10/02 | Cartão | 001234 | 30,50</span>
              <br/>
              <q-icon name="savings" size="56px" class="text-center" />
              <div class="q-mt-md text-center">
                <span>10/02 | Saldo Atual | 1.000</span>
              </div>
            </div>
          </q-infinite-scroll>
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
  setup() {
    const itemsRef = ref([{}, {}, {}, {}, {}, {}, {}]);
    const itemsId = ref([{}, {}, {}, {}, {}, {}, {}]);
    const scrollTargetRef = ref(null);

    return {
      agencia: "Pedreira",
      conta: "435325",
      nome: "Vincente José Malheiros da Fonseca Filho",
      data: "23/07/2021",
      hora: "14:36",

      itemsRef,
      itemsId,
      scrollTargetRef,

      onLoadRef(index, done) {
        setTimeout(() => {
          itemsRef.value.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },

      onLoadId(index, done) {
        setTimeout(() => {
          itemsId.value.push({}, {}, {}, {}, {}, {}, {});
          done();
        }, 2000);
      },
    };
  },
  methods: {
    editarPeriodo() {
      this.$router.push("/ExtratoPeriodo");
    },
    imprimirExtrato() {
      this.$router.push("/ImprimirExtrato");
    },
    finalizarExtrato() {
      this.$router.push("/Finalizarextrato");
    },
  },
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

.btns {
  margin-top: 10vh;
  margin-left: 2%;
  margin-right: 2%;
}

.btn {
  width: 400px;
}

.i {
  background-color: #e0e0e0;
  color: #081f60;
  font-weight: bold;
}
</style>