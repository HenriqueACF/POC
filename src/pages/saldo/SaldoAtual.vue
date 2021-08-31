<template>
  <div class="container">
    <p class="subTitle">Este é seu saldo atual:</p>
    <div class="justify-between row" style="padding-bottom:5vh">    
    <div class="column q-pa-xl q-mb-xl">
      <q-card  bordered class="bg-grey-4 my-card">
        <q-card-section class="column">
          <p class="">Limite: R${{limite}}</p>
          <p class="">Limite Bloqueado: R${{LBloqueado}}</p>
          <p class="">Limite utilizado: R${{LUtilizado}}</p>
          <p class="">Compras: R${{Compras}}</p>
          <p class="">Limite Disponivel: R${{LDisponivel}}</p>
        </q-card-section>
      </q-card>
    </div>
    
    <div class="column q-pa-xl q-mb-xl card">
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
    </div>
  <div class="btns row justify-between">
    <div class="column  q-gutter-sm">
      <Buttons class="btn" style="margin-bottom:10px" icon="chevron_left"  label="Exibir saldo detalhado"/>
      <Buttons class="btn" icon="chevron_left" label="Voltar" @click="voltar" />
    </div>
    <div class="column  q-gutter-sm">
      <Buttons class="btn" style="margin-bottom:10px" icon-right="chevron_right"  label="Saque"/>
      <Buttons class="btn" icon-right="chevron_right" label="Finalizar operação" @click="finalizar"/>
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
      limite:'1.000,00',
      LBloqueado:'500,00',
      LUtilizado:'300,00',
      Compras:'100,00',
      LDisponivel:'600,00'
    };
  },
  methods:{
    voltar(){
      this.$router.push('/saldo')
    },
    finalizar(){
      this.$router.push('/operacaoFinalizada')
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

.card{
    display: flex;
    justify-content: center;
}

.my-card{
    width: 42vw;
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