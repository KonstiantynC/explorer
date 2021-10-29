<template>
  <div class="ul_list">
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

export default {
  name: 'transaction',
  components: {
    TransactionInfo,
    TransactionList    
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
  updated() {
    this.loadTransaction ()
  }
}

  

</script>


<style>
ul {
  list-style-type: none;
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.ul_list {

}

.li__inputs {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
}

.li__out {
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: 1200px;
}

</style>
