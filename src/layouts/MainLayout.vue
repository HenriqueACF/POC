<template>
  <q-layout>
    <header class="topBar">
      <p class="title">Modulo Cliente</p>
    </header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {
    
  }
})
</script>

<style> 
  .topBar{
    background-color: #081F60;
    height: 65px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px;
    display: flex;
    justify-content: center;
  }
  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    color:#FFF;
    font-weight: 500;
    font-size: 20px;
  }
</style>