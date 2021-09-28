<template>
  <div>
    {{ info }}
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'transaction',
  data: () => ({
    info: [],
    errored: false
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawtx/b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da')
      .then(response => (this.info = response.data))
      .catch(error  => {
        console.log(error)
      })
  }
}

  

</script>


<style>

</style>
