<template>
  <div class="container">
    <p class="subTitle">Selecione um produto:</p>
    <div class="table" style="height: 60vh">
      <div class="q-pa-md" style="width: 50vw; ">
        <q-table
          class="bg-grey-4"
          :rows="rows"
          :columns="columns"
          row-key="name"
          hide-bottom
        />
      </div>

      <div class="btn">
        <Buttons icone="keyboard_arrow_up" />
        <Buttons icone="keyboard_arrow_down" />
      </div>
    </div>
    <div class="btns" style="">
      <Buttons texto="Voltar" icone="chevron_left" @click="voltar"/>
      <Buttons texto="Confirmar" icon-right="chevron_right" @click="confirmar" />
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
  methods:{
    voltar(){
      this.$router.push('/')
    },
    confirmar(){
      this.$router.push('/saldoAtual')
    }
  }
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

.table {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 2%;
}

.btn {
  margin-bottom: 40px;
  }

.btns {
  display: flex;
  justify-content: space-between;
  margin: 0 2%;
}
</style>