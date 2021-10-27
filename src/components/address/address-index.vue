<template>
  <div class="ul_list">
    <address-list 
      :address-list="info"
    />
  </div>
</template>


<script>
import axios from 'axios'
import AddressList from './address-of-table-list.vue'

export default {
  components: {
    AddressList
  },
  name: 'address',
  data: () => ({
    info: [],
    errored: true ,
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawaddr/' + this.$route.params.addr, {
        params: {
          cors: true  
        }
      })
      .then(response => {
        this.info = response.data
      })
      .catch(error  => {
        this.$router.push({name: 'error'})
        console.log(error)
      })
  },
  updated() {
    axios
      .get('https://blockchain.info/rawaddr/' + this.$route.params.addr, {
        params: {
          cors: true  
        }
      })
      .then(response => {
        this.info = response.data
      })
      .catch(error  => {
        this.$router.push({name: 'error'})
        console.log(error)
      })
  }
}

  

</script>


<style>
ul {
  list-style-type: none;
}

.address__transaction {
  width: 800px;
}

</style>
