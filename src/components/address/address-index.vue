<template>
  <div class="ul_list">
    <address-page-underheader />
    <address-list 
      :address-list="info"
    />
  </div>
</template>


<script>
import axios from 'axios'
import AddressList from './address-of-table-list.vue'
import addressPageUnderheader from './address-page-underheader'

export default {
  components: {
    AddressList,
    addressPageUnderheader
  },
  name: 'address',
  data: () => ({
    info: [],
    errored: true ,
  }),
  methods: {
    loadAddress () {
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
        this.$router.push({
          name: 'error',
          params: { 
            input: this.$route.params.addr, 
          }
        })
        console.log(error)
      })
    }
  },
  mounted() {
    this.loadAddress ()
  },
  /*updated() {
    this.loadAddress ()
  }*/
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
