<template>
  <div class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    
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

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

</style>
