<template>
  <div class="page_block">
    <div>
      <table-list
        :block-info="info" 
      />  
    </div>
    <transaction-block
      :transaction-block="info"  
    />
  </div>
</template>

<script>
import TableList from './block-of-table-list.vue'
import TransactionBlock from './block-of-transaction-block.vue'
import axios from 'axios'

export default {

  name: 'block',
  components: {
    TableList,
    TransactionBlock
  },
  data: () => ({
    info: [],
    errored: true
  }),
  mounted() {
    axios
      .get('https://blockchain.info/rawblock/' + this.$route.params.hash)
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  updated () {
    axios
      .get('https://blockchain.info/rawblock/' + this.$route.params.hash)
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }      
}

</script>


<style>
.page_block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}


</style>


