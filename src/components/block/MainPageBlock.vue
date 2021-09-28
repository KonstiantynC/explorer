<template>
  <div>
    {{ info }}
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'block',
  data: () => ({
    info: [],
    errored: false
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawblock/0000000000000bae09a7a393a8acded75aa67e46cb81f7acaa5ad94f9eacd103')
      .then(response => (this.info = response.data))
      .catch(error  => {
        console.log(error)
      })
  }
}

  

</script>


<style>

</style>
