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
  mounted() {
    console.log(this.$route)
    axios
      .get('https://blockchain.info/rawtx/b6f6991d03df0e2e04dafffcd6bc418aac66049e2cd74b80f14ac86db1e3f0da')
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
  width: 1185pxpx;
}

.li__out {
  display: flex;
  flex-direction: column; 
  align-items: flex-start;
  width: 1185pxpx;
}

</style>
