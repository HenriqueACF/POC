<template>
  <div class="container">
    <p class="subTitle"></p>
    <div class="dashboard">
        <div class="middle">
            <h4>Deseja realizar mais uma operação?</h4>
        </div>
    </div>
      <div class="buttons">
        <Buttons
          texto="Sim"
          icon-right="chevron_right"
          to="/"
        />
        <Buttons
          texto="Não"
          icone="chevron_left"
          to="/Final"
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
  created() {
    setTimeout(() => this.$router.push({ path: "/trans" }), 5000);
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