<template>
  <div id="app">
     <cabeza></cabeza>
  </div>
</template>

<script>
import cabeza from './components/aplication.vue'
export default {
  name: 'app',
  components: {
    cabeza
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
