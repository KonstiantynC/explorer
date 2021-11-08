<template>
  <div class="ul_list">
    <transaction-page-underheader
      :transaction-page-underheader="info"
    />
    <transaction-list-main 
      :transaction-list-main="info"
    />
    <transaction-list-other 
      :transaction-list-other="info"
    />
    <transaction-info 
      :transaction-info="info"
    />
  </div>
</template>


<script>
import axios from 'axios'
import transactionInfo from './transaction-info.vue'
import transactionListMain from './transaction-list-main.vue'
import transactionListOther from './transaction-list-other.vue'
import transactionPageUnderheader from './transaction-page-underheader.vue'

export default {
  name: 'transaction',
  components: {
    transactionInfo,
    transactionListMain,
    transactionListOther,
    transactionPageUnderheader   
  },
  data: () => ({
    info: [],
    errored: true, 
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
