<template>
  <div class="ul_list">
    <transaction-page-underheader
    :transaction-page-underheader="info"
    />
    <transaction-list
      :transaction-list="info"
    />
    <transaction-info 
      :transaction-info="info"
    />
  </div>
</template>


<script>
import axios from 'axios'
import TransactionInfo from './transaction-info.vue'
import TransactionList from './transaction-list.vue'
import transactionPageUnderheader from './transaction-page-underheader.vue'

export default {
  name: 'transaction',
  components: {
    TransactionInfo,
    TransactionList ,
    transactionPageUnderheader   
  },
  data: () => ({
    info: [],
    errored: true 
  }),
  methods: {
    loadTransaction () {
      axios
      .get('https://blockchain.info/rawtx/' + this.$route.params.tx)
      .then(response => {
        this.info = response.data
      })
      .catch(error  => {
        this.$router.push({
          name: 'error',
          params: { 
            input: this.$route.params.tx, 
          }
        })
        console.log(error)
      })
    }
  },
  mounted() {
    this.loadTransaction ()
  },
  /*updated() {
    this.loadTransaction ()
  }*/
}

  

</script>


<style>
.ul_list {
  display: flex;
  flex-direction: column;
  justify-content: center;align-items: center;
  width: 100%;
}


</style>
