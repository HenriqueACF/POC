<template>
  <div class="app">
    <TopBar/>
    <Section/>
    <AreaButtons/>
    <Warning />
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import Section from './components/Section.vue'
import AreaButtons from './components/AreaButtons.vue'
import Warning from './components/Warning.vue'

export default {
  name: 'App',
  components: {
    TopBar,
    Section,
    AreaButtons,
    Warning
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app{
    background-color: #CCC;
    height: 100vh;
  }
</style>
