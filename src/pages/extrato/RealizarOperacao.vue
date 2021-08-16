<template>
  <div class="container">
    <div class="dashboard">
        <div class="middle">
            <h4>Deseja realizar mais uma operação?</h4>
        </div>
    </div>
      <div class="buttons">
        <Buttons
          texto="Sim"
          icone="chevron_left"
          @click="sim"
        />
        <Buttons
          texto="Não"
          icon-right="chevron_right"
          @click="nao"
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
    return {};
  },
  methods:{
    sim(){
      this.$router.push('/')
    },
    nao(){
      this.$router.push('/final')
    }
  }
};
</script>

<style scoped>
.container {
  padding-top: 30px;
}

.middle {
  display: flex;
  justify-content: center;
  font-size: 25px;
  color: #081f60;
  font-weight: 800;
  margin-bottom: 300px;
}

.dashboard {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin-left: 2%;
  margin-right: 2%;
}
</style>