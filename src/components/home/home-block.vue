<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home-block',
  data: () => ({
    info: []
  }),
  mounted() {
    axios
      .get('https://blockchain.info/blocks', {
        params: {
          cors: true  
        }
      })
      .then(response => {
        this.info = response.data
      })
      .catch(error  => {
        console.log(error)
      })
  }
}
</script>


<style>


</style>
