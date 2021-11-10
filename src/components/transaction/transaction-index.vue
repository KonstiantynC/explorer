<template>
  <div class="page_transaction">
    <div 
      v-if="!isLoaded"
      class="block_loader" 
    >
      <loader />
    </div>
    <div 
      v-else 
      class="page_block_title_transaction"
    >
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
  </div>
</template>


<script>
import axios from 'axios'
import transactionInfo from './transaction-info.vue'
import transactionListMain from './transaction-list-main.vue'
import transactionListOther from './transaction-list-other.vue'
import transactionPageUnderheader from './transaction-page-underheader.vue'
import loader from '../views/loader.vue'

export default {
  name: 'transaction',
  components: {
    transactionInfo,
    transactionListMain,
    transactionListOther,
    transactionPageUnderheader,
    loader   
  },
  data: () => ({
    info: [],
    errored: true,
    isLoaded: true 
  }),
  methods: {
    loadTransaction () {
      axios
      .get('https://blockchain.info/rawtx/' + this.$route.params.tx)
      .then(response => {
        this.info = response.data
        this.isLoaded = true
      })
      .catch(error  => {
        this.$router.push({
          name: 'error-index',
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
.page_transaction {
  display: flex;
  flex-direction: column;
  justify-content: center;align-items: center;
  width: 100%;
}

.page_block_title_transaction {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.block_loader {
  margin-top: 60px;
}

</style>
