<template>
  <div id="app">
    <search />
    <router-view/>
  </div>
</template>

<script>
import Search from './components/header/Search.vue'
export default {
  name: 'App',
  components: {
    Search
  }
}
</script>


<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
