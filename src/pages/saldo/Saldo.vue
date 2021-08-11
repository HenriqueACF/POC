<template>
  <div class="container">
    <p class="subTitle">Selecione um produto:</p>
    <div class="table" >
      <div class="q-pa-md" style="width:50vw">
        <q-table :rows="rows" :columns="columns" row-key="name" />
      </div>

      <div class="btn">
        <Buttons icone="keyboard_arrow_up" />
        <Buttons icone="keyboard_arrow_down" />
      </div>
    </div>
  </div>
  <div class="btns">
    <Buttons texto="Voltar" icone="chevron_left" to="/" />
    <Buttons texto="Confirmar" icon-right="chevron_right" to="/saldoatual" />
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
  margin-bottom: 180px;
}

.btn {
  margin-bottom: 60px;
  margin-right: 2%;
}

.btns {
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
}
</style>