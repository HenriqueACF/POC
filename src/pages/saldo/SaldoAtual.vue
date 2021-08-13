<template>
  <div class="container">
    <p class="subTitle">Este é seu saldo atual:</p>
    <div class="q-pa-xl q-mb-xl card">
      <q-card  bordered class="bg-grey-4 my-card">
        <q-card-section class="cardUp">
          <div class="text-subtitle2">Total da conta: R${{totalConta}}</div>
          <div class="text-subtitle2">Saldo para o saque: R${{saldoSaque}}</div>
        </q-card-section>

        <q-separator inset />

        <q-card-section class="cardDown">
          <span><strong>Agência:</strong> {{agencia}}</span>
          <span><strong>Conta:</strong>{{cConta}} - {{cNome}}</span>
        </q-card-section>
      </q-card>
    </div>
  <div class="btns row justify-between">
    <div class="column  q-gutter-sm">
      <Buttons class="btn" style="margin-bottom:20px" icon="chevron_left"  label="Exibir saldo detalhado" to=''/>
      <Buttons class="btn" icon="chevron_left" label="Voltar" to='/saldo' />
    </div>
    <div class="column  q-gutter-sm">
      <Buttons class="btn" style="margin-bottom:20px" icon-right="chevron_right"  label="Saque" to=''/>
      <Buttons class="btn" icon-right="chevron_right" label="Finalizar operação" to='/operacaoFinalizada'/>
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
  data() {
    return {
      //Variaveis
      totalConta:'1.232,17',
      saldoSaque:'1.213,17',
      agencia:'Pedreira',
      cConta:'435325',
      cNome:'Vicente José Malheiros da Fonseca Filho',

      //Tabela
      columns: [
        {
          name: "name",
          required: true,
          label: "Produto",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
        },
        {
          name: "agencia",
          align: "center",
          label: "Agência",
          field: "agencia",
        },
        { name: "conta", label: "Conta", field: "conta" },
      ],
      rows: [
        {
          name: "Conta Corrente",
          agencia: "47-Pedreira",
          conta: "435325",
        },
        {
          name: "Conta Poupnaça",
          agencia: "15-Senador L",
          conta: "1852455",
        },
      ],
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

.card{
    display: flex;
    justify-content: center;
}

.my-card{
    width: 900px;
}

.cardUp{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.cardDown{
    display: flex;
    justify-content: space-around;
    flex-direction: row;
}

.btns {
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
}
</style>